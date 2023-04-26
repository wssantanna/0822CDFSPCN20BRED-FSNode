

function Item({ item }) {

    return (
        <li className="list-group-item">
            <input 
                className="form-check-input me-1" 
                type="checkbox" 
                value="" 
                id={item.titulo} 
            />
            <label 
                className="form-check-label" 
                htmlFor={item.titulo}
            >
                {item.titulo}
            </label>
        </li>
    )
}

export default Item