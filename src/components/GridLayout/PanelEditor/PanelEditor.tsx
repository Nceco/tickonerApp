import React, {useContext, useImperativeHandle, useState} from "react";
import {Card, Col, Drawer, Form, FormInstance, Input, Row, Select} from "antd";
import {useBoolean} from "ahooks";
import {GridProviderContext, PanelItem} from "../../../App";
import EchartsCard from "@/components/Echarts/EchartsCard";
import SubmitButton from "@/components/common/Button/SubmitButton";

type PanelEditorProps = {}
export type PanelEditorRef = {
  showPanelEditor: (panelItemData: PanelItem<string | number>) => void
}

const chartOptions = [
  {
    value:'line',
    label:'line'
  },
  {
    value:'bar',
    label:'bar'
  },
  {
    value:'pie',
    label:'pie'
  },
  {
    value:'table',
    label:'table'
  }
]

const PanelEditor = React.forwardRef<PanelEditorRef, PanelEditorProps>((props, ref) => {
  const [drawerOpen, {set}] = useBoolean(false)
  const [currentData, setCurrentData] = useState<PanelItem<string | number>>()
  const [formRef] = Form.useForm()
  const {screenSize} = useContext(GridProviderContext)

  useImperativeHandle(ref, () => {
    return {
      showPanelEditor: (data: PanelItem<string | number>) => {
        setCurrentData(data)
        set(true)
      }
    }
  })

  const handleDrawerClose = () => set(false)

  const handleSubmit = (values:any) => {
    console.log(values)
  }

  return (
    <Drawer
      placement={'right'}
      open={drawerOpen}
      onClose={handleDrawerClose}
      title={'编辑面板'}
      width={2 * ((screenSize?.width || 1200) / 3)}
      footer={
        <Row justify={'end'}>
          <Col>
            <SubmitButton
              text={'提交'}
              onClick={() => formRef?.submit()}
            />
          </Col>
        </Row>
      }
      destroyOnClose
    >
      <Row style={{height: '100%'}} gutter={[16, 0]}>
        <Col span={16}>
          <Card title={currentData?.cardProps?.title}>
            <EchartsCard options={currentData?.echartOptions || {}} echartWidth={2 *(screenSize?.height || 600)/3}/>
          </Card>
        </Col>
        <Col span={8}>
          <Form
            layout={'vertical'}
            form={formRef}
            onFinish={handleSubmit}
          >
            <Form.Item label={'图表类型'} name={'valueType'}>
              <Select placeholder={'请选择图表类型'} options={chartOptions} defaultValue={currentData?.valueType}/>
            </Form.Item>
            <Form.Item label={'卡片标题'} name={'title'}>
              <Input placeholder={'请输入卡片标题'} defaultValue={currentData?.cardProps?.title}/>
            </Form.Item>
            <Form.Item label={'图表标题'} name={'chartTitle'}>
              <Input placeholder={'请输入图表标题'} defaultValue={currentData?.cardProps?.chartTitle}/>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Drawer>
  )
})

export default React.memo(PanelEditor)
