import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React from 'react';
import { decrementCounter, incrementBy1, resetCounter } from '../../redux/counterSlice/counterReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function CounterPage(): JSX.Element {
  const value = useAppSelector((store) => store.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography>{value}</Typography>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => dispatch(incrementBy1())}>+1</Button>
          <Button onClick={() => dispatch(decrementCounter(6))}>-6</Button>
          <Button onClick={() => dispatch(resetCounter())}>C</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
