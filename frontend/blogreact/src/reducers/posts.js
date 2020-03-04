import * as types from '../constants/ActionTypes';

const initialState = {
  post_thumb: {
    home: []
  },
  post_detail: {}
};

function PostReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_THUMB: {
      // no reload page
      return state;
    }
    case types.GET_THUMB_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        post_thumb: {
          home: data
        }
      };
    }
    case types.GET_THUMB_FAILED: {
      return {
        ...state
      };
    }

    case types.GET_POST: {
      // no reload page
      return state;
    }
    case types.GET_POST_SUCCESS: {
      const { post } = action.payload;
      return {
        ...state,
        post_detail: post
      };
    }

    default:
      return { ...state };
  }
}

export default PostReducer;
