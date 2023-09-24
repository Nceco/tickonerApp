import { getRequest } from "../../utils/HttpUtil";

export const loadData = async () => {
  return getRequest('/mine/test')
}
