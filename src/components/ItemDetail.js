import React from 'react'
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import './itemDetail.css'

const ItemDetail = ({ item }) => {
	const { addItem } = useCartContext();
	const { id, name, description, price, pictureUrl } = item; // Destructuring	

	if(!name) {
		return <p>Loading...</p>
	} 

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
				<ItemCount stock={5} initial={1} onAdd={addItem} item={{id, name, description, price, pictureUrl}} />
			</section>
		</div>
	)
}

export default ItemDetail