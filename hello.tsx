```jsx
import { useEffect } from 'react';
import { fetchData, fetchKeyWorkds } from '../store';

// Hello component fetches data and keywords on initial render
function Hello () {

    // Fetches data on initial render
    useEffect(()=> {
        fetchData();
    }, [])

    // Fetches keywords on initial render
    useEffect(()=> {
        fetchKeyWorkds();
    }, [])

    // Renders a paragraph with content 'hi'
    return (
        <div>
            <p>hi</p>
        </div>
    )
}
export default Hello;
```
