import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/app/counterReducer';
import postsReducer from './reducers/api/postsReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
