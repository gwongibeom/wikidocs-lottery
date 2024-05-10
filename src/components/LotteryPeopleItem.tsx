import './LotteryPeopleItem.css';

interface IComment {
  content: string;
  create_time: string;
  email: string;
  id: number;
  name: string;
}

const LotteryPeopleItem = ({ content, create_time, email, name }: IComment) => {
  const date = new Date(create_time);
  return (
    <div className='LotteryPeopleItem'>
      <div>
        <h3>{name}</h3>
        <span>{email}</span>
      </div>
      <p>{content}</p>
      <div className='info_section'>
        <p>{`${date.toLocaleString()}`}</p>
      </div>
    </div>
  );
};

export default LotteryPeopleItem;
