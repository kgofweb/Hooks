import { useState, useEffect } from 'react';

// url a appelé
const useFetch = (url) => {
  const [state, setState] = useState({
    items: [],
    loading: true
  });

  useEffect(() => {
    // Auto appel
    (async () => {
      const response = await fetch(url);
      const responseData = await response.json();

      if(response.ok) {
        setState({
          items: responseData,
          loading: false
        })
      } else {
        alert(JSON.stringify(responseData));
        
        setState({
          items: [],
          loading: false
        });
        // setState(s => ({ ...s, loading: false }));
      }
    })();
  }, [url]);

  return [
    state.items,
    state.loading
  ];
}

export default useFetch;