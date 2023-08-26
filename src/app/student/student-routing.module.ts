import { ApirequestComponent } from './apirequest/apirequest.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { MonaemComponent } from './monaem/monaem.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: 'Form',
    component: FormsComponent,
  },
  {
    path: '',
    component: ApirequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
