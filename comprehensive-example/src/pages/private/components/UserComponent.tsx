import { User } from "../../../types/global";

interface UserComponentPropsType extends User {}

const UserComponent = ({
  name,
  username,
  email,
  phone,
}: UserComponentPropsType) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};
export default UserComponent;
