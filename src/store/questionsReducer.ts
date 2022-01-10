import {
  DEFAULT_FILTER,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from '../constants';
import { QuestionsList } from '../types/questionsTypes';

type initialStateType = {
  data: {
    items: QuestionsList;
    total: number;
  };
  isFetching: boolean;
  currentPage: number;
  questionsPerPage: number;
  filter: string;
};

const initialState: initialStateType = {
  data: {
    items: [],
    total: 0,
  },
  isFetching: true,
  currentPage: DEFAULT_PAGE,
  questionsPerPage: DEFAULT_ITEMS_PER_PAGE,
  filter: DEFAULT_FILTER,
};

const ADD_QUESTIONS = 'ADD_QUESTIONS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_QUESTIONS_PER_PAGE = 'SET_QUESTIONS_PER_PAGE';
const SET_FILTER = 'SET_FILTER';

export const questionsReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: any,
): initialStateType => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_QUESTIONS_PER_PAGE:
      return { ...state, questionsPerPage: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const addQuestionsAction = (questions: any) => ({
  type: ADD_QUESTIONS,
  payload: questions,
});

export const setIsFetching = (bool: boolean) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setQuestionsPerPage = (number: number) => ({
  type: SET_QUESTIONS_PER_PAGE,
  payload: number,
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});
