/**
 * @desc DefaultButton
 * @author tangcong
 * @date 2023/10/30
 */

import {Button} from "antd";
import React, {PropsWithChildren} from "react";
import {CommonButtonProps} from "@/components/common/Button/button";

const DefaultButton: React.FC<PropsWithChildren<CommonButtonProps>> = (props) => {
  const {
    type = 'primary',
    text,
    ...restProps
  } = props
  return (
    <Button
      {...restProps}
      type={type}
    >
      {text ?? '默认按钮'}
    </Button>
  )
}

export default DefaultButton