import Logo from '../Assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';


const HomePage = () => {
    const navigate = useNavigate();
  
    const handleSignUp = () => {
      navigate('/register');
    };
  
    const handleSignIn = () => {
      navigate('/login');
    };

  return (
    <div className="homepage">
      <div className="left-panel">
      <img src={Logo} alt="Logo" className="logo" style={{width:"400px",height:"100px",paddingBottom:"20px"}}/>
        <p>Read what excites you, not what you should.</p>
        <div className="buttons">
          <button className="sign-up" onClick={handleSignUp}>Sign up</button>
          <button className="sign-in" onClick={handleSignIn}>Sign in</button>
        </div>
      </div>
      <div className="right-panel">
          
        </div>
    </div>
  );
};

export default HomePage;