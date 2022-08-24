import { useEffect } from "react";
import { connect } from "react-redux";


const UserAccount = ({
  isLoggedIn,
  goToLogin,
}) => {

  useEffect(() => {
    if (isLoggedIn === false) {
      goToLogin();
    }
  }, [isLoggedIn]);

  return (
    <>account page woo</>
  );
}


const mapStateToProps = ({user}) => {
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);