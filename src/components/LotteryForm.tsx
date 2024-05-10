import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from './Button';
import './LotteryForm.css';
import useCheckPageId from '../hooks/useCheckPageId';
import useGetPageComments from '../hooks/useGetPageComments';

interface ILotteryForm {
  pageNumber: string | number;
  drawNumber: string | number;
}

interface IComment {
  content: string;
  create_time: string;
  email: string;
  id: number;
  name: string;
}

interface IData {
  comment_list: IComment[];
  total: number;
}

interface ICommentAPIResult {
  code: string;
  data?: IData;
}

interface IResult {
  selectedComments: IComment[];
  total_count: number;
}

const LotteryForm = () => {
  const pageNameParagraphRef = useRef<HTMLParagraphElement>(null);
  const pageNumberInput = useRef<HTMLInputElement>(null);
  const drawNumberInput = useRef<HTMLInputElement>(null);
  const nav = useNavigate();

  const [lotteryForm, setLotteryForm] = useState<ILotteryForm>({ pageNumber: '', drawNumber: '' });

  const onGoAboutClick = () => {
    nav('/about');
  };

  const onPageCheckButton = async () => {
    if (pageNameParagraphRef.current) {
      pageNameParagraphRef.current.style.color = 'rgba(0,0,0,0.6)';
      pageNameParagraphRef.current.textContent = '조회중!';
      const result = await useCheckPageId(lotteryForm.pageNumber);
      pageNameParagraphRef.current.textContent = result.title;
      pageNameParagraphRef.current.style.color = result.code === 'success' ? 'rgb(100, 201, 101)' : 'rgb(253, 86, 95)';
    }
  };

  const onSubmit = async () => {
    const { pageNumber, drawNumber } = lotteryForm;
    if (pageNumber === '') {
      pageNumberInput.current?.focus();
      return;
    }
    if (drawNumber === '') {
      drawNumberInput.current?.focus();
      return;
    }

    const response: ICommentAPIResult = await useGetPageComments(pageNumber);
    if (response.code !== 'success' || !response.data) {
      alert('불러오기를 실패했어요!');
      return;
    }

    const comment_list: IComment[] = response.data.comment_list;
    const total_count: number = response.data.total;
    if (!comment_list || comment_list.length === 0 || Number(comment_list.length) < Number(drawNumber)) {
      alert('댓글이 없거나 부족해요!');
      return;
    }

    const shuffledComments = comment_list.sort(() => Math.random() - 0.5);
    const selectedComments = shuffledComments.slice(0, Number(drawNumber));
    const result: IResult = {
      selectedComments,
      total_count,
    };
    const base64EncodeJsonString = btoa(unescape(encodeURIComponent(JSON.stringify(result))));
    console.log(base64EncodeJsonString);

    nav(`/result/${base64EncodeJsonString}`);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setLotteryForm({ ...lotteryForm, [name]: value === '' ? '' : parseInt(value, 10) });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onPageCheckButton();
    }
  };

  const onInputReset = () => {
    setLotteryForm({ pageNumber: '', drawNumber: '' });
    if (pageNameParagraphRef.current) {
      pageNameParagraphRef.current.textContent = '';
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
            ref={pageNumberInput}
            value={lotteryForm.pageNumber}
            placeholder='페이지 번호를 입력 해주세요.'
            onChange={onInputChange}
            onKeyDown={onKeyDown}
          />
          <Button title='확인' onClick={onPageCheckButton} />
        </div>
        <p ref={pageNameParagraphRef} className='pageNameParagraphRef'></p>
      </section>
      <section>
        <h4>추첨 인원</h4>
        <div className='input_wrapper'>
          <input
            type='number'
            name='drawNumber'
            ref={drawNumberInput}
            value={lotteryForm.drawNumber}
            placeholder='추천인원 수를 입력 해주세요.'
            onChange={onInputChange}
          />
        </div>
      </section>
      <section className='button_wrapper'>
        <Button title={'소개로 '} style='NEGATIVE' onClick={onGoAboutClick} />
        <Button title={'초기화'} onClick={onInputReset} />
        <Button title={'추첨'} style='POSITIVE' onClick={onSubmit} />
      </section>
    </div>
  );
};

export default LotteryForm;
