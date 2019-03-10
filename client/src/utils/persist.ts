
// function persistFullState<T extends object>(
//   key: string,
//   partialState: Partial<T>,
//   store: any
// ) {
//   const fullState = { ...store.state as object, ...partialState as object };
//   localStorage.setItem(key, JSON.stringify(fullState));
// }

// function persistPartialState(
//   key: string,
//   partialState: Record<string, string>,
//   stateKeys: string[]
// ) {
//   const toPersist: Record<string, string> = {};
//   stateKeys.forEach((k: any) => (toPersist[k] = partialState[k]));
//   localStorage.setItem(key, JSON.stringify(toPersist));
// }

// function getPersistedState<T extends object>(key: string, store: any) {
//   const savedJson = localStorage.getItem(key);
//   const savedData = savedJson ? JSON.parse(savedJson) : null;

//   return savedData ? { ...store.state as object, ...savedData as object } : store.state;
// }

// function persist<T extends any>(
//   key: string,
//   store: T,
//   // stateKeys?: string[]
// ): T {
//   // store.state =
//   //   stateKeys
//   //     ? persistPartialState(key, store.state, stateKeys)
//   //     : persistFullState(key, store.state, store);

//   store.state = getPersistedState(key, store);

//   return store;
// }

// export default persist;
