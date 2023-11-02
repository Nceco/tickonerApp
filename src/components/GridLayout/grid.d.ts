declare namespace Grid {
  interface GridWrapperProps {
    gridLayoutProps: ReactGridLayout.ReactGridLayoutProps,
    gridItems: PanelProps[],
    onPanelEdit: (panelItemData: any) => void,
    onPanelDelete: (panelItemData: any) => void
  }

  interface PanelProps {
    layouts: ReactGridLayout.Layout,
    cardProps?: {
      show: boolean,
      title: string
    }

    //todo
    [key: string]: any
  }

  interface GridLayout extends ReactGridLayout.Layout {

  }
}
