import {useEffect} from 'react';

/* eslint max-params: 0 */

const defaultLoadTime = 500;

export const useService = (
    service,
    onLoad,
    onError,
    delay = defaultLoadTime,
    error = false
)=> {
  useEffect(()=> {
    service(delay, error)
      .load()
      .then((data)=> {
        onLoad(data);
      })
      .catch((err)=> {
        onError(err);
      });
  }, []);
};
