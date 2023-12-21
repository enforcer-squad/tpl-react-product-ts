import type { FC } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import type { User } from '@/services/types/user';
import { useCheckLogin } from '@/services/userService';
import routes from './config';

interface PropTypes {
  auth: User | undefined;
}

const Routes: FC<PropTypes> = ({ auth = {} }) => {
  const routing = useRoutes(routes(auth));
  return routing;
};

const Router = () => {
  const { loading, error, data } = useCheckLogin();
  console.log('data', loading, error, data);

  return (
    <BrowserRouter>
      <Routes auth={data?.data} />
    </BrowserRouter>
  );
};
export default Router;
