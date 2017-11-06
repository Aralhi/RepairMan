import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../../services/hero.service";
@NgModule({
  imports: [CommonModule, HttpModule, FormsModule],
  exports: [CommonModule, HttpModule, FormsModule],
  providers: [HeroService]
})
export class ShareModule {}
