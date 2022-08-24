import { useEffect } from "react";
import { connect } from "react-redux";


const Settings = ({
  isLoggedIn,
  navigateToLogin,
}) => {

  useEffect(() => {
    if (isLoggedIn === false) {
      navigateToLogin();
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);