import {NgModule} from '@angular/core';
import {EchartsComponent} from './echarts.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { BasicEchartsComponent} from './basic-echarts.component';

@NgModule({
  imports: [
    NgxEchartsModule,
  ],
  declarations: [
    EchartsComponent,
    BasicEchartsComponent,
  ],
  exports: [EchartsComponent] ,
})
export class EchartsModule { }
