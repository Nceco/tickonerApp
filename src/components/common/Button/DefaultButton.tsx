/**
 * @desc DefaultButton
 * @author tangcong
 * @date 2023/10/30
 */

import {Button} from "antd";
import React, {PropsWithChildren} from "react";
import {isEmpty} from 'lodash'
import {CommonButtonProps} from "@/components/common/Button/button";

const DefaultButton: React.FC<PropsWithChildren<CommonButtonProps>> = (props) => {
  const {
    type = 'primary',
    text ,
    ...restProps
  } = props

  return (
    <Button
      {...restProps}
      type={type}
    >
      {isEmpty(text.trim()) ? '默认按钮':text}
    </Button>
  )
}

export default DefaultButton