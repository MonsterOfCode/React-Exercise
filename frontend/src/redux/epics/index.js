import { combineEpics } from 'redux-observable'
import { observableCallApiGetAllPostEpic$, observableCallApiPostVoteEpic$, observableCallApiPostDeleteEpic$, observableCallApiPostEditEpic$, observableCallApiGetPostsByCategoryEpic$, observableCallApiPostCreateNewEpic$ } from './src/postsEpics'
import { observableCallApiGetAllCategoriesEpic$ } from './src/categoriesEpics'
import { observableCallApiGetCommentsByPostEpic$, observableCallApiCommentVoteEpic$, observableCallApiCommentDeleteEpic$, observableCallApiCommentCreateNewEpic$, observableCallApiCommentEditEpic$ } from './src/commentsEpics'

export const rootEpic = combineEpics(
    observableCallApiGetAllPostEpic$,
    observableCallApiPostVoteEpic$,
    observableCallApiPostDeleteEpic$,
    observableCallApiPostEditEpic$,
    observableCallApiPostCreateNewEpic$,
    observableCallApiGetPostsByCategoryEpic$,
    observableCallApiGetAllCategoriesEpic$,
    observableCallApiGetCommentsByPostEpic$,
    observableCallApiCommentVoteEpic$,
    observableCallApiCommentDeleteEpic$,
    observableCallApiCommentCreateNewEpic$,
    observableCallApiCommentEditEpic$,
  );