import * as api from "../api/index.js";

// Action Creators
export const getPosts = () => async (dispatch) => {

  try {
    const { data } = await api.fetchPosts();
    dispatch({type: "FETCH_ALL", payload: data});

  } catch (error) {
    console.log({message: error.message});

  }  
}

export const createPost = (post) => async (dispatch) => {

  try {
    const { data } = await api.createPost();
    dispatch({type: "CREATE", payload: data});

  } catch (error) {
    console.log({message: error.message});

  }  
}
