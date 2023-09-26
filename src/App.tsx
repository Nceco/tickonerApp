import React, { useEffect } from 'react';
import { loadData } from './api/App/index'
import { getNaturalQuarter, getNaturalMonth, getNaturalHalfYear,getNaturalYear } from "./utils/CommonUtil";

function App (){

  useEffect(() => {
    // init()
    // console.log(getNaturalQuarter(1643161815000, 1706233815000, 'YYYY-MM-DD HH:mm:ss'))
    // console.log(getNaturalMonth('2022-01-26','2024-01-26','YYYY-MM-DD HH:mm:ss'))
    // console.log(getNaturalHalfYear(1645372799000, 1688140798000, 'YYYY-MM-DD'))
    // console.log()
    console.log(getNaturalQuarter(1672492986000, 1696089598000, 'YYYY-MM-DD'))
  })

  const init = async () => {
    const res = await loadData()
    if (res.success) {
      console.log(res.data)
    }
  }

  return (
    <div>
      App
    </div>
  );
}

export default App;
