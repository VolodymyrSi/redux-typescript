import { Statistic } from 'antd';
import { BulbOutlined, RiseOutlined } from '@ant-design/icons';
import { QuestionItem as QuestionItemType } from '../../../../types/questionsTypes';

type QuestionStatsProps = {
  question: QuestionItemType;
};

function QuestionStats({ question }: QuestionStatsProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 10 }}>
      <Statistic
        title="Views"
        value={question.view_count}
        prefix={<RiseOutlined />}
        style={{ marginRight: 10 }}
      />
      <Statistic
        title="Answers"
        value={question.answer_count}
        prefix={<BulbOutlined />}
      />
    </div>
  );
}

export default QuestionStats;
