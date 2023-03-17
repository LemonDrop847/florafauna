import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!auth.currentUser) {
          alert("Login or Signup First")
          navigate("/");
        }
      });
      return unsubscribe;
    }, [navigate]);

    return <Component {...props} />;
  };
}

export default withAuth;
