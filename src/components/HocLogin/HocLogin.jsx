



import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";


import { useNavigate } from "react-router-dom";

const withLogin = (WrappedComponent) => {
  const HOC = (props) => {
    const navigate = useNavigate();

    const { login, user, loading } = useSelector((state) => state.authReducer);
    
  
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {
      if (!loading) {
        if (!login || !user) {
          navigate("/login"); 
        } else {
          setIsRedirecting(false); 
        }
      }
    }, [loading, login, user, navigate]);

    
    if (isRedirecting || loading) {
      return <div>Loading...</div>; 
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withLogin;
