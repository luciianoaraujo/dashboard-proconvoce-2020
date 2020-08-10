import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombustivelRoutingModule } from './combustivel-routing.module';
import { CombustivelComponent } from './combustivel.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [CombustivelComponent],
  imports: [
    CommonModule,
    CombustivelRoutingModule,
    SharedModule
  ]
})
export class CombustivelModule { }
