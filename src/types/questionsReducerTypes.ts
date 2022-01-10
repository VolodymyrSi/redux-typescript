import { QuestionsList } from './questionsTypes';

export enum QuestionsActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_QUESTIONS = 'ADD_QUESTIONS',
  // eslint-disable-next-line no-unused-vars
  SET_IS_FETCHING = 'SET_IS_FETCHING',
  // eslint-disable-next-line no-unused-vars
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  // eslint-disable-next-line no-unused-vars
  SET_QUESTIONS_PER_PAGE = 'SET_QUESTIONS_PER_PAGE',
  // eslint-disable-next-line no-unused-vars
  SET_FILTER = 'SET_FILTER',
}

export type SetQuestionsPerPageAction = {
  type: QuestionsActionTypes.SET_QUESTIONS_PER_PAGE;
  payload: number;
};

export type initialStateType = {
  data: {
    items: QuestionsList;
    total: number;
  };
  isFetching: boolean;
  currentPage: number;
  questionsPerPage: number;
  filter: string;
};

type AddQuestionsAction = {
  type: QuestionsActionTypes.ADD_QUESTIONS;
  payload: object;
};

type SetIsFetchingAction = {
  type: QuestionsActionTypes.SET_IS_FETCHING;
  payload: boolean;
};

type SetCurrentPageAction = {
  type: QuestionsActionTypes.SET_CURRENT_PAGE;
  payload: number;
};

type SetFilterAction = {
  type: QuestionsActionTypes.SET_FILTER;
  payload: string;
};

export type QuestionsAction =
  | AddQuestionsAction
  | SetIsFetchingAction
  | SetCurrentPageAction
  | SetQuestionsPerPageAction
  | SetFilterAction;
