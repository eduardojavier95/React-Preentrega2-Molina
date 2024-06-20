import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


function ItemListContainer() {

    // States
    const [items, setItems] = useState([]);

    // Params
    let { category } = useParams();
    const headerName = category ? `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products';

    // Effects
    useEffect(
        () => {
            // Fetch data
            if (category) {
                fetch(`https://fakestoreapi.com/products/category/${category}`)
                    .then(response => response.json())
                    .then(data => setItems(data));
                return;
            } else {
                fetch('https://fakestoreapi.com/products')
                    .then(response => response.json())
                    .then(data => setItems(data));
            }
        }
        , [headerName]
    );


    return (
        <section className="min-h-[80vh]">
            <header className="text-4xl font-bold">{headerName}</header>
            <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {items.map(item => (
                    <Link key={item.id} to={`/products/detail/${item.id}`}>
                        <article key={item.id} className="bg-white p-4">
                            <img src={item.image} alt={item.title} className="object-contain aspect-square" />
                            <button className="flex items-center justify-center bg-blue-600 text-white font-medium rounded-full p-3 mt-4">
                                <FaPlus className="mr-1"></FaPlus> Add</button>
                            <div className="h-3 mt-3"></div>
                            <span className="text-green-700 font-bold">${item.price}</span>
                            <h2 className="relative w-full flex-none mb-2 text-gray-600">{item.title}</h2>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ItemListContainer;