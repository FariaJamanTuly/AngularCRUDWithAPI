import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DataComponent } from './data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonaemComponent } from './monaem/monaem.component';
import { FormsComponent } from './forms/forms.component';
import { ApirequestComponent } from './apirequest/apirequest.component';
import { RequestService } from './service/request.service';

@NgModule({
  declarations: [
    DataComponent,
    MonaemComponent,
    FormsComponent,
    ApirequestComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RequestService],
})
export class StudentModule {}
