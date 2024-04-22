import "./styles.css"

export default function App() {
  return <form className="new-item-form">
    <>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <l1>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </l1>
        <l1>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </l1>
      </ul>
    </>
  </form>
} 

