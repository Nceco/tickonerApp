/**
 * @desc GridItem
 * @author tangcong
 * @date 2023/10/28
 */
import {Card, Col, Drawer, Dropdown, Empty, MenuProps, Row} from 'antd'
import React, {PropsWithChildren, useContext, useRef} from "react";
import EchartsCard from "../Echarts/EchartsCard";
import {GridProviderContext, PanelItem} from "../../App";
import {DeleteOutlined, DownOutlined, EditOutlined, RedoOutlined} from "@ant-design/icons";
import {useBoolean, useKeyPress} from "ahooks";

type GridItemProps = {
  item: PanelItem
}
type GridItemRef = {}

const GridItem = React.forwardRef<GridItemRef, PropsWithChildren<GridItemProps>>((props, ref) => {
  const {item: grid} = props
  const [drawerOpen, {set}] = useBoolean(false)
  const {screenSize} = useContext(GridProviderContext)
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

  // useKeyPress(
  //   69,
  //   (event: any) => {
  //     console.log(event.target)
  //     set(true)
  //   },
  //   {
  //     target: cardRef.current
  //   },
  // );


  const handleAction = (key: string) => {
    switch (key) {
      case 'edit':
        set(true)
        break;
      case 'refresh':
        console.log(key)
        break;
      default:
        console.log(key)
    }
  }

  const handleDrawerClose = () => set(false)

  return (
    <>
      {
        grid?.cardProps?.show ? (
          <Card
            style={{height: '100%', overflow: 'hidden'}}
            title={grid?.cardProps?.title}
            extra={
              <Dropdown
                menu={{items}}
              >
                <DownOutlined/>
              </Dropdown>
            }
            ref={cardRef}
          >
            <EchartsCard options={grid?.echartOptions || {}}/>
          </Card>
        ) : <Empty description={'暂无数据'}/>
      }
      <Drawer
        placement={'right'}
        open={drawerOpen}
        onClose={handleDrawerClose}
        title={'编辑面板'}
        width={2 * ((screenSize?.width || 1200) / 3)}
      >
        <Row style={{height: '100%'}} gutter={[8, 0]}>
          <Col span={16}>
            <div style={{height: '100%', background: '#333'}}>面板1</div>
          </Col>
          <Col span={8}>
            <div style={{height: '100%', background: '#666'}}>面板2</div>
          </Col>
        </Row>
      </Drawer>
    </>
  )
})

export default React.memo(GridItem)
