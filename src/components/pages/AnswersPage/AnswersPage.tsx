import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import LoadingSpinner from '../../features/LoadingSpinner';
import PageFooter from '../PageFooter';
import AnswersHeader from './AnswersHeader';
import fetchAnswers from '../../../api/answersAPI';
import AnswerItem from './AnswerItem/AnswerItem';
import { RootState } from '../../../store';
import { AnswerItem as AnswerItemType } from '../../../types/answersTypes';

function AnswersPage() {
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.answers.data);

  const { questionId } = useParams();

  useEffect(() => {
    if (!questionId) return;
    dispatch(fetchAnswers(questionId));
  }, []);

  return (
    <Layout className="layout">
      <AnswersHeader />
      {!answers.items && <LoadingSpinner />}
      {answers.items && (
        <Content style={{ padding: '0 50px', minHeight: '80vh' }}>
          <div style={{ margin: '16px 0' }} className="site-layout-content">
            {answers.items.map((answer: AnswerItemType) => (
              <AnswerItem data={answer} />
            ))}
          </div>
        </Content>
      )}
      <PageFooter />
    </Layout>
  );
}

export default AnswersPage;
