import { useEffect } from "react";
import { connect } from "react-redux";
import { userThunks } from "../../../redux/thunks";
import "../../../theme/styles/css/layout.css";

const MainLayout = ({
  children,
  isLoggedIn,
  userInfo,
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
          isLoggedIn? {`${isLoggedIn}`} <br></br>
          {isLoggedIn
            ? `${userInfo}`
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
  console.log(`user: `, user);
  return {
    isLoggedIn: user.isLoggedIn,
    userInfo: user.accountInfo,
  };
};

const mapDispatchToProps = {
  autoSignUserIn: userThunks.autoSignUserIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);