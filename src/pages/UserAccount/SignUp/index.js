import { useEffect } from "react";
import { connect } from "react-redux";


const SignUp = ({
  isLoggedIn,
  navigateTo,
  prevPath,
}) => {

  useEffect(() => {
    if (isLoggedIn === true) {
      navigateTo("/");
    }
  }, [isLoggedIn]);

  return (
    <></>
  );
}


const mapStateToProps = ({user}) => {
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);