/**
 * @desc GridItem
 * @author tangcong
 * @date 2023/10/28
 */
import React, { PropsWithChildren } from "react";

type GridItemProps = {}
type GridItemRef = {}

const GridItem = React.forwardRef<GridItemRef, PropsWithChildren<GridItemProps>>((props, ref) => {
  return (
    <>
      GridItem
    </>
  )
})

export default React.memo(GridItem)
