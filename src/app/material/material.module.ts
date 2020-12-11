import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MAterialComponents =[
  MatTabsModule,
  MatButtonModule,
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule
]
   
@NgModule({
  imports: [MAterialComponents],
  exports:[MAterialComponents]
})
export class MaterialModule { }
