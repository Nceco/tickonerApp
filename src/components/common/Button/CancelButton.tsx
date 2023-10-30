/**
 * @desc CancelButton
 * @author tangcong
 * @date 2023/10/30
 */
import React, {PropsWithChildren} from "react";
import DefaultButton from "@/components/common/Button/DefaultButton";
import {CloseOutlined} from "@ant-design/icons";
import {CommonButtonProps} from "@/components/common/Button/button";

type CancelButtonProps = Omit<CommonButtonProps, 'text'> & {
  text?: string | React.ReactNode
}
const CancelButton: React.FC<PropsWithChildren<CancelButtonProps>> = (props) => {
  const {
    type = 'default',
    text = '取消',
    icon = <CloseOutlined/>,
    ...resetProps
  } = props
  return <DefaultButton type={type} text={text} icon={icon ?? <CloseOutlined/>} {...resetProps}/>
}

export default CancelButton


