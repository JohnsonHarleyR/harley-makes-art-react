import { useEffect } from "react";
import { connect } from "react-redux";
import { userThunks, themeThunks } from "../../../redux/thunks";
import "../../../theme/styles/css/layout.css";

const MainLayout = ({
  children,
  isLoggedIn,
  userInfo,
  isThemeImplemented,
  autoSignUserIn,
  implementTheme,
}) => {

  useEffect(() => {
    if (!isLoggedIn) {

      autoSignUserIn();
    }
    if (!isThemeImplemented) {
      implementTheme();
    }
  }, []);

  return (
    <div>
      <header>
        <p>
          Test: <br></br>
          isLoggedIn? {`${isLoggedIn}`} <br></br>
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
    isLoggedIn: user.isLoggedIn,
    userInfo: user.accountInfo,
    isThemeImplemented: theme.isThemeImplemented,
  };
};

const mapDispatchToProps = {
  autoSignUserIn: userThunks.autoSignUserIn,
  implementTheme: themeThunks.implementTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);