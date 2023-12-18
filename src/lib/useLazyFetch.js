import { useState } from "react";

export default function useGetParts(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const json = await res.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
}
