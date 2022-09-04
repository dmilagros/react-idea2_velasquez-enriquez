import React from 'react'
import "./item.css"

const Item = ({ id, title, description, price, pictureUrl }) => {

	return (
		<div className="item">
			<h5>{title} - {id}</h5>
			<section>
				<img src={pictureUrl} alt={title} />
				<p>{description}</p>
				<button>Ver detalle del producto</button>
			</section>
				{price && <p>s/ {price}</p>}
		</div>
	)
}

export default Item