import { combineEpics } from 'redux-observable'
import { observableCallApiGetAllPostEpic$, observableCallApiPostVoteEpic$, observableCallApiPostDeleteEpic$, observableCallApiPostEditEpic$, observableCallApiGetPostsByCategoryEpic$ } from './src/postsEpics'
import { observableCallApiGetAllCategoriesEpic$ } from './src/categoriesEpics'

export const rootEpic = combineEpics(
    observableCallApiGetAllPostEpic$,
    observableCallApiPostVoteEpic$,
    observableCallApiPostDeleteEpic$,
    observableCallApiPostEditEpic$,
    observableCallApiGetPostsByCategoryEpic$,
    observableCallApiGetAllCategoriesEpic$,
  );