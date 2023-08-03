import styles from './UsersList.module.css';
import Card from '../UI/Card/Card';

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.usersList.map((user) => {
          return (
            <li key={user.id}>
              {`${user.username} (${user.age} years old) `}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
