import { useState, useEffect } from 'react'
import axios from 'axios';


export default function LandingPage() {
    const [result, setResult] = useState([])
    const [query, setQuery] = useState('');

    async function handleInput(e) {
        const newQuery = e.target.value;
        console.log(newQuery)
        setQuery(newQuery)
        try {
            const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${query}`)
            console.log(response.data)
            setResult(response.data[1])
        } catch (error) {
            console.error("Error fetching the products:", error);
        }
    }

    function handleClick(e){
        setQuery(e.target.value)
        setResult([]);
    }

    return (
        <>
            <input
                type="text"
                value={query}
                onChange={handleInput}
                placeholder="Search Wikipedia..." />
            {result && result.map((val, index) => (
                <ol key={index}
                value={val}
                 onClick={() => handleClick(val)}
                 style={{ cursor: 'pointer' }}>{val}</ol>
            ))}
        </>
    )
}