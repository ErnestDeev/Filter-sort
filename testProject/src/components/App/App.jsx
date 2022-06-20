import React, { useState, useEffect } from "react";
import UserList from "../UserList/UserList";
import data from "../../ForTable .json";

const filterUsers = (searchText, list) => {
  if (!searchText) {
    return list;
  }

  return list.filter(({ last_name }) =>
    last_name.toLowerCase().includes(searchText.toLowerCase())
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userList, setUserList] = useState(data);

  useEffect(() => {
    const filteredTime = setTimeout(() => {
      const filteredUsers = filterUsers(searchTerm, data);
      setUserList(filteredUsers);
    }, 300);

    return () => clearTimeout(filteredTime); // избавляемся от утечки памяти
  }, [searchTerm]);

  const sortUserHandler = (e) => {
    e.preventDefault();
    const newList = [
      ...userList.sort(function (a, b) {
        const afirstName = a.first_name.toLowerCase();
        const bfirstName = b.first_name.toLowerCase();
        if (afirstName < bfirstName) return -1;
        if (afirstName > bfirstName) return 1;
        return 0;
      }),
    ];
    setUserList(newList);
  };

  const sortUserHandlerLast = (e) => {
    e.preventDefault();
    const newList = [
      ...userList.sort(function (a, b) {
        const aLastName = a.last_name.toLowerCase();
        const bLastName = b.last_name.toLowerCase();
        if (aLastName < bLastName) return -1;
        if (aLastName > bLastName) return 1;
        return 0;
      }),
    ];
    setUserList(newList);
  };

  const userHandlerPay = (e) => {
    e.preventDefault();
    const payList = [...userList.filter(({ pay_status }) => pay_status)];
    setUserList(payList);
  };

  const userHandlerAll = (e) => {
    e.preventDefault();
    return setUserList(data);
  };

  return (
    <div className="container mx-auto font-mono">
      <div className="text-3xl text-center py-3">
        <p className="h3">Таблица пользователей</p>
      </div>
      <div className="flex justify-center flex-col align-middle">
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Поиск"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-100 text-stone-900 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 px-3 
          shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto"
        />

        <UserList userList={userList} />

        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={sortUserHandler}
          >
            Сортировать по имени
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={sortUserHandlerLast}
          >
            Сортировать по фамилии
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={userHandlerPay}
          >
            Отобразить только оплаченные{" "}
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={userHandlerAll}
          >
            Отобразить все
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
