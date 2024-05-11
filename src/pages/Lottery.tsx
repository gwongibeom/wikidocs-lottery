import AdOne from '../components/AdOne';
import LotteryForm from '../components/LotteryForm';
import useSetTitle from '../hooks/useSetTitle';

const Lottery = () => {
  useSetTitle('추첨');
  return (
    <div className='Lottery'>
      <AdOne />
      <LotteryForm />
    </div>
  );
};

export default Lottery;
