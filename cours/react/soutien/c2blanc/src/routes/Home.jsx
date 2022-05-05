import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';

const Home = () => {
    const [characterList, setCharacterList] = useState([])
    const [onlyStark, setOnlyStark] = useState(false);
    useEffect(() => {
        axios
        .get('https://thronesapi.com/api/v2/Characters')
        .then((result) => result.data)
        .then((data) => {
            setCharacterList(data)
        })
    }, [])
    
    return (
        <div>

            <button onClick={() => setOnlyStark(!onlyStark)} >Filtre STARK</button>
            {characterList<div>
                
            {characterList.map((char) => (
                <CharacterCard 
                key={char.id}
                id={char.id}
                fullname={char.fullName}
                family={char.family}
                title={char.title}/>
            ))}
            </div>   
        </div>
    );
};

export default Home;