import { switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { actionLoading } from '../../../actions'

// é possivel obeter acesso ao state dentro do observable
//export const observableStartLoadApiActionEpic$ =  (action$, getState) =>
export const observableStartLoadApiActionEpic$ =  action$ => // Start loading
action$.pipe(
    filter(({type}) => type.includes("GET") && type.includes("API")),
    switchMap(() => {
      return of(actionLoading(true))
    })
)

export const observableEndLoadApiActionEpic$ =  action$ => // ends loading on success failure and cancel
action$.pipe(
    filter(({type}) => (type.includes("SUCCESS") || type.includes("FAILURE")) && type.includes("API")),
    switchMap(() => {
      return of(actionLoading(false))
    })
)
