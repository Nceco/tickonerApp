import {ButtonProps} from "antd";
import React from "react";

export interface CommonButtonProps extends ButtonProps {
  text: string | React.ReactNode
}