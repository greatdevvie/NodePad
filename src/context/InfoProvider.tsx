import { useState } from "react";
import MainContext from "./MainContext";
import { PropsWithChildren } from "react";

const infos = {
    header: '',
    body: '',
}

const InfoProvider = ({ children }: PropsWithChildren) => {
  const [infot, setInfot] = useState('');

  const setHeader = () => setInfot(infos.header);

  const setBody = () => setInfot(infos.body);

  // Передаем данные и функции в контекст провайдера
  return (
    <MainContext.Provider value={{ infot, setHeader, setBody, infos }}>
      {children}
    </MainContext.Provider>
  );
};

export default InfoProvider;