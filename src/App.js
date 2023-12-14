import { useState } from "react";

const initialItem = [
  { id: 1, worktype: "Operating", hour: 2, progress: false },
  { id: 2, worktype: "Algorithims", hour: 3, progress: false },
  { id: 3, worktype: "ArtificialIntelligence", hour: 2, progress: false },
  { id: 4, worktype: "CyberSecurity", hour: 1, progress: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <GoalForm />
      <WorkList />
      <Footer />
    </div>
  );
}

function Logo() {
  return <h1>🎫DAY GOAL TRACKER🧐</h1>;
}
function GoalForm() {
  const [hour, setHour] = useState(1);
  const [worktype, setWorktype] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: Date.now(), hour, worktype, progress: false };
    console.log(newItem);
  }
  return (
    <form className="form-add" onSubmit={handleSubmit}>
      <h3>Whats Your Goal Today</h3>
      <select value={hour} onChange={(e) => setHour(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={worktype}
        onChange={(e) => setWorktype(e.target.value)}
        placeholder="whats your today Goal"
      ></input>
      <button>ADD</button>
    </form>
  );
}
function WorkList() {
  return (
    <div className="list">
      <ul>
        {initialItem.map((item) => (
          <Item itemOb={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ itemOb }) {
  return <li>{itemOb.worktype}</li>;
}
function Footer() {
  return (
    <footer className="goalstats">
      <h3>You have X goal in Your Today list and You already did X(X%)</h3>
    </footer>
  );
}
