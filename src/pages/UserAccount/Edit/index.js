import { useEffect } from "react";
import { connect } from "react-redux";


const Edit = ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);