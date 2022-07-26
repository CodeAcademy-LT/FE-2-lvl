import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILS,
} from '../constants/postsConstants';

export const displayPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST });

    const data = await (
      await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json();

    dispatch({ type: POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POSTS_FAILS, payload: error });
  }
};
