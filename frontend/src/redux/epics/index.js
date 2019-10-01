import { combineEpics } from 'redux-observable'
import { observableActionGetAllPostEpic$, observableFetchAllPostEpic$ } from './src/posts/postsEpics'
import { observableStartLoadApiActionEpic$, observableEndLoadApiActionEpic$ } from './src/base/loaderEpics'

export const rootEpic = combineEpics(
    observableActionGetAllPostEpic$,
    observableFetchAllPostEpic$,
    observableStartLoadApiActionEpic$,
    observableEndLoadApiActionEpic$
  );