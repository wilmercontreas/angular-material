import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';

const MAterialComponents =[
  MatTabsModule,
  MatButtonModule,
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatBadgeModule,
  MatListModule
]
   
@NgModule({
  imports: [MAterialComponents],
  exports:[MAterialComponents]
})
export class MaterialModule { }
