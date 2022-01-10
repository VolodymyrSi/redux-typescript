import { Answers } from '../types/answersTypes';

type initialStateType = {
  data: {
    items: Answers;
  };
};

const initialState: initialStateType = {
  data: {
    items: [],
  },
};

const ADD_ANSWERS = 'ADD_ANSWERS';

export const answersReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: { type: string; payload: object },
): initialStateType => {
  switch (action.type) {
    case ADD_ANSWERS:
      return { ...state, data: { ...state.data, ...action.payload } };
    default:
      return state;
  }
};

export const addAnswersAction = (payload: any) => ({
  type: ADD_ANSWERS,
  payload,
});
