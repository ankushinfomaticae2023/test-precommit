```jsx
import { useEffect } from 'react';
import { fetchData, fetchKeyWorkds } from '../store';

// Hello component fetches data and keywords from the store
function Hello () {

    // Fetch data from the store when the component is mounted
    useEffect(()=> {
        fetchData();
    }, [])

    // Fetch keywords from the store when the component is mounted
    useEffect(()=> {
        fetchKeyWorkds();
    }, [])

    return (
        // Display a simple greeting message
        <div>
            <p>hi</p>
        </div>
    )
}

export default Hello; // Export the Hello component to be used in other parts of the application
```
