import Lista from "./Lista"

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
            <article className="pt-5 pb-2">
                <h1 className="h1">Todo List</h1>
            </article>
        </div>
        <div className="row g-3">
            <div className="col">
                <label 
                    className="visually-hidden" 
                    htmlFor="AddTaskInput"
                >
                    Add Task
                </label>
                <input 
                    className="form-control form-control-lg" 
                    id="AddTaskInput"
                    type="text" 
                    placeholder="Add Task..." 
                    aria-label="Add Task..."
                    data-todo-target="input-task"
                />
            </div>
            <div className="col-auto">
                <button 
                    className="btn btn-lg btn-primary"
                    data-todo-target="add"
                >
                    +
                </button>
            </div>
        </div>
        <div className="row g-3">
            <div className="col">
                <Lista titulo="My tasks" />
            </div>
        </div>
    </div>
    </>
  )
}

export default App
