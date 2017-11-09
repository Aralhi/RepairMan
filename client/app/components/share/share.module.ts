import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../../services/hero.service";
import {NgZorroAntdModule} from 'ng-zorro-antd';
@NgModule({
  imports: [
    NgZorroAntdModule.forRoot(),
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [CommonModule, HttpModule, FormsModule, NgZorroAntdModule],
  providers: [HeroService]
})
export class ShareModule {}
