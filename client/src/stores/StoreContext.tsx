import * as React from 'react';
import stores from './index';
import { Omit } from '../../../sdk/types';

type StoresMap = typeof stores;
const StoreContext = React.createContext(stores);

interface IProvider {
  stores: StoresMap;
  children: React.ReactElement<any>;
}
export const StoreProvider: React.FC<IProvider> = ({ stores, children }) => {
  return (
    <StoreContext.Provider
      value={stores}
      children={children}
    />
  );
};

export const injectStore = <T extends keyof StoresMap>(storeName: T) => {
  return <P extends Pick<StoresMap, T>>(
    Component: React.ComponentType<P>
  ) => {
    const withStore: React.FC<Omit<P, T>> = ({ ...props }) => (
      <StoreContext.Consumer>
        {
          (storesMap: StoresMap) => {
            const storeProp = { [storeName]: storesMap[storeName] };
            return <Component {...storeProp as any} {...props} />;
          }
        }
      </StoreContext.Consumer>
    );

    withStore.displayName = `WithStoreHoc(${Component.displayName || Component.name})`;

    return withStore;
  };
};
