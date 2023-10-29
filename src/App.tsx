import React, { useEffect, useState } from 'react';
import GridWrapper from '@/components/GridLayout/GridWrapper'
import { EChartOption } from "echarts";

export interface PanelItem extends Grid.PanelProps {
  echartOptions?: EChartOption
}

function App (){
  const [gridItems] = useState<PanelItem[]>([
    {
      layouts: { i: 'layout1', x: 0, y: 0, w: 6, h: 8 },
      cardProps: {
        show: true,
        title: 'bar'
      },
      echartOptions: {
        xAxis: {
          type: 'category',
          data: ['AD', '上单', '辅助', '中单', '打野', '教练', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    },
    {
      layouts: { i: 'layout2', x: 6, y: 0, w: 6, h: 8 },
      cardProps: {
        show: true,
        title: 'line'
      },
      echartOptions: {
        xAxis: {
          type: 'category',
          data: ['AD', '上单', '辅助', '中单', '打野', '教练', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    },
    {
      layouts: { i: 'layout3', x: 0, y: 6, w: 6, h: 8 },
      cardProps: {
        show: true,
        title: 'pie'
      },
      echartOptions: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'LOL',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'AD' },
              { value: 735, name: '上单' },
              { value: 580, name: '辅助' },
              { value: 484, name: '中单' },
              { value: 300, name: '打野' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    },
    {
      layouts: { i: 'layout4', x: 6, y: 6, w: 6, h: 8 }
    }
  ])

  return (
    <div>
      <GridWrapper
        gridLayoutProps={{
          resizeHandle: null,
          onResizeStop: (layout: Grid.GridLayout[], oldItem: Grid.GridLayout, newItem: Grid.GridLayout) => {
            console.log(layout, oldItem, newItem)
          },
          onDragStop: (layout: Grid.GridLayout[], oldItem: Grid.GridLayout, newItem: Grid.GridLayout) => {
            console.log(layout, oldItem, newItem)
          }
        }}
        gridItems={gridItems}
      />
    </div>
  );
}

export default App;
