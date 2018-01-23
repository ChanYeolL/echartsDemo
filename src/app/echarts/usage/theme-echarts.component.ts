import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theme-echarts',
  template : `
    <div class="row">
      <div class="col-md-6">
        <h5> Theme: default </h5>
        <div echarts [options]="options" class="demo-chart"></div>
      </div>
      <div class="col-md-6">
        <h5> Theme: macarons </h5>
        <div echarts [options]="options" theme="macarons" class="demo-chart"></div>
      </div>
    </div>
  `,
})
export class ThemeEchartsComponent implements OnInit {
  options = {
    title: {
      text: 'Nightingale\'s Rose Diagram',
      subtext: 'Mocking Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}