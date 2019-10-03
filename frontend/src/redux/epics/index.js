import { combineEpics } from 'redux-observable'
import { observableCallApiGetAllPostEpic$, observableCallApiPostVoteEpic$, observableCallApiPostDeleteEpic$, observableCallApiPostEditEpic$ } from './src/posts/postsEpics'

export const rootEpic = combineEpics(
    observableCallApiGetAllPostEpic$,
    observableCallApiPostVoteEpic$,
    observableCallApiPostDeleteEpic$,
    observableCallApiPostEditEpic$,
  );