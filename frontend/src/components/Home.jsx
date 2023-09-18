import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { namee } = useParams();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
      Welcome {namee} 
    </div>
  );
}

export default Home;
