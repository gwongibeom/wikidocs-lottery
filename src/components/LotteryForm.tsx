import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from './Button';
import './LotteryForm.css';
import useCheckPageId from '../hooks/useCheckPageId';

interface LotteryForm {
  pageNumber: string | number;
  drawNumber: string | number;
}

const LotteryForm = () => {
  const pageNameRef = useRef<HTMLParagraphElement>(null);
  const nav = useNavigate();

  const [lotteryForm, setLotteryForm] = useState<LotteryForm>({ pageNumber: '', drawNumber: '' });

  const onGoAboutClick = () => {
    nav('/about');
  };

  const onPageCheckButton = async () => {
    if (pageNameRef.current) {
      pageNameRef.current.style.color = 'rgba(0,0,0,0.6)';
      pageNameRef.current.textContent = '조회중!';
      const result = await useCheckPageId(lotteryForm.pageNumber);
      pageNameRef.current.textContent = result.title;
      pageNameRef.current.style.color = result.code === 'success' ? 'rgb(100, 201, 101)' : 'rgb(253, 86, 95)';
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setLotteryForm({ ...lotteryForm, [name]: parseInt(value) });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onPageCheckButton();
    }
  };

  const onInputReset = () => {
    setLotteryForm({ pageNumber: '', drawNumber: '' });
    if (pageNameRef.current) {
      pageNameRef.current.textContent = '';
    }
  };

  return (
    <div>
      <section>
        <h4>페이지 번호</h4>
        <div className='input_wrapper'>
          <input
            type='number'
            name='pageNumber'
            value={lotteryForm.pageNumber}
            placeholder='페이지 번호를 입력 해주세요.'
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
          <Button title='확인' onClick={onPageCheckButton} />
        </div>
        <p ref={pageNameRef} className='pageNameRef'></p>
      </section>
      <section>
        <h4>추첨 인원</h4>
        <div className='input_wrapper'>
          <input type='number' name='drawNumber' value={lotteryForm.drawNumber} placeholder='추천인원 수를 입력 해주세요.' onChange={onInputChange} />
        </div>
      </section>
      <section className='button_wrapper'>
        <Button title={'소개로 '} style='NEGATIVE' onClick={onGoAboutClick} />
        <Button title={'초기화'} onClick={onInputReset} />
        <Button title={'추첨'} style='POSITIVE' />
      </section>
    </div>
  );
};

export default LotteryForm;
