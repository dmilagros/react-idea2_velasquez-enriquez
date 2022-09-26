import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import { useCartContext } from '../context/CartContext';
import { startReadDocFirebase } from '../firebase';
import ItemCount from './ItemCount';
import './itemDetail.css'

const ItemDetail = () => {
	const { id } = useParams() || {};
	const [item, setItem] = useState({})
	const { addItem } = useCartContext(); // Destructuring	

useEffect(() => {
	findById();
}, [])

const findById = async () => {
	const response = await startReadDocFirebase(id);
	setItem(response);
}

	return (
		<div className="item-detail">
			<div>
				<img src={item.pictureUrl} alt={item.name} />
			</div>
			<section className="section-detail">
				<h4>{item.name}</h4>
				
				<p>Descripción:</p>
				<p>{item.description}</p>
				
				<p>Precio: s/ {item.price}</p>
				
				<p>Cantidad:</p>
				<ItemCount stock={5} initial={1} onAdd={addItem} item={item} />
			</section>
		</div>
	)
}

export default ItemDetail