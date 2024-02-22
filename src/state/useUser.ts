import {useEffect} from 'react';
import useSWR from 'swr';
import {API_VERSION} from '@env';
import {userFetcher} from 'helpers/api';

export function useUser(options) {
    const {data, mutate, error} = useSWR(
      `/users/${API_VERSION}/user`,
      userFetcher,
      options,
    );
  
    const loading = typeof data === 'undefined' && !error;
  
    useEffect(() => {
      if (data) {
        // do something with the user
      }
    }, [data]);
  
    return {
      loading,
      user: data,
      mutate,
    };
  }
  