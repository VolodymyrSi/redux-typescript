import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from 'antd';

import QuestionItem from './QuestionItem/QuestionItem';

import LoadingSpinner from '../../features/LoadingSpinner';
import PageFooter from '../PageFooter';
import CustomPagination from '../../features/CustomPagination';
import QuestionsHeader from './QuestionsHeader';
import fetchQuestions from '../../../api/questionsAPI';
import { RootState } from '../../../store';
import { QuestionItem as QuestionItemType } from '../../../types/questionsTypes';

const { Content } = Layout;

export function AllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.questions.data);
  const isFetching = useSelector(
    (state: RootState) => state.questions.isFetching,
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <Layout className="layout">
      <QuestionsHeader />
      {isFetching && <LoadingSpinner />}
      {!isFetching && (
        <div>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ margin: '16px 0' }} className="site-layout-content">
              <div>
                {questions.items.map((question: QuestionItemType) => (
                  <QuestionItem
                    question={question}
                    key={question.question_id}
                  />
                ))}
              </div>
            </div>
          </Content>
          <CustomPagination />
        </div>
      )}
      <PageFooter />
    </Layout>
  );
}

export default AllQuestions;
