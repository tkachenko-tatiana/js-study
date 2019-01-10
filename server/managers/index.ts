import { Container } from 'inversify';
import { container } from '../inversify.config';
import { IUserSession } from '../../sdk/models/User';

const managerFactory = (user: IUserSession | null) => {
  const childContainer = new Container({ skipBaseClassChecks: true });
  childContainer.parent = container;
  childContainer.bind<IUserSession | null>('Session').toConstantValue(user);

  return <T extends any>(manager: new (...args: any[]) => T) => {
    return childContainer.get<T>(manager);
  };
};

export default managerFactory;
