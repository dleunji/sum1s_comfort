import './index.scss';
import header from '../../images/header.svg';
import Search from '../Search';
const Home = () => {
  return(
    <div className="home">
      <div className="home__body">
        <img src={header} alt="header"/>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;