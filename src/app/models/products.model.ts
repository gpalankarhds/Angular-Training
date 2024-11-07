export interface Products {
  title: string;
  products?: ProductsEntity[] | null;
}
export interface ProductsEntity {
  brand_varient_id: string;
  itemvarient_desc: string;
  mrp_unit: number;
  tur_unit: number;
  imageurl: string;
  ingredients?: string[] | null;
}
