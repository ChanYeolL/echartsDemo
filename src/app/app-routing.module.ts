import {RouterModule, Routes} from '@angular/router';
import {EchartsComponent} from './echarts/echarts.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'echarts',
    component: EchartsComponent,
  },
  {
    path: '',
    redirectTo: 'echarts',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'echarts' ,
  }
] ;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
