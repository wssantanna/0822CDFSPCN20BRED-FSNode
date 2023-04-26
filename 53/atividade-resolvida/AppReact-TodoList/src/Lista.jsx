import Item from "./Item"

function Lista({ titulo, items }) {

    return (
        <section className="py-5">
            <h2 className="h5 mb-4">{titulo}</h2>
            <ul className="list-group" data-todo-target="list">
                {items.map(function(item, indice) {
                    return <Item key={indice} item={item} />
                })}
            </ul>
        </section>        
    )
}

export default Lista