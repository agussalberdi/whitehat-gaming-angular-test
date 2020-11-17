import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/index';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
