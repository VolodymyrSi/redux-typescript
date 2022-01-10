import { Avatar, Comment } from 'antd';
import { QuestionItem as QuestionItemType } from '../../../../types/questionsTypes';

type QuestionBodyProps = {
  question: QuestionItemType;
};

function QuestionBody({ question }: QuestionBodyProps) {
  return (
    <Comment
      author={question.owner.display_name}
      avatar={(
        <Avatar
          src={question.owner.profile_image}
          alt={question.owner.display_name}
        />
      )}
      content={<p style={{ fontSize: 18 }}>{question.title}</p>}
    />
  );
}

export default QuestionBody;
