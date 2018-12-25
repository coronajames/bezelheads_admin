import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './category-routing.module';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CategoryGenderComponent } from './category-gender/category-gender.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgbModule,
    InvoiceRoutingModule
  ],
  declarations: [InvoiceDetailComponent, InvoiceListComponent, CategoryGenderComponent]
})
export class CategoryModule { }
