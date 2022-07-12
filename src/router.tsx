import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Homepage from "./components/homepage";
import Registration from "./components/registration";
import Basket from "./components/basket";
import Userpage from "./components/userpage";
import ProtectedRoute from "./components/protectedRoute";
import ClothPage from "./components/clothPage";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/basket"
            element={
              <ProtectedRoute>
                <Basket />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userpage"
            element={
              <ProtectedRoute>
                <Userpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clothes/:id"
            element={
              <ProtectedRoute>
                <ClothPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
