```jsx
import { useEffect } from 'react';
import { fetchData, fetchKeyWorkds } from '../store';

// Hello component responsible for fetching data and keywords
function Hello () {
    // useEffect hook to fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // useEffect hook to fetch keywords on component mount
    useEffect(() => {
        fetchKeyWorkds();
    }, []);

    return (
        <div>
            <p>hi</p>
        </div>
    )
}

export default Hello;
```
