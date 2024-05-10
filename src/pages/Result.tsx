import './Result.css';

import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Button from '../components/Button';
import LotteryPeopleList from '../components/LotteryPeopleList';
import useSetTitle from '../hooks/useSetTitle';

interface IComment {
  content: string;
  create_time: string;
  email: string;
  id: number;
  name: string;
}

interface IResult {
  selectedComments: IComment[];
  total_count: number;
}

const Result = () => {
  useSetTitle('결과');
  const nav = useNavigate();
  const { paraResult } = useParams();

  const [decodedResult, setDecodedResult] = useState<IResult>();

  useEffect(() => {
    setDecodedResult(JSON.parse(decodeURIComponent(escape(window.atob(paraResult ?? '')))));
  }, []);

  const onShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('클립보드 복사 완료!');
  };

  const onGoAboutLottery = () => {
    nav('/lottery');
  };

  return (
    <div className='result_wrapper'>
      <section className='congratulation_section'>
        <h1>👏</h1>
        <h2>
          {decodedResult?.total_count}명 중 {decodedResult?.selectedComments.length}명이 추첨 됐어요!
        </h2>
      </section>
      {decodedResult && <LotteryPeopleList comments={decodedResult.selectedComments} />}
      <div className='buttons_wrapper'>
        <Button title='다시 추첨하기' onClick={onGoAboutLottery} />
        <Button title='공유하기' style='POSITIVE' onClick={onShare} />
      </div>
    </div>
  );
};

export default Result;
