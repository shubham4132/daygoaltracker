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
      <Form />
      <WorkList />
      <Footer />
    </div>
  );
}

function Logo() {
  return <h1>🎫DAY GOAL TRACKER🧐</h1>;
}
function Form() {
  return (
    <div className="form-add">
      <h3>Whats Your Goal Today</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="whats your today Goal"></input>
      <button>ADD</button>
    </div>
  );
}
function WorkList() {
  return (
    <div className="list">
      <ul>
        {initialItem.map((item) => (
          <Item itemOb={item} />
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
    <div className="goalstats">
      <h3>You have X goal in Your Today list and You already did X(X%)</h3>
    </div>
  );
}
