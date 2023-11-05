import React, {useImperativeHandle, useState} from "react";
import {Col, Drawer, message, Row} from "antd";
import {Editor} from "@monaco-editor/react";
import SubmitButton from "@/components/common/Button/SubmitButton";
import {PanelItem} from "@/App";
import {debounce} from "lodash";

export type JSONModelProps = {
  replacePanel: (value: PanelItem<string>[]) => void;
}

export type JSONModelRef = {
  show: () => void;
}

const JSONModel = React.forwardRef<JSONModelRef, JSONModelProps>((props, ref) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [jsonValue, setJsonValue] = useState<string>("[]")

  useImperativeHandle(ref, () => {
    return {
      show() {
        setDrawerOpen(true)
      }
    }
  })

  return (
    <Drawer
      open={drawerOpen}
      title={'JSON数据解析'}
      onClose={() => {
        setDrawerOpen(false)
      }}
      width={'40vw'}
      footer={
        <Row justify={'end'}>
          <Col>
            <SubmitButton
              text={'提交'}
              onClick={debounce(() => {
                try {
                  props?.replacePanel(JSON.parse(jsonValue))
                  setDrawerOpen(false)
                  setJsonValue("[]")
                }catch (e) {
                  message.error('解析json文件出错')
                  setJsonValue("[]")
                }
              },600)}
            />
          </Col>
        </Row>
      }
      destroyOnClose
    >
      <Editor
        language={'json'}
        defaultValue={jsonValue}
        onChange={(value, ev) => {
          setJsonValue(value || "[]")
        }}
        options={{
          wordWrap: 'on',
          minimap: {
            enabled: false//是否显示右侧小地图
          },
          lineNumbersMinChars: 2,//控制行号的宽度
          overviewRulerLanes: 0,
          lineDecorationsWidth: 0,
          scrollbar: {
            verticalSliderSize: 4,
            verticalScrollbarSize: 4
          }
        }}
      />
    </Drawer>
  )
})

export default React.memo(JSONModel)