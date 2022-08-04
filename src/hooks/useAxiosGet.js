import { useState, useEffect } from "react";

import axios from "axios";

export const useAxiosGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);

      try {
        const res = await axios.get(url);

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.data;

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not fetch the data");
        console.log(err.message);
      }
    };

    getData();
  }, [url]);

  return { data, isPending, error };
};
