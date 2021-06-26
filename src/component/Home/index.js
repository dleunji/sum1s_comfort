import './index.scss';
import header from '../../images/header.svg';
import ainizeIcon from '../../images/ainize-logo.svg';
import githubIcon from '../../images/git-hub-icon.svg';
import infoIcon from '../../images/info-icon.svg';
import Search from '../Search';
const Home = ({input, result, buttonVisible, setInput, search}) => {
  return(
    <div className="home">
      <div className="home__body">
        <img src={header} alt="header"/>
        <div className="home__inputContainer">
          <Search 
          input={input}
          result={result}
          buttonVisible={buttonVisible}
          setInput={setInput}
          search={search}/>
        </div>
        <div className="home__footer">
          <a href="https://www.notion.so/comcom/NLP-745c5b5500a4490cab062c766d0e28ae" className="about">
            <img src={infoIcon} alt="info"/>
            About the project
          </a>
          <a href="#" className="ainize">
            <img src={ainizeIcon} alt="ainize"/>
            Powered by Ainize
          </a>
          <a href="https://github.com/dleunji/sum1s_comfort" className="github">
            <img src={githubIcon} alt="github"/>
            Contribute on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;