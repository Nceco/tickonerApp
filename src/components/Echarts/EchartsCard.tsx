/**
 * @desc EchartsCard
 * @author tangcong
 * @date 2023/10/29
 */
import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { EChartOption } from "echarts";

interface EchartsCardProps {
  options: EChartOption
}

const EchartsCard: React.FC<EchartsCardProps> = (props) => {
  const echartRef = useRef<HTMLDivElement>(null)
  const [echartOptions] = useState<EChartOption>(props?.options || {})

  useEffect(() => {
    const myChart = echarts.init(echartRef.current)
    myChart && myChart.setOption(echartOptions)
  }, [])


  return (
    <div
      ref={echartRef}
      style={{
        minHeight: 260
      }}
    />
  )
}

export default EchartsCard
