import type { CounterAction, CounterState } from './counterTypes';

const initialState: CounterState = {
  value: 2,
};

export default function counterReducer(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case 'INCREMENT_BY_1':
      return { value: state.value + 1 };
    case 'DECREMENT_BY':
      return { value: state.value - action.payload };
    case 'RESET_COUNTER':
      return { value: 0 };
    default:
      return state;
  }
}

export const incrementBy1 = (): CounterAction => ({ type: 'INCREMENT_BY_1' });
export const decrementCounter = (value: number): CounterAction => ({
  type: 'DECREMENT_BY',
  payload: value,
});
export const resetCounter = (): CounterAction => ({ type: 'RESET_COUNTER' });
