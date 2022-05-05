import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';


const Characters = () => {
    const { id } = useParams();
    const [characId, setCharacId] = useState([]);
    useEffect(() => {
        axios
        .get(`https://thronesapi.com/api/v2/Characters/${id}`)
        .then((result) => result.data)
        .then((data) => {
            setCharacId(data)
        })
    })
    return (
        <div>
            <h1>{characId.fullName}</h1>
            <h2>{characId.title}</h2>
            <h3>{characId.family}</h3>
            <img src={characId.imageUrl} alt={characId.fullName} />
        </div>
    );
};

export default Characters;