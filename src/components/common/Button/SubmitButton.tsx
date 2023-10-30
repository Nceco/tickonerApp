/**
 * @desc SubmitButton
 * @author tangcong
 * @date 2023/10/30
 */
import React, {PropsWithChildren} from "react";
import DefaultButton from "@/components/common/Button/DefaultButton";
import {CheckOutlined} from "@ant-design/icons";
import {CommonButtonProps} from "@/components/common/Button/button";

type SubmitButtonProps = Omit<CommonButtonProps, 'text'> & {
  text?: string | React.ReactNode
}
const SubmitButton: React.FC<PropsWithChildren<SubmitButtonProps>> = (props) => {
  const {
    text = '确认',
    icon = <CheckOutlined/>,
    ...resetProps
  } = props
  return <DefaultButton text={text} icon={icon ?? <CheckOutlined/>} {...resetProps}/>
}

export default SubmitButton


