import { addAnswersAction } from '../store/answersReducer';

const answersURL = (questionID: string) => `https://api.stackexchange.com/2.3/questions/${questionID}/answers?order=desc&sort=activity&site=stackoverflow&filter=!nKzQURF6Y5`;

const fetchAnswers = (questionID: string) => function (dispatch: any) {
  fetch(answersURL(questionID))
    .then((response) => response.json())
    .then((json) => dispatch(addAnswersAction(json)));
};

export default fetchAnswers;
