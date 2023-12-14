import { useState } from "react";

export default function App() {
  const [work, setWork] = useState([]);
  function handleAddWork(works) {
    setWork((work) => [...work, works]);
  }
  function handleDeleteWork(id) {
    setWork((work) => work.filter((item) => item.id !== id));
  }
  function handleToggleWork(id) {
    setWork((work) =>
      work.map((works) =>
        works.id === id ? { ...works, progress: !works.progress } : works
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <GoalForm onAddWork={handleAddWork} />
      <WorkList
        work={work}
        onDeleteWork={handleDeleteWork}
        onToggleItem={handleToggleWork}
      />
      <Footer />
    </div>
  );
}

function Logo() {
  return <h1>🎫DAY GOAL TRACKER🧐</h1>;
}
function GoalForm({ onAddWork }) {
  const [hour, setHour] = useState(1);
  const [worktype, setWorktype] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newWork = { id: Date.now(), hour, worktype, progress: false };
    console.log(newWork);
    onAddWork(newWork);
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
function WorkList({ work, onDeleteWork, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {work.map((item) => (
          <Item
            itemOb={item}
            key={item.id}
            onDeleteWork={onDeleteWork}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ itemOb, onDeleteWork, onToggleItem }) {
  return (
    <li>
      <input
        type="checkBox"
        value={itemOb}
        onChange={(e) => onToggleItem(itemOb.id)}
      />
      <span style={itemOb.progress ? { textDecoration: "line-through" } : {}}>
        {itemOb.hour}hr {itemOb.worktype}
      </span>
      <button onClick={(e) => onDeleteWork(itemOb.id)}>❌</button>
    </li>
  );
}
function Footer() {
  return (
    <footer className="goalstats">
      <h3>You have X goal in Your Today list and You already did X(X%)</h3>
    </footer>
  );
}
