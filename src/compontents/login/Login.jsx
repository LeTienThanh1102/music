import {
  faFacebook,
  faInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.scss";

function Login() {
  const handleChange = () => {
    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    let aContainer = document.querySelector(".contanier-a");
    let bContainer = document.querySelector(".contanier-b");
    switchCtn.classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
  };
  const navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
  }
  const handleLogin1=(e)=>{
    e.preventDefault();
    navigate("/");
  }
  

  return (
    <div className="app">
      <div className="around">
        <div className="container contanier-a">
          <form action="" method="" className="form">
            <h2 className="form-title">Create Account</h2>
            <div className="form-connect">
              <FontAwesomeIcon className="form-icon" icon={faFacebook} />
              <FontAwesomeIcon className="form-icon" icon={faInstagram} />
              <FontAwesomeIcon className="form-icon" icon={faSquareTwitter} />
            </div>
            <input type="text" className="form-input" placeholder="Name" />
            <input type="text" className="form-input" placeholder="Email" />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <button
              className=" button form-submit submit"
              onClick={(e)=>handleLogin(e)}
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="container contanier-b">
          <form action="" method="" className="form">
            <h2 className="form-title">Sign in to Website</h2>
            <div className="form-connect">
              <FontAwesomeIcon className="form-icon" icon={faFacebook} />
              <FontAwesomeIcon className="form-icon" icon={faInstagram} />
              <FontAwesomeIcon className="form-icon" icon={faSquareTwitter} />
            </div>
            <input type="text" className="form-input" placeholder="Email" />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <button
              className="button form-submit submit"
              onClick={(e)=>handleLogin1(e)}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="switch" id="switch-cnt">
          <div className="switch__container" id="switch-c1">
            <h2 className="switch__title title">Welcome Back !</h2>
            <p className="switch__description description">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="switch__button button switch-btn"
              onClick={() => handleChange()}
            >
              SIGN IN
            </button>
          </div>
          <div className="switch__container is-hidden" id="switch-c2">
            <h2 className="switch__title title">Join Us</h2>
            <p className="switch__description description">
              Enter your personal details and start journey with us
            </p>
            <button
              className="switch__button button switch-btn"
              onClick={() => handleChange()}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
