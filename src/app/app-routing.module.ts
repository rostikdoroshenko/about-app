import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EducationComponent } from './education/education.component';
import { QualificationComponent } from './qualification/qualification.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'qualification',
    component: QualificationComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
