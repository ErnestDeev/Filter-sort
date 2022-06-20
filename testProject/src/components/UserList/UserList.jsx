import User from "../User/User";

const UserList = ({ userList }) => {
  return (
    <>
      <table class="table table-bordered border-dark" border="1">
        <tr border="1">
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Ник</th>
          <th scope="col">Электронная почта</th>
          <th score="col">Статус оплаты</th>
          <th scope="col">Сайт</th>
          <th scope="col"></th>
        </tr>
        {userList.map((user, index) => {
          return (
            <User
              key={index}
              lastName={user.last_name}
              firstName={user.first_name}
              userName={user.username}
              email={user.email}
              profile_link={user.profile_link}
              pay_status={user.pay_status}
            />
          );
        })}
      </table>
    </>
  );
};

export default UserList;
