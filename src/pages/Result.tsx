import './Result.css';

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import LotteryPeopleList from '../components/LotteryPeopleList';

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
  const { paraResult } = useParams();

  const [decodedResult, setDecodedResult] = useState<IResult>();

  useEffect(() => {
    setDecodedResult(JSON.parse(decodeURIComponent(escape(window.atob(paraResult ?? '')))));
  }, []);

  return (
    <div>
      <section className='congratulation_section'>
        <h1>👏</h1>
        <h2>
          {decodedResult?.total_count}명 중 {decodedResult?.selectedComments.length}명이 추첨 됐어요!
        </h2>
      </section>
      {decodedResult && <LotteryPeopleList comments={decodedResult.selectedComments} />}
    </div>
  );
};

export default Result;
