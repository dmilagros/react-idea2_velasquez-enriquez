import React from 'react'
import ItemCount from './ItemCount';
import './itemDetail.css'

const ItemDetail = ({ item }) => {
	const { name, description, price, pictureUrl } = item; // Destructuring

	if(!name) {
		return <p>Loading...</p>
	} else
	return (
		<div className="item-detail">
			<div>
				<img src={pictureUrl} alt={name} />
			</div>
			<section className="section-detail">
				<h4>{name}</h4>
				
				<p>Descripción:</p>
				<p>{description}</p>
				
				<p>Precio: s/ {price}</p>
				
				<p>Cantidad:</p>
				<ItemCount stock={5} initial={1} />
			</section>
		</div>
	)
}

export default ItemDetail