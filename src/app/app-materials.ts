
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule,MatInputModule } from '@angular/material';


@NgModule({
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
    ]
  })
  export class AppMaterialsModule { }