declare namespace Grid {
  interface GridWrapperProps {
    gridLayoutProps: ReactGridLayout.ReactGridLayoutProps,
    gridItems: PanelProps[],
    onPanelEdit: (panelItemData: PanelProps) => void,
    onPanelDelete: (panelItemData: PanelProps) => void
  }

  interface PanelProps<T> {
    layouts: ReactGridLayout.Layout,
    cardProps?: {
      show: boolean,
      title?: string,
      chartTitle?: string
    },
    valueType: string,
    key: T

    //todo
    [key: string]: any
  }

  interface GridLayout extends ReactGridLayout.Layout {

  }
}
