// ContextProvider.js (ContextProvider 컴포넌트를 별도의 파일로 분리)

import React, {createContext, useState} from 'react';

const Context = createContext();
const {Provider, Consumer} = Context;

function ContextProvider({children}) {
  const [data, setData] = useState([]);
  const [login, setLogin] = useState(false);

  return <Provider value={{data, setData}}>{children}</Provider>;
}
export default Context;
export {ContextProvider, Consumer as ContextConsumer};
