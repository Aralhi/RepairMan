import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRouterModule } from './app-router.module';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }
