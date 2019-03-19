import { MyHttpInterceptor } from './service/intercept/http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LocalStorage } from './common/local.storage';
import { SchoolfellowComponent } from './components/schoolfellow/schoolfellow.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './components/schoolfellow/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolfellowComponent,
    DashboardComponent,
    HeaderComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [LocalStorage, { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
