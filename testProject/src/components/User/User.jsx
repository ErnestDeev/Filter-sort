const User = ({
  id,
  firstName,
  lastName,
  userName,
  email,
  profile_link,
  pay_status,
}) => {
  return (
    <tr>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{pay_status ? "Выполнено" : "Не выполнено"}</td>
      <td>
        {profile_link === "" ? (
          " "
        ) : (
          <a className="italic" href={profile_link}>
            Перейти на сайт пользователя
          </a>
        )}
      </td>
    </tr>
  );
};

export default User;
