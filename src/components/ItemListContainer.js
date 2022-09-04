import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {

	const items = [
		{
			id: 1,
			title: "Remera",
			description: "Remera de algodon",
			price: 100,
			pictureUrl: "https://www.mercadolibre.com.ar/jms/mla/lgz/msl/slideshow/MLA-885226-MLA31061611967_062019-F.jpg"
		},
		{
			id: 2,
			title: "Remera",
			description: "Remera de algodon",
			price: 100,
			pictureUrl: "https://www.mercadolibre.com.ar/jms/mla/lgz/msl/slideshow/MLA-885226-MLA31061611967_062019-F.jpg"
		},
		{
			id: 3,
			title: "Remera",
			description: "Remera de algodon",
			price: 100,
			pictureUrl: "https://www.mercadolibre.com.ar/jms/mla/lgz/msl/slideshow/MLA-885226-MLA31061611967_062019-F.jpg"
		},
		{
			id: 4,
			title: "Remera",
			description: "Remera de algodon",
			price: 100,
			pictureUrl: "https://www.mercadolibre.com.ar/jms/mla/lgz/msl/slideshow/MLA-885226-MLA31061611967_062019-F.jpg"
		},
		{
			id: 5,
			title: "Remera",
			description: "Remera de algodon",
			price: 100,
			pictureUrl: "https://www.mercadolibre.com.ar/jms/mla/lgz/msl/slideshow/MLA-885226-MLA31061611967_062019-F.jpg"
		},
		{
			id: 6,
			title: "Remera",
			description: "Remera de algodon",
			price: 100,
			pictureUrl: "https://www.mercadolibre.com.ar/jms/mla/lgz/msl/slideshow/MLA-885226-MLA31061611967_062019-F.jpg"
		}
	]
  return (
    <div>
      <p>{greeting}</p>

      <ItemCount stock={5} initial={1} />
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
