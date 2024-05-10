import LotteryForm from '../components/LotteryForm';
import useSetTitle from '../hooks/useSetTitle';

const Lottery = () => {
  useSetTitle('추첨');
  return (
    <>
      <LotteryForm />
    </>
  );
};

export default Lottery;
