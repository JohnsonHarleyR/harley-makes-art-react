import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import CheckOut from "./pages/Cart/CheckOut";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import UserAccount from "./pages/UserAccount";
import Edit from "./pages/UserAccount/Edit";
import SignUp from './pages/UserAccount/SignUp';
import Login from "./pages/UserAccount/Login";
import Settings from "./pages/UserAccount/Settings";
import ViewItem from "./pages/ViewItem";

function App() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  const navigateTo = (path) => {
    navigate(path);
  }

  const goToLogin = () => {
    navigate("/login");
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:itemId" element={<ViewItem  prevPath={useLocation().pathname} navigateTo={navigateTo} />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<UserAccount goToLogin={goToLogin} />} />
      <Route path="/account/edit" element={<Edit goToLogin={goToLogin} />} />
      <Route path="/account/settings" element={<Settings goToLogin={goToLogin} />} />
      <Route path="/account/signUp" element={<SignUp prevPath={useLocation().pathname} navigateTo={navigateTo} />} />
      <Route path="/account/login" element={<Login navigateToHome={navigateToHome} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkOut" element={<CheckOut goToLogin={goToLogin} />} />
      <Route path="/shop" element={<Shop page={null} />} />
      <Route path="/shop/:pageNumber" element={<Shop page={null} />} />
    </Routes>
  );
}

export default App;
