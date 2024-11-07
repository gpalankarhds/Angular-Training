import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardContainerComponent } from 'src/app/components/card-container/card-container.component';
import { ParentComponent } from 'src/app/components/parent/parent.component';
import { ChildComponent } from 'src/app/components/child/child.component';
import { SiblingComponent } from 'src/app/components/sibling/sibling.component';
import {
  ChildComponentChanges,
  OnChangesComponent,
} from 'src/app/components/lifecycle-hooks/on-changes/on-changes.component';
import {
  ChildComponentInit,
  OnInitComponent,
} from 'src/app/components/lifecycle-hooks/on-init/on-init.component';
import { OnDocheckComponent } from 'src/app/components/lifecycle-hooks/on-docheck/on-docheck.component';
import {
  BContnetInitComponent,
  CContnetInitComponent,
  OnAfterContentInitComponent,
} from 'src/app/components/lifecycle-hooks/on-after-content-init/on-after-content-init.component';
import {
  BContentCheckedComponent,
  CContentCheckedComponent,
  OnAfterContentCheckedComponent,
} from 'src/app/components/lifecycle-hooks/on-after-content-checked/on-after-content-checked.component';
import {
  BViewInitComponent,
  CViewInitComponent,
  OnAfterViewInitComponent,
} from 'src/app/components/lifecycle-hooks/on-after-view-init/on-after-view-init.component';
import {
  BViewCheckedComponent,
  CViewCheckedComponent,
  OnAfterViewCheckedComponent,
} from 'src/app/components/lifecycle-hooks/on-after-view-checked/on-after-view-checked.component';
import {
  DestroyListenerDirective,
  OnDestroyComponent,
} from 'src/app/components/lifecycle-hooks/on-destroy/on-destroy.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardComponent,
    CardContainerComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    OnChangesComponent,
    ChildComponentChanges,
    OnInitComponent,
    ChildComponentInit,
    OnDocheckComponent,
    OnAfterContentInitComponent,
    BContnetInitComponent,
    CContnetInitComponent,
    OnAfterContentCheckedComponent,
    BContentCheckedComponent,
    CContentCheckedComponent,
    OnAfterViewInitComponent,
    BViewInitComponent,
    CViewInitComponent,
    OnAfterViewCheckedComponent,
    BViewCheckedComponent,
    CViewCheckedComponent,
    OnDestroyComponent,
    DestroyListenerDirective,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
