import Template from "../Components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn, isLoggedIn}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
      isLoggedIn={isLoggedIn}
    />
  );
}

export default Login;
