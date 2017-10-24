import { INFO_LIST } from '../constants/index'
const saveList = (data: Object) => ({
  type: INFO_LIST,
  data: data,
})

export function infoListRemote () {
  const info = {
    data: {
      item: 'Hello LinShuiZhaoYing',
      cnItem: '你好, 临水照影'
    }
  }
  return (dispatch: any) => {
    dispatch(saveList(info))
    return info
  }
}