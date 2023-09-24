import React, { useEffect } from 'react';
import { loadData } from './api/App/index'

function App (){

  useEffect(() => {
    init()
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
