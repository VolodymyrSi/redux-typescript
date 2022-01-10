import {
  DEFAULT_FILTER,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from '../constants';

import {
  initialStateType,
  QuestionsAction,
  QuestionsActionTypes,
} from '../types/questionsReducerTypes';

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

export const questionsReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: QuestionsAction,
): initialStateType => {
  switch (action.type) {
    case QuestionsActionTypes.ADD_QUESTIONS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        isFetching: false,
      };
    case QuestionsActionTypes.SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case QuestionsActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case QuestionsActionTypes.SET_QUESTIONS_PER_PAGE:
      return { ...state, questionsPerPage: action.payload };
    case QuestionsActionTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const addQuestionsAction = (questions: any) => ({
  type: QuestionsActionTypes.ADD_QUESTIONS,
  payload: questions,
});

export const setIsFetching = (bool: boolean) => ({
  type: QuestionsActionTypes.SET_IS_FETCHING,
  payload: bool,
});

export const setCurrentPage = (page: number) => ({
  type: QuestionsActionTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const setQuestionsPerPage = (number: number) => ({
  type: QuestionsActionTypes.SET_QUESTIONS_PER_PAGE,
  payload: number,
});

export const setFilter = (filter: string) => ({
  type: QuestionsActionTypes.SET_FILTER,
  payload: filter,
});
