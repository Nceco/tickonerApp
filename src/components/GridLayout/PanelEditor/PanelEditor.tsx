import React, {useContext, useImperativeHandle, useRef, useState} from "react";
import {Card, Col, Drawer, Form, Input, Row, Select} from "antd";
import {useBoolean} from "ahooks";
import {GridProviderContext, PanelItem} from "@/GridLayoutHome";
import EchartsCard from "@/components/Echarts/EchartsCard";
import SubmitButton from "@/components/common/Button/SubmitButton";
import PanelFormEditor, {FunctionParams} from "@/components/GridLayout/PanelEditor/PanelFormEditor";
import './panel.less'
import {UUID6} from "@/utils/Utils";
import {DEFAULT_LIMIT_PARAMS} from "@/components/GridLayout/Constant";
import {set as setValue, result} from 'lodash'

type PanelEditorProps = {
  submitPanelData: (value: PanelItem<string>, index: number) => void;
}

export type PanelEditorRef = {
  showPanelEditor: (panelItemData: PanelItem<string>, index: number) => void
}

//form表单类型
type PanelFormItem = {
  valueType?: string,
  title?: string,
  transformFunc?: string
}

const chartOptions = [
  {
    value: 'line',
    label: 'line'
  },
  {
    value: 'bar',
    label: 'bar'
  },
  {
    value: 'pie',
    label: 'pie'
  },
  {
    value: 'table',
    label: 'table'
  }
]

const PanelEditor = React.forwardRef<PanelEditorRef, PanelEditorProps>((props, ref) => {
  const [drawerOpen, {set}] = useBoolean(false)
  const [currentData, setCurrentData] = useState<PanelItem<string>>()
  const currentPanelKey = useRef<number>(-1)
  const [formRef] = Form.useForm<PanelFormItem>()
  const {screenSize} = useContext(GridProviderContext)

  useImperativeHandle(ref, () => {
    return {
      showPanelEditor: (PanelItemData: PanelItem<string>, index) => {
        console.log(PanelItemData,result(PanelItemData, 'valueType'))
        currentPanelKey.current = index
        formRef.setFieldsValue({
          valueType: result(PanelItemData, 'valueType', 'line'),
          title: result(PanelItemData, 'cardProps.title'),
          transformFunc: result(PanelItemData, 'transformFunc')
        })
        setCurrentData(PanelItemData)
        set(true)
      }
    }
  })

  const handleDrawerClose = () => set(false)

  const handleSubmit = (values: PanelFormItem) => {
    let chartOptions = {}
    if (values?.transformFunc) {
      chartOptions = new Function(FunctionParams, values?.transformFunc)()
    }

    const result:PanelItem<string> = {} as PanelItem<string>
    setValue(result, 'key', UUID6())
    setValue(result, 'layouts', {x: 0, y: 0, w: 6, h: 8, ...DEFAULT_LIMIT_PARAMS})
    setValue(result, 'cardProps.title', values?.title)
    setValue(result, 'echartOptions', {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [],
          type: values?.valueType
        }
      ],
      ...chartOptions
    })
    setValue(result, 'valueType', values?.valueType)
    setValue(result, 'transformFunc', values?.transformFunc)

    setCurrentData(result)
  }

  return (
    <Drawer
      placement={'right'}
      open={drawerOpen}
      onClose={handleDrawerClose}
      title={'编辑面板'}
      width={2 * ((screenSize?.width || 1200) / 3)}
      extra={<SubmitButton
        text={'提交'}
        onClick={() => {
          props?.submitPanelData && props.submitPanelData(currentData as PanelItem<string>, currentPanelKey.current)
          set(false)
          setCurrentData(undefined)
          currentPanelKey.current = -1
        }}
      />}
      footer={
        <Row justify={'end'}>
          <Col>
            <SubmitButton
              text={'更新'}
              type={'default'}
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
            <EchartsCard options={currentData?.echartOptions || {}} echartWidth={2 * (screenSize?.height || 600) / 3}/>
          </Card>
        </Col>
        <Col span={8}>
          <Form<PanelFormItem>
            layout={'vertical'}
            form={formRef}
            onFinish={handleSubmit}
          >
            <Form.Item label={'图表类型'} name={'valueType'}>
              <Select placeholder={'请选择图表类型'} options={chartOptions}/>
            </Form.Item>
            <Form.Item label={'卡片标题'} name={'title'}>
              <Input placeholder={'请输入卡片标题'}/>
            </Form.Item>
            <Form.Item label={'自定义函数'} name={'transformFunc'}>
              <PanelFormEditor/>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Drawer>
  )
})

export default React.memo(PanelEditor)
