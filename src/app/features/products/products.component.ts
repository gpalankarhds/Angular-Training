import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { TextTransformPipe } from 'src/app/pipes/text-transform.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    mrp: new FormControl('', Validators.required),
    discount: new FormControl(''),
    category: new FormControl('', Validators.required),
  });
  categories: any[] = [
    {
      value: 'soap',
      displayName: 'Soap',
    },
    {
      value: 'detergent',
      displayName: 'Detergent',
    },
    {
      value: 'toothpaste',
      displayName: 'Tooth Paste',
    },
    {
      value: 'skincare',
      displayName: 'Skin Care',
    },
  ];

  productsList: any[] = [
    {
      name: 'Surf Excel Detergent Powder',
      description: 'Surf Excel Detergent Powder Easy Wash 1kg',
      mrp: 136,
      discount: 124.13,
      imageUrl:
        'https://storage.googleapis.com/hul-shikhar-cms/CMS-PROD-HERO/10015.jpg',
      category: 'soap',
    },
    {
      name: 'Close Up Toothpaste',
      description: 'Close Up Toothpaste Ever Fresh Red Hot Gel 40g RTD 6+1',
      mrp: 20,
      discount: 18.18,
      imageUrl:
        'https://storage.googleapis.com/hul-shikhar-cms/CMS-PROD-HERO/10015.jpg',
      category: 'detergent',
    },
    {
      name: 'Surf Excel Detergent',
      description: 'Surf Excel Detergent Powder Easy Wash Rs.10/-',
      mrp: 10,
      discount: 8.77,
      imageUrl:
        'https://storage.googleapis.com/hul-shikhar-cms/CMS-PROD-HERO/16321.png',
      category: 'toothpaste',
    },
    {
      name: 'Pears Bathing Soap Pure & Gentle',
      description: 'Pears Bathing Soap Pure & Gentle 100g',
      mrp: 54,
      discount: 50,
      imageUrl:
        'https://storage.googleapis.com/hul-shikhar-cms/CMS-PROD-HERO/2023062009003212072.png',
      category: 'skincare',
    },
    {
      name: 'Lifebuoy Bathing Soap Total 10',
      mrp: 10,
      discount: 9.09,
      description: 'Lifebuoy Bathing Soap Total 10 Rs.10/-',
      imageUrl:
        'https://storage.googleapis.com/hul-shikhar-cms/CMS-PROD-HERO/2023062009003315055.png',
      category: 'soap',
    },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'name' },
    { field: 'description' },
    { field: 'imageUrl' },
    { field: 'mrp' },
    { field: 'discount' },
    {
      field: 'category',
      valueFormatter: (data) => this.transformPipe.transform(data.value),
    },
  ];

  constructor(private transformPipe: TextTransformPipe) {}

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

  get mrp() {
    return this.productForm.get('mrp');
  }

  get category() {
    return this.productForm.get('category');
  }

  onSubmit() {
    console.log(this.productForm.value);
    //this.productsList.push(this.productForm.value);
    this.agGrid.api.applyTransaction({ add: [this.productForm.value] });
    this.productForm.reset();
  }
}
