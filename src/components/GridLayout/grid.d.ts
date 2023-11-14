declare namespace Grid {
  interface GridWrapperProps {
    gridLayoutProps: ReactGridLayout.ReactGridLayoutProps,
    gridItems: PanelProps[],
    onPanelEdit: (panelItemData: PanelProps, index: number) => void,
    onPanelDelete: (panelItemData: PanelProps) => void
  }

  interface PanelProps<T> {
    layouts: Omit<ReactGridLayout.Layout, 'i'>,
    cardProps?: {
      title?: string
    },
    chartProps?: {
      request?: {
        type: string,
        url: string,
        params: string
      }
    },
    transformFunc?: string,
    valueType?: string,
    key: T

    //todo
    [key: string]: any
  }

  interface GridLayout extends ReactGridLayout.Layout {

  }
}
