import {
  AddAnswersAction,
  initialStateType,
} from '../types/answerReducerTypes';

const initialState: initialStateType = {
  data: {
    items: [],
  },
};

const ADD_ANSWERS = 'ADD_ANSWERS';

export const answersReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: AddAnswersAction,
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
