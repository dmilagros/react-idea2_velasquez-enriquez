import React, { useState } from 'react'
import Item from './Item'

import "./itemList.css";

const ItemList = ({ items }) => {
	const [iItemsProducts, setItemsProducts] = useState([])

	const products = new Promise ((resolve, reject) => {
		setTimeout(() => {
			resolve(items)
			}, 2000)
		})

		products.then((itemsProduct) => {
			setItemsProducts(itemsProduct)
			
		}
	)

	return (
		<div className="item-list">
			{iItemsProducts.map((item) => <Item key={item.id} {...item} />)}
		</div>
	)
}

export default ItemList