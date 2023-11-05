import React, {createContext, useRef} from 'react';
import GridWrapper from '@/components/GridLayout/GridWrapper'
import {EChartOption} from "echarts";
import DefaultButton from "@/components/common/Button/DefaultButton";
import {Col, message, Row, Space} from "antd";
import {FolderOpenOutlined, PlusSquareOutlined, ReadOutlined, SaveOutlined} from "@ant-design/icons";
import {useAsyncEffect, useDynamicList, useSize} from "ahooks";
import PanelEditor, {PanelEditorRef} from "./components/GridLayout/PanelEditor/PanelEditor";
import {DEFAULT_LIMIT_PARAMS} from "./components/GridLayout/Constant";
import {UUID6} from "./utils/Utils";
import {findIndex, debounce, cloneDeep} from 'lodash'
import {loadPanelData} from "@/api/App";
import JSONModel, {JSONModelRef} from "@/components/GridLayout/JSONModel/JSONModel";
import dayjs from "dayjs";

export interface PanelItem<T> extends Grid.PanelProps<T> {
  echartOptions?: EChartOption
}

type GridContextType = {
  screenSize?: {
    width: number,
    height: number
  }
}

export const GridProviderContext = createContext<GridContextType>({})

function GridLayoutHome() {
  const boxContainer = useRef<HTMLDivElement>(null)
  const panelEditorRef = useRef<PanelEditorRef>(null)
  const jsonModelRef = useRef<JSONModelRef>(null)
  const {list: gridItems, push, resetList, remove, replace} = useDynamicList<PanelItem<string>>([])

  useAsyncEffect(async () => {
    // const localData = localStorage.getItem('panelJson')
    // if (!localData) {
    //   const res = await loadPanelData()
    //   if (res.success) {
    //     resetList(res?.data?.list as PanelItem<string>[])
    //   }
    // } else {
    //   // resetList(cloneDeep(JSON.parse(localData)))
    // }
    const res = await loadPanelData()
    if (res.success) {
      resetList(res?.data?.list as PanelItem<string>[])
    }
  }, [])

  const screenSize = useSize(boxContainer)


  return (
    <GridProviderContext.Provider value={{
      screenSize
    }}>
      <div style={{padding: 10}} ref={boxContainer}>
        <Row>
          <Col span={12}>
            <Space>
              <DefaultButton
                icon={<SaveOutlined/>}
                type={'default'}
                text={'保存JSON文件到本地'}
                onClick={debounce(() => {
                  const jsonValue = JSON.stringify(gridItems)
                  const blob = new Blob([jsonValue], {type: 'application/json'})
                  const objectUrl = URL.createObjectURL(blob)
                  const aTag = document.createElement('a')
                  aTag.href = objectUrl
                  aTag.download = `${dayjs().format('YYYYMMDDHHmmss')}.json`
                  aTag.click()
                  URL.revokeObjectURL(objectUrl)
                }, 600)}
              />
              <DefaultButton
                icon={<SaveOutlined/>}
                type={'default'}
                text={'保存JSON文件到缓存'}
                onClick={debounce(() => {
                  if (gridItems.length > 0) {
                    localStorage.setItem('panelJson', JSON.stringify(gridItems))
                  } else {
                    message.warning('当前面板不存在可保存的内容！')
                  }
                }, 600)}
              />
              <DefaultButton
                icon={<ReadOutlined/>}
                type={'default'}
                text={'读取本地缓存'}
                onClick={debounce(() => {
                  const localData = localStorage.getItem('panelJson')
                  if (!localData) {
                    message.warning('本地未缓存！')
                    return
                  }
                  resetList(JSON.parse(localData))
                }, 600)}
              />
            </Space>
          </Col>
          <Col span={12}>
            <Row justify={'end'}>
              <Space>
                <DefaultButton
                  text={'JSON解析'}
                  icon={<FolderOpenOutlined/>}
                  type={'default'}
                  onClick={debounce(() => {
                    jsonModelRef.current?.show()
                  }, 600)}
                />
                <DefaultButton
                  text={'新增面板'}
                  icon={<PlusSquareOutlined/>}
                  onClick={debounce(() => {
                    push({
                      key: UUID6(),
                      layouts: {
                        x: 0,
                        y: 0,
                        w: 6,
                        h: 8,
                        ...DEFAULT_LIMIT_PARAMS
                      }
                    })
                  }, 600)}
                />
              </Space>
            </Row>
          </Col>
        </Row>
        <GridWrapper
          onPanelEdit={(data, index) => {
            panelEditorRef.current?.showPanelEditor(data, index)
          }}
          onPanelDelete={(data) => {
            if (data?.key) {
              const index = findIndex(gridItems, ['key', data.key])
              remove(index)
            }
          }}
          gridLayoutProps={{
            resizeHandle: null,
            isDraggable: true,
            // onResizeStop: (layout: Grid.GridLayout[], oldItem: Grid.GridLayout, newItem: Grid.GridLayout) => {
            //   console.log(layout, oldItem, newItem)
            // },
            onDragStop: (layout: Grid.GridLayout[], oldItem: Grid.GridLayout, newItem: Grid.GridLayout) => {
              console.log(layout, oldItem, newItem)
            }
          }}
          gridItems={gridItems}
        />
      </div>
      <PanelEditor
        ref={panelEditorRef}
        submitPanelData={(panelItemData, index: number) => {
          index >= 0 && replace(index, panelItemData)
        }}
      />
      <JSONModel
        ref={jsonModelRef}
        replacePanel={(panelData: PanelItem<string>[]) => {
          resetList(panelData)
        }}
      />
    </GridProviderContext.Provider>
  );
}

export default GridLayoutHome;
