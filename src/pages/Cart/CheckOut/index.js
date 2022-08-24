import { connect } from "react-redux";


const CheckOut = ({
  isLoggedIn,
  goToLogin,
}) => {

  useEffect(() => {
    if (isLoggedIn === false) {
      goToLogin();
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);