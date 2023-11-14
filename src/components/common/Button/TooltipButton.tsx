/**
 * @desc TooltipButton
 * @author tangcong
 * @date 2023/11/01
 */
import React, {PropsWithChildren} from "react";
import {CommonButtonProps} from "@/components/common/Button/button";
import {Tooltip} from "antd";
import DefaultButton from "@/components/common/Button/DefaultButton";
import {TooltipProps} from "antd/es/tooltip";
import {omit} from 'lodash'

type TooltipButtonProps = Omit<CommonButtonProps, 'title'> & {
  showTitle?: boolean,
  toolTipProps?: TooltipProps
}
const TooltipButton: React.FC<PropsWithChildren<TooltipButtonProps>> = (props) => {
  const {
    showTitle = true,
    text,
    toolTipProps = {
      title: '默认title',
    },
    ...resetProps
  } = props
  const extraTooltipProps = omit(props?.toolTipProps, 'title')
  return (
    <Tooltip
      title={showTitle ? toolTipProps.title : ''}
      {...extraTooltipProps}
    >
      <DefaultButton
        text={text}
        {...resetProps}
      />
    </Tooltip>
  )
}

export default TooltipButton