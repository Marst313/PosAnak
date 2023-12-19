import { configureStore } from '@reduxjs/toolkit';
import user from './features/users/user';
import kids from './features/kids/kids';
import family from './features/family/family';
import activity from './features/activity/activity';
import news from './features/news/news';

export const store = configureStore({
  reducer: {
    user,
    kids,
    family,
    activity,
    news,
  },
});
