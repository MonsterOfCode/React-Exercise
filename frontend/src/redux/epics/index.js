import { combineEpics } from 'redux-observable'
import { observableActionGetAllPostEpic$, observableFetchAllPostEpic$ } from './src/posts/postsEpics'

export const rootEpic = combineEpics(
    observableActionGetAllPostEpic$,
    observableFetchAllPostEpic$,
  );