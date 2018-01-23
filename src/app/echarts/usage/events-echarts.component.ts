import { Component, OnInit } from '@angular/core';

declare var echarts: any;

@Component({
  selector: 'events-echarts',
  template: `
    <div echarts [options]="options" class="demo-chart"></div>
  `,
})
export class EventsEchartsComponent implements OnInit {
  options: any;

  constructor() { }

  ngOnInit() {
    let dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
    let data = [180, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let yMax = 500;
    let dataShadow = [];

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    this.options = {
      title: {
        text: 'Check Console for Events (ChanYeol)'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999893'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.05)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.2, color: '#188df0' },
                  { offset: 0.4, color: '#baabf0' },
                  { offset: 0.6, color: '#f0dc00' },
                  { offset: 0.8, color: '#f0798b' },
                  { offset: 1, color: '#63f0b4' },
                ]
              )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#f1000e' },
                  { offset: 0.7, color: '#f75334' },
                  { offset: 1, color: '#f6928d' }
                ]
              )
            }
          },
          data: data
        }
      ]
    };
  }
}
