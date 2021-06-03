import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../../services/HeyArnoldApi';
import CharacterList from '../presentations/CharacterList';
import { ThemeContext } from '../../../context/ThemeContext';


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

  const { toggle } = React.useContext(ThemeContext); 
  
  return (
    <div style={ toggle ? { background: 'black', color: 'white' } : {}}>
      <CharacterList loading={loading} characters={characters}/>
    </div>
  );

};

export default MainPage;
