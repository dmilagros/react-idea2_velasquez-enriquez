import React, { useEffect, useState } from 'react'
import { startListProducts } from '../firebase';
import Item from './Item'

import "./itemList.css";

const ItemList = () => {
	const [iItemsProducts, setItemsProducts] = useState([])

	useEffect(() => {
		listProducts();
	}, [])
	
	const listProducts = async () => {
		try {
			const allProducts = await startListProducts();
			setItemsProducts(allProducts)
		} catch (error) {
			console.log("message error", error)
		}
	}

	return (
		<div className="item-list">
			{iItemsProducts.map((item, index) => <Item key={index} {...item} />)}
		</div>
	)
}

export default ItemList
