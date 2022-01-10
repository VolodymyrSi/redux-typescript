import parse from 'html-react-parser';
import { Comment, Avatar, Card } from 'antd';
import { AnswerItem as AnswerItemType } from '../../../../types/answersTypes';

type AnswerItemProps = {
  data: AnswerItemType;
};

function AnswerItem({ data }: AnswerItemProps) {
  return (
    <Card style={{ marginBottom: 20, cursor: 'default' }}>
      <Comment
        author={data.owner.display_name}
        avatar={(
          <Avatar
            src={data.owner.profile_image}
            alt={data.owner.display_name}
          />
        )}
        content={<p>{parse(data.body)}</p>}
      />
    </Card>
  );
}

export default AnswerItem;
