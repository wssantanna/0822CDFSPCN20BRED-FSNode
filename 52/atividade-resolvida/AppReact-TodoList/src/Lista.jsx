import Item from "./Item"

function Lista({ titulo }) {

    return (
        <section className="py-5">
            <h2 className="h5 mb-4">{titulo}</h2>
            <ul className="list-group" data-todo-target="list">
                <Item />
            </ul>
        </section>        
    )
}

export default Lista