import React from 'react'
import "./item.css"

const Item = ({ id, title, description, price, pictureUrl }) => {
console.log('id', id)
	/* id, title, , price, pictureUrl */
	return (
		<div className="item">
			<h4>{title} + {id}</h4>
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