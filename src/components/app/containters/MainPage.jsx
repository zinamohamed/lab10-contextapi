import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../../services/HeyArnoldApi';
import CharacterList from '../presentations/CharacterList';


const MainPage = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    getCharacters()
      .then(arnolds => {
        setCharacters(arnolds);
      })
      .finally(() => setLoading(false));
  }, []);


  return (
    <div>
      <h2>Main Page Container!</h2>
      <CharacterList loading={loading} characters={characters}/>
    </div>
  );

};

export default MainPage;
