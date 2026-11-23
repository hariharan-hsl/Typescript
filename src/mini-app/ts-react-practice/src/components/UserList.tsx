import { useEffect, useState } from "react";
import type { User } from "../types";

const demo_api = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(demo_api);

        if (!response.ok) {
          throw new Error("Could not get users");
        }

        const usersFromServer: User[] = await response.json();
        setUsers(usersFromServer);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <p className="muted">Loading users…</p>;
  if (error) return <p className="error">Could not load users: {error}</p>;

  return (
    <ul className="user-list">
      {users.map((u) => (
        <li key={u.id}>
          <span className="user-name">{u.name}</span>
          <span className="muted">
            @{u.username} · {u.company.name}
          </span>
          <a href={`mailto:${u.email}`}>{u.email}</a>
        </li>
      ))}
    </ul>
  );
}
