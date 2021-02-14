import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { EmailListComponent } from './email-list/email-list.component';
import { NewFeatureComponent } from './new-feature/new-feature.component';
import { EmailListService } from './email-list/email-list.service';
import { EmailDetailComponent } from './email-list/email-detail/email-detail.component';

@NgModule({
  imports: [
    FeaturesRoutingModule,
    SharedModule
  ],
  declarations: [
    EmailListComponent,
    NewFeatureComponent,
    EmailDetailComponent
  ],
  providers: [EmailListService]
})
export class FeaturesModule {
}
