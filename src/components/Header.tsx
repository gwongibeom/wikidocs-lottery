import { NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  {
    name: '소개',
    to: '/about',
  },
  {
    name: '추첨',
    to: '/',
  },
];

const Header = () => {
  return (
    <header>
      <NavLink to={'/'} className='header_title'>
        <img src='/favicon-32x32.png'></img>위키독스 댓글 추첨기
      </NavLink>

      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
