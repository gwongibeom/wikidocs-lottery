import './LotteryPeopleList.css';

import LotteryPeopleItem from './LotteryPeopleItem';

interface IComment {
  content: string;
  create_time: string;
  email: string;
  id: number;
  name: string;
}

const LotteryPeopleList = ({ comments }: { comments: IComment[] }) => {
  return (
    <>
      {comments.map((item) => (
        <LotteryPeopleItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default LotteryPeopleList;
