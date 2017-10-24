import { INFO_LIST } from '../constants';

const initialState = {
   info:''
}

const info = (state = initialState, action: any) => {
  // console.log(action)
  switch (action.type) {
    case INFO_LIST:
      return {
        ...state,
        info:action.data.data
      }
    default:
      return state
  }
}

export default info;