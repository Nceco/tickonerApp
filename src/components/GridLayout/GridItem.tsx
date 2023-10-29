/**
 * @desc GridItem
 * @author tangcong
 * @date 2023/10/28
 */
import { Card, Empty } from 'antd'
import React, { PropsWithChildren } from "react";
import EchartsCard from "../Echarts/EchartsCard";
import { PanelItem } from "../../App";

type GridItemProps = {
  item: PanelItem
}
type GridItemRef = {}

const GridItem = React.forwardRef<GridItemRef, PropsWithChildren<GridItemProps>>((props, ref) => {
  const { item: grid } = props
  return (
    grid?.cardProps?.show ? <Card
      style={{ height: '100%', overflow: 'hidden' }}
      title={grid?.cardProps?.title}
    >
      <EchartsCard options={grid?.echartOptions || {}}/>
    </Card> : <Empty description={'暂无数据'}/>
  )
})

export default React.memo(GridItem)
