import React, {createContext, useEffect, useRef, useState} from 'react';
import GridWrapper from '@/components/GridLayout/GridWrapper'
import {EChartOption} from "echarts";
import DefaultButton from "@/components/common/Button/DefaultButton";
import {Col, Row} from "antd";
import {PlusSquareOutlined} from "@ant-design/icons";
import {useSize} from "ahooks";
import PanelEditor, { PanelEditorRef } from "./components/GridLayout/PanelEditor";

export interface PanelItem extends Grid.PanelProps {
  echartOptions?: EChartOption
}

type GridContextType = {
  screenSize?: {
    width: number,
    height: number
  }
}

export const GridProviderContext = createContext<GridContextType>({})

function App() {
  const boxContainer = useRef<HTMLDivElement>(null)
  const panelEditorRef = useRef<PanelEditorRef>(null)
  const [gridItems] = useState<PanelItem[]>([
    {
      layouts: {i: 'layout1', x: 0, y: 0, w: 6, h: 8},
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
      layouts: {i: 'layout2', x: 6, y: 0, w: 6, h: 8},
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
      layouts: {i: 'layout3', x: 0, y: 6, w: 6, h: 8},
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
              {value: 1048, name: 'AD'},
              {value: 735, name: '上单'},
              {value: 580, name: '辅助'},
              {value: 484, name: '中单'},
              {value: 300, name: '打野'}
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
      layouts: {i: 'layout4', x: 6, y: 6, w: 6, h: 8}
    }
  ])

  const screenSize = useSize(boxContainer)


  return (
    <GridProviderContext.Provider value={{
      screenSize
    }}>
      <div style={{padding: 10}} ref={boxContainer}>
        <Row justify={'end'}>
          <Col>
            <DefaultButton
              text={'新增面板'}
              icon={<PlusSquareOutlined/>}
              onClick={() => {
              }}
            />
          </Col>
        </Row>
        <GridWrapper
          onPanelEdit={(data) => {
            console.log(data)
            panelEditorRef.current?.showPanelEditor(data)
          }}
          onPanelDelete={(data) => {
            console.log(data)
          }}
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
      <PanelEditor ref={panelEditorRef}/>
    </GridProviderContext.Provider>
  );
}

export default App;
