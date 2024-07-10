import { useState } from "react";
import MainContext from "./MainContext";
import { PropsWithChildren } from "react";

const infos = {
    header: '',
    body: '',
}

/* Необходимо попробовать метод useContext как хранилище для переменных, которые, в последствии, можно будет перенести уже в БД.
    Помимо этого, нужно изучить принцип работы Dexie и понять, насколько совместимы Dexie и useContext.

    После этого, нужно составить Авторизационную страницу.
*/

const InfoProvider = ({ children }: PropsWithChildren) => {
  const [infot, setInfot] = useState('');

  const setHeader = () => setInfot(infos.header);

  const setBody = () => setInfot(infos.body);

  return (
    <MainContext.Provider value={{ infot, setHeader, setBody, infos }}>
      {children}
    </MainContext.Provider>
  );
};

export default InfoProvider;