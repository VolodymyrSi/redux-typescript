import { Answers } from './answersTypes';

export type initialStateType = {
  data: {
    items: Answers;
  };
};

export type AddAnswersAction = {
  type: 'ADD_ANSWERS';
  payload: object;
};
