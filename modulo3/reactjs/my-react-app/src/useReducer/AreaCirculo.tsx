import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  radio: number;
  area: number;
}

type Action = {
  type: 'SET_RADIO';
  payload: number;
};

const PI = Math.PI;

const initialState: State = {
  radio: 0,
  area: 0
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_RADIO':
      return {
        radio: action.payload,
        area: PI * action.payload * action.payload
      };
    default:
      return state;
  }
}

export default function AreaCirculo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const radio = Number(e.target.value) || 0;

    dispatch({
      type: 'SET_RADIO',
      payload: radio
    });
  }

  return (
    <div>
      <h3>Área del círculo</h3>

      <input
        type="number"
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio"
      />

      <p>Radio: {state.radio}</p>
      <p>Área: {state.area.toFixed(2)}</p>
    </div>
  );
}
