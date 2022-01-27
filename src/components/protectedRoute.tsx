import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC = ({ children }) => {
  let user = localStorage.getItem("user");
  const location = useLocation();

  return <>{user ? children : <Navigate to="/login" replace state={{ from: location }} />}</>;
};

export default ProtectedRoute;
