/**
 * @desc GridItem
 * @author tangcong
 * @date 2023/10/28
 */
import { Card, Col, Drawer, Dropdown, Empty, MenuProps, Row } from 'antd'
import React, { PropsWithChildren, useContext, useRef } from "react";
import EchartsCard from "../Echarts/EchartsCard";
import { GridProviderContext, PanelItem } from "../../App";
import { DeleteOutlined, DownOutlined, EditOutlined, RedoOutlined } from "@ant-design/icons";
import { useBoolean, useEventListener, useHover, useKeyPress } from "ahooks";

type GridItemProps = {
  item: PanelItem,
  onItemEdit: () => void,
  onItemDelete: () => void
}
type GridItemRef = {}

const GridItem = React.forwardRef<GridItemRef, PropsWithChildren<GridItemProps>>((props, ref) => {
  const { item: grid, onItemEdit, onItemDelete } = props
  const cardRef = useRef<HTMLDivElement>(null)
  const items: MenuProps['items'] = [
    {
      key: 'edit',
      label: '编辑',
      icon: <EditOutlined/>,
      onClick: (menuInfo) => handleAction(menuInfo?.key)
    },
    {
      key: 'refresh',
      label: '刷新',
      icon: <RedoOutlined/>,
      onClick: (menuInfo) => handleAction(menuInfo?.key)
    },
    {
      key: 'delete',
      label: '删除',
      icon: <DeleteOutlined/>,
      onClick: (menuInfo) => handleAction(menuInfo?.key)
    },
  ]

  const hoverTarget = useHover(cardRef)

  useEventListener('keydown',(e) => {
    if(hoverTarget){
      switch (e.key) {
        case 'e':
          break;
        case 'd':
          break;
        case 'r':
          break;
      }
    }
  })


  const handleAction = (key: string) => {
    switch (key) {
      case 'edit':
        onItemEdit && onItemEdit()
        break;
      case 'refresh':
        console.log(key)
        break;
      default:
        onItemDelete && onItemDelete()
        console.log(key)
    }
  }

  return (
    <>
      {
        grid?.cardProps?.show ? (
          <Card
            className={'hof'}
            title={grid?.cardProps?.title}
            extra={
              <Dropdown
                menu={{ items }}
                trigger={['hover']}
              >
                <DownOutlined className={'selfHover'}/>
              </Dropdown>
            }
            ref={cardRef}
          >
            <EchartsCard options={grid?.echartOptions || {}}/>
          </Card>
        ) : <Empty description={'暂无数据'}/>
      }
    </>
  )
})

export default React.memo(GridItem)
