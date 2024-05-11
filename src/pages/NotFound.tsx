import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';

const NotFound = () => {
  const nav = useNavigate();
  const onGoHome = () => {
    nav('/');
  };
  return (
    <div>
      <h1>404 에러!</h1>
      <h2>"여긴 공허하네요... 메인으로 돌아가는 것이 좋겠습니다..."</h2>
      <Button title='메인으로 가기' onClick={onGoHome} />
    </div>
  );
};

export default NotFound;
