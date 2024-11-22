



import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";


import { useNavigate } from "react-router-dom";

const withLogin = (WrappedComponent) => {
  const HOC = (props) => {
    const navigate = useNavigate();
    const { login, user, loading } = useSelector((state) => state.authReducer);
    
    // Local state to handle the loading state
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {
      if (!loading) {
        if (!login || !user) {
          navigate("/login"); // Redirect to login if not authenticated
        } else {
          setIsRedirecting(false); // Stop redirection once login status is confirmed
        }
      }
    }, [loading, login, user, navigate]);

    // Show a loading state while checking authentication
    if (isRedirecting || loading) {
      return <div>Loading...</div>; // You can replace this with a spinner or some other placeholder
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withLogin;
