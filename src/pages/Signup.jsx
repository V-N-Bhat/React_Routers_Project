import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn,isLoggedIn }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      isLoggedIn={isLoggedIn}
    />
  );
}

export default Signup;
