import './index.scss';
import header from '../../images/header.svg';

const Home = ({search}) => {
  return(
    <div className="home">
      <div className="home__body">
        <img src={header} alt="header"/>
        <div className="home__inputContainer">
          {search}
        </div>
      </div>
    </div>
  );
}

export default Home;