import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailDetailComponent } from './email-list/email-detail/email-detail.component';

const routes: Routes = [
  {
    path     : 'email-list',
    component: EmailListComponent,
  },
  {
    path     : 'email-list/detail/:id',
    component: EmailDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {
}
