const user = {
  firstname: "Jabran",
  lastname: "Pasha",
  age: 19
};

function getUserInfo() {
  return (
    <ul>
      <li>First: {user.firstname}</li>
      <li>Last: {user.lastname}</li>
      <li>Age: {user.age}</li>
     </ul>);
}

export default getUserInfo;