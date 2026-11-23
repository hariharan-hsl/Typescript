import { useState } from "react";
import Button from "./Button";

export default function NameForm() {
  const [name, setName] = useState<string>("");
  const [submittedNames, setSubmittedNames] = useState<string[]>([]);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setSubmittedNames((prev) => [trimmed, ...prev]);
    setName("");
  };

  return (
    <div className="stack">
      <form onSubmit={handleSubmit} className="row">
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Type a name"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary" disabled={!name.trim()}>
          Add name
        </button>
      </form>

      <p className="muted">
        Live value: <strong>{name || "(empty)"}</strong>
      </p>

      {submittedNames.length === 0 ? (
        <p className="muted">No names yet. Add one above.</p>
      ) : (
        <>
          <ul className="plain-list">
            {submittedNames.map((n, i) => (
              <li key={`${n}-${i}`}>{n}</li>
            ))}
          </ul>
          <Button label="Clear list" variant="secondary" onClick={() => setSubmittedNames([])} />
        </>
      )}
    </div>
  );
}
