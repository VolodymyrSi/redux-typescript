import { Link } from 'react-router-dom';
import { Card } from 'antd';

import QuestionStats from './QuestionStats';
import QuestionBody from './QuestionBody';
import { QuestionItem as QuestionItemType } from '../../../../types/questionsTypes';

type QuestionItemProps = {
  question: QuestionItemType;
};

function QuestionItem({ question }: QuestionItemProps) {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Link to={`answers/${question.question_id}`}>
        <QuestionBody question={question} />
      </Link>
      <QuestionStats question={question} />
    </Card>
  );
}

export default QuestionItem;
