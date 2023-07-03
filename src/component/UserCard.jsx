import "./UserCard.css";
export default function UserCard({ item }) {
  return (
    <div className="usercard">
      <img src={item.avatar_url} alt="thumbnail" />
      <div>{item.login}</div>
    </div>
  );
}
