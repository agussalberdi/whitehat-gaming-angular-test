import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
