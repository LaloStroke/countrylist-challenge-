import { useState } from "react";
import Dto from "../dto";

const useMutation = (dtoKey?: DTOS) => {
  const [state, setState] = useState<{
    data: any;
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

  const fetchData = (url: string) =>
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
        if (dtoKey) {
          const dto = Dto.get(dtoKey);
          if (dto) {
            data.data = new dto(data.data);
          }
        }
        setState({
          ...data,
          loading: false
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error,
          loading: false
        });
      });

  return {
    ...state,
    fetchData
  };
};

export default useMutation;
