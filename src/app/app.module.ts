import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { InputComponent } from './input/input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent, CardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
