/**
 * @desc Logo
 * @author 7mu_12
 * @date 2023/11/07
 */
import React from "react";
import {HeaderBarProps} from "@/Layout/component/HeaderBar";

const Logo: React.FC<Pick<HeaderBarProps, 'collapsed'>> = (props) => {
  const {collapsed} = props
  return (
    <div className={'textBox'}>
      <span className={'gradientText'} style={collapsed ? {fontSize: 14} : {fontSize: 24}}>7mu_12</span>
    </div>
  )
}

export default Logo
