import * as actionTypes from "./constants"
import {
  getRecommendListRequest, 
  getNewSongRequest, 
} from "../../../api/request"


export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

export const changeNewSongList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_NEW_SONG,
  data
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getRecommendList = (query) => {
  return (dispatch) => {
    getRecommendListRequest(query).then(data => {
      const action = changeRecommendList(data.result)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取推荐列表出错: ", e);
    })
  }
}

export const getNewSongList = () => {
  return (dispatch) => {
    getNewSongRequest().then(data => {
      const action = changeNewSongList(data.result)
      dispatch(action)
      dispatch(changeEnterLoading(false))
    }).catch(e => {
      console.error("获取推荐新音乐列表出错: ", e);
    })
  }
}