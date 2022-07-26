import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILS,
} from '../../constants/postsConstants';

const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { loading: true, posts: [] };
    case POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case POSTS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
