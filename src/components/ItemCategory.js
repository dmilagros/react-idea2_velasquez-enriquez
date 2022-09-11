import React from 'react'
import ItemCount from './ItemCount';
import './itemDetail.css'

const ItemCategory = ({ item }) => {
	const { name } = item; // Destructuring

	if(!name) {
		return <p>Loading...</p>
	} else
	return (
		<h5>Categoría: {name}</h5>
	)
}

export default ItemCategory