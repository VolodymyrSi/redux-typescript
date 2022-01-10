import { addQuestionsAction, setIsFetching } from '../store/questionsReducer';
import {
  DEFAULT_FILTER,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from '../constants';

const questionsURL = (pageNumber: number, pageSize: number, sort: string) => `https://api.stackexchange.com/2.3/questions?page=${pageNumber}&pagesize=${pageSize}&order=desc&sort=${sort}&site=stackoverflow&filter=!nKzQUR693x`;

const fetchQuestions = (
  pageNumber = DEFAULT_PAGE,
  pageSize = DEFAULT_ITEMS_PER_PAGE,
  sort = DEFAULT_FILTER,
) => function (dispatch: any) {
  dispatch(setIsFetching(true));
  fetch(questionsURL(pageNumber, pageSize, sort))
    .then((response) => response.json())
    .then((json) => {
      dispatch(addQuestionsAction(json));
    });
};

export default fetchQuestions;
