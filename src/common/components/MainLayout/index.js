import { useEffect } from "react";
import { connect } from "react-redux";
import { autoSignUserIn } from "../../redux/thunks";
import "../../../theme/styles/css/layout.css";


const MainLayout = ({
  children,
  isLoggedIn,
  user,
  autoSignUserIn,
}) => {

  useEffect(() => {
    if (!isLoggedIn) {
      autoSignUserIn();
    }
  }, []);

  return (
    <div>
      <header>
        <p>
          Test: <br></br>
          isLoggedIn? {isLoggedIn} <br></br>
          {isLoggedIn
            ? user
            : ''}
        </p>
      </header>
      <div>
        {children}
      </div>
    </div>
  );
}


const mapStateToProps = ({user, theme}) => {
  return {
    isLoggedIn: user.isSignedIn,
    user: user.user,
  };
};

const mapDispatchToProps = {
  autoSignUserIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);