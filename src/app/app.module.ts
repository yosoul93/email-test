import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './fake-db/fake-db.servicec';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CoreModule,

    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
