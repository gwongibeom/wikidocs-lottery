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
    <div className='LotteryPeopleList'>
      {comments.map((item) => (
        <LotteryPeopleItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default LotteryPeopleList;
