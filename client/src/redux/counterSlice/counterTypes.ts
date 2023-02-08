export type CounterState = {
  value: number;
};

export type CounterAction =
  | { type: 'INCREMENT_BY_1' }
  | { type: 'DECREMENT_BY'; payload: number }
  | { type: 'RESET_COUNTER' };
