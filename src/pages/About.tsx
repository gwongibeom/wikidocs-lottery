import Button from '../components/Button';
import useSetTitle from '../hooks/useSetTitle';
import './About.css';

const About = () => {
  useSetTitle('소개');
  const onMoveHref = (path: string) => {
    switch (path) {
      case 'github':
        window.location.href = 'https://github.com/gwongibeom/wikidocs-lottery';
        break;
      case 'gwongibeom':
        window.location.href = 'https://github.com/gwongibeom';
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <img src='/ms-icon-150x150.png' />
      <h1>위키독스 댓글 추첨기</h1>
      <p>위키독스 책의 댓글들을 랜덤으로 추첨 하는 추첨기입니다.</p>
      <br />
      <h2>사용법</h2>
      <ol>
        <li>
          <code>https://wikidocs.net/237579</code>에서 <code>237579</code>처럼 페이지 번호를 복사한다.
        </li>
        <li>
          <p>추첨 페이지에 들어가 페이지 번호와 추첨인원을 입력 후 추첨 버튼을 누른다.</p>
        </li>
        <li>
          <p>공유 버튼을 눌러 공유 한다.</p>
        </li>
      </ol>
      <h2>링크</h2>
      <Button title='깃허브 소스 보러가기' onClick={() => onMoveHref('github')} />
      <span> </span>
      <Button title='만든 사람 살펴보기' onClick={() => onMoveHref('gwongibeom')} />
    </div>
  );
};

export default About;
