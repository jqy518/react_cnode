import * as types from '../constants/ActionTypes'

export const setArticleList = (list) => ({type:types.SET_LIST,list})
export const updateArticleList = (list) => ({type:types.UPDATE_LIST,list})
export const setNodeLoading = (value) => ({type:types.SET_NODE_LOADING,value})