import { useEffect, useState } from "react";

const useQuery = (url: string) => {
  const [state, setState] = useState<{
    data: unknown[];
    loading: boolean;
    isSuccess: boolean;
    status: number;
    error: unknown;
  }>({
    data: [],
    status: 0,
    isSuccess: false,
    loading: true,
    error: null
  });

  useEffect(() => {
    console.log("pase por aqui");
    fetch(url)
      .then(async (response) => {
        return {
          ...state,
          status: response.status,
          isSuccess: response.ok,
          data: await response.json()
        };
      })
      .then((data) => {
        setState({
          ...data
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error,
          loading: false
        });
      });
  }, []);

  return state;
};

export default useQuery;
