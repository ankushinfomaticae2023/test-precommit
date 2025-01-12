// Importing necessary hooks and functions
import { useEffect } from 'react';
import { fetchData, fetchKeyWorkds } from '../store';

// Defining functional component
function Hello () {
    // Using useEffect hook to call fetchData function when the component mounts
    useEffect(()=> {
        fetchData();
    }, [])

    // Using useEffect hook to call fetchKeyWorkds function when the component mounts
    useEffect(()=> {
        fetchKeyWorkds();
    }, [])

    // Rendering JSX
    return (
        <div>
            <p>hi</p>
        </div>
    )
}

export default Hello; // Exporting the component
