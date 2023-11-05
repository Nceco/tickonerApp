import {Editor} from "@monaco-editor/react";
import React, {PropsWithChildren} from "react";

export const FunctionParams = 'data'

export type PanelFormEditor = {
  value?: string,
  onChange?: (value: string | undefined) => void
}
const PanelFormEditor: React.FC<PropsWithChildren<PanelFormEditor>> = (props) => {
  const {value, onChange} = props
  return (
    <>
      <span className={'spanFun'}>{`function (${FunctionParams}){`}</span>
      <Editor
        language={'javascript'}
        height={300}
        value={value}
        onChange={(value, ev) => {
          onChange && onChange(value)
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
      <span className={'spanFun'}>{`}`}</span>
    </>
  )
}

export default PanelFormEditor