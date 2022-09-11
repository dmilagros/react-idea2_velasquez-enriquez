import React from 'react'
import { Link } from "react-router-dom"
import "./item.css"

const Item = ({ id, name, description, price, pictureUrl }) => {

	return (
		<div className="item">
			<h5>{name} - {id}</h5>
			<section>
				<img src={pictureUrl} alt={name} />
				<p>{description}</p>
				<Link to={`/item/${id}`}>
					<button>Ver detalle del producto</button>
				</Link>
			</section>
				{price && <p>s/ {price}</p>}
		</div>
	)
}

export default Item