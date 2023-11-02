import React, { useContext, useImperativeHandle } from "react";
import { Col, Drawer, Row } from "antd";
import { useBoolean } from "ahooks";
import { GridProviderContext } from "../../App";

type PanelEditorProps = {}
export type PanelEditorRef = {
  showPanelEditor: (panelItemData: any) => void
}

const PanelEditor = React.forwardRef<PanelEditorRef, PanelEditorProps>((props, ref) => {
  const [drawerOpen, { set }] = useBoolean(false)
  const { screenSize } = useContext(GridProviderContext)

  useImperativeHandle(ref, () => {
    return {
      showPanelEditor: (data: any) => {
        console.log(data)
        set(true)
      }
    }
  })

  const handleDrawerClose = () => set(false)

  return (
    <Drawer
      placement={'right'}
      open={drawerOpen}
      onClose={handleDrawerClose}
      title={'编辑面板'}
      width={2 * ((screenSize?.width || 1200) / 3)}
    >
      <Row style={{ height: '100%' }} gutter={[8, 0]}>
        <Col span={16}>
          <div style={{ height: '100%', background: '#333' }}>面板1</div>
        </Col>
        <Col span={8}>
          <div style={{ height: '100%', background: '#666' }}>面板2</div>
        </Col>
      </Row>
    </Drawer>
  )
})

export default React.memo(PanelEditor)
