function User({ user }) {
  return (
    <span className="user">
      <span className="name">{user}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

export default User;
