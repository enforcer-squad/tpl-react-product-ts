import type { FC } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
// import { useCheckLogin } from '@/services/user.ts';
import routes from './config';
import { useModel, useWatch } from '@enforcer-squad/rex';
import userModel from '@/store/user';

interface PropTypes {
  role: number | undefined;
}

const Routes: FC<PropTypes> = ({ role }) => {
  const routing = useRoutes(routes(role));
  return routing;
};

const Router = () => {
  const { role, check } = useModel(userModel);

  useWatch(() => {
    check();
  }, []);

  return (
    <BrowserRouter>
      <Routes role={role} />
    </BrowserRouter>
  );
};
export default Router;
