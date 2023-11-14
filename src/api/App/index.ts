import {getRequest} from "../../utils/HttpUtil";

export const loadData = async () => {
  return getRequest('/mine/test')
}

export const loadPanelData = async () => {
  return getRequest('/grid/layout/panel.json')
}
