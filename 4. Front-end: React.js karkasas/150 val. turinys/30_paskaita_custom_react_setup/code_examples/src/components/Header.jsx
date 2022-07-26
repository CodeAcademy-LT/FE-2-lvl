import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>Custom React setup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
