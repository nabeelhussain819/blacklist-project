import React, { useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center', 
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function Loader({ loading }) {
  useEffect(() => {
    document.documentElement.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'black';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';

    return () => {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="sweet-loading"> 
      <CircleLoader
        color='white'
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p 
        style={{
          textAlign: 'center',
          position: 'absolute',
          top: '60vh',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', 
        }}
      >
        BLACKLIST
      </p>
    </div>
  );
}

export default Loader;
