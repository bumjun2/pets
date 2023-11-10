// ContextProvider.js (ContextProvider 컴포넌트를 별도의 파일로 분리)

import React, {createContext, useState} from 'react';

const Context = createContext();
const {Provider, Consumer} = Context;

function ContextProvider({children}) {
  const [data, setData] = useState([]);
  const [on, setOn] = useState([]);

  return <Provider value={{data, setData, on, setOn}}>{children}</Provider>;
}
export default Context;
export {ContextProvider, Consumer as ContextConsumer};
