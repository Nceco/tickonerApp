declare namespace Grid {
  interface GridWrapperProps {
    gridLayoutProps: ReactGridLayout.ReactGridLayoutProps,
    gridItems: PanelProps[]
  }

  interface PanelProps {
    layouts: ReactGridLayout.Layout,

    //todo
    [key: string]: any
  }

  interface GridLayout extends ReactGridLayout.Layout {

  }
}
