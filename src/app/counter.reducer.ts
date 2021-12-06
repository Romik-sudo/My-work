import { createReducer, on } from '@ngrx/store';
import { increase, decrease, reset } from './counter.actions';

export const initialStateInc = -5;
export const initialStateDec = 10;

const _counterIncrReducer = createReducer(
  initialStateInc,
  on(increase, (state) => state + 1),
  on(reset, (state) => initialStateInc)
);


const _counterDecrReducer = createReducer(
  initialStateDec,
  on(decrease, (state) => state - 1),
  on(reset, (state) => initialStateDec)
);

export function counterIncrReducer(state:any, action:any) {
  return _counterIncrReducer(state, action);
}

export function counterDecrReducer(state:any, action:any) {
  return _counterDecrReducer(state, action);
}
