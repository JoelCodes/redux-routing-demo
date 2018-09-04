import { push } from 'connected-react-router';

export function rootReducer(state = {}) {
  return state;
}

export const redirecterMW = store => next => (action) => {
  next(action);
  const { type, payload: { location: { pathname } } } = action;

  if (type === '@@router/LOCATION_CHANGE' && pathname === '/other') {
    setTimeout(() => {
      store.dispatch(push('/'));
    }, 2000);
  }
};
