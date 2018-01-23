import {NgModule} from '@angular/core';
import {EchartsComponent} from './echarts.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { BasicEchartsComponent} from './usage/basic-echarts.component';
import {EventsEchartsComponent} from './usage/events-echarts.component';
import {EchartsInstanceComponent} from './usage/echarts-instance.component';
import {ThemeEchartsComponent} from './usage/theme-echarts.component';

@NgModule({
  imports: [
    NgxEchartsModule,
  ],
  declarations: [


    // fsdkgjlsdfg
    EchartsComponent,
    BasicEchartsComponent,
    EchartsInstanceComponent,
    EventsEchartsComponent,
    ThemeEchartsComponent,
  ],
  exports: [EchartsComponent] ,
})
export class EchartsModule { }
