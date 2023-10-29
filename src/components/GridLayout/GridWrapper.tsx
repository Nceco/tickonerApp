/**
 * @desc GridWrapper
 * @author tangcong
 * @date 2023/10/28
 */
import React, { PropsWithChildren, useRef } from "react";
import GridLayout from 'react-grid-layout'
import { useSize } from "ahooks";
import GridItem from "./GridItem";
import { PanelItem } from "../../App";

// https://github.com/react-grid-layout/react-grid-layout

const GridWrapper: React.FC<PropsWithChildren<Grid.GridWrapperProps>> = (props) => {
  const { gridItems } = props

  const gridContainerRef = useRef<HTMLDivElement>(null)

  //调整试图大小grid的width也随着调整
  const size = useSize(gridContainerRef)

  return (
    <div
      ref={gridContainerRef}
    >
      <GridLayout
        rowHeight={30}
        width={size?.width || 1200}
        //cols代表整个Grid一行所能填充的几个layout中的w
        cols={12}
        layout={gridItems?.map((item: PanelItem) => item?.layouts)}
      >
        {
          gridItems?.length && gridItems?.map((item: PanelItem) => {
            return (
              //todo 封装一个自定义面板容器
              <div key={item?.layouts?.i}>
                <GridItem item={item}/>
              </div>
            )
          })
        }
        {/*若存在props.children 且layout未提供 那么props.children元素需要提供data-grid属性*/}
        {props?.children}
      </GridLayout>
    </div>
  )
}

export default GridWrapper
