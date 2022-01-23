import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
