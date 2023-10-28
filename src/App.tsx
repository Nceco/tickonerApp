import React, { useEffect, useState } from 'react';
import GridWrapper from '@/components/GridLayout/GridWrapper'

function App (){

  return (
    <div>
      <GridWrapper
        gridLayoutProps={{
          resizeHandle: null,
          onResizeStop: (layout: Grid.GridLayout[], oldItem: Grid.GridLayout, newItem: Grid.GridLayout) => {
            console.log(layout, oldItem, newItem)
          },
          onDragStop: (layout: Grid.GridLayout[], oldItem: Grid.GridLayout, newItem: Grid.GridLayout) => {
            console.log(layout, oldItem, newItem)
          }
        }}
        gridItems={[
          {
            layouts: { i: 'layout1', x: 0, y: 0, w: 3, h: 6 }
          },
          {
            layouts: { i: 'layout2', x: 0, y: 0, w: 3, h: 6 }
          }
        ]}
      />
    </div>
  );
}

export default App;
