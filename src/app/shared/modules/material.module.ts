import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [],
    imports: [
        FlexLayoutModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        FlexLayoutModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class MaterialModule {}