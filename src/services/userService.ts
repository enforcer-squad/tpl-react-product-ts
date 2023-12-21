import { useQuery, useMutation, setData } from '@enforcer-squad/uss';
import { login, logout, checkLogin } from '@/services/api/user';

export const USER_CACHE_KEY = ['user'];

const useLogin = () => {
  return useMutation(login, {
    onSuccess: (data: any) => {
      setData(USER_CACHE_KEY, data);
    },
  });
};

const useCheckLogin = () => useQuery(USER_CACHE_KEY, checkLogin, { params: [] });

const useLogout = () => {
  return useQuery(USER_CACHE_KEY, logout, {
    manual: true,
    onSuccess: () => {
      setData(USER_CACHE_KEY, undefined);
    },
  });
};

export { useLogin, useCheckLogin, useLogout };
