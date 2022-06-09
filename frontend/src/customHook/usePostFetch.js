import { useState, useEffect } from "react";

const usePostFetch = (url,bodyData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url,
        {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
          })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url,bodyData]);

  return data;
};   

export default usePostFetch;