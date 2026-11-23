import Card from "./components/Card";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import UserList from "./components/UserList";
import Button from "./components/Button";

export default function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>TypeScript + React practice</h1>
        <p className="muted">Typed props, state, events, children and effects in one small app.</p>
      </header>

      <div className="grid">
        <Card title="Counter · useState<number>">
          <Counter />
        </Card>

        <Card title="Form · ChangeEvent + FormEvent">
          <NameForm />
        </Card>

        <Card title="Button variants">
          <div className="row">
            <Button label="Primary" onClick={() => alert("Primary clicked")} />
            <Button label="Secondary" variant="secondary" onClick={() => alert("Secondary clicked")} />
          </div>
        </Card>

        <Card title="Users · useEffect + useState<User[]>">
          <UserList />
        </Card>
      </div>
    </main>
  );
}
