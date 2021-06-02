import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../../services/HeyArnoldApi';


const MainPage = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getCharacters()
      .then(setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div>
      <h2>Main Page Container!</h2>
    </div>
  );

};

export default MainPage;
