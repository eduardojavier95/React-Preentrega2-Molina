import { FaPlus } from 'react-icons/fa';

function ItemDetail({ item }) {
    return (
        <section className='flex flex-auto items-center justify-center h-screen'>
            <div className='mr-10'>
                <img src={item.image} alt={item.title} className="object-contain aspect-square w-[640px] h-[640px]" />
            </div>

            <div className='w-[400px] flex flex-col'>
                <header className="text-4xl font-bold">{item.title}</header>
                <button className="flex items-center justify-center bg-blue-600 text-white font-medium rounded-full p-3 mt-4">
                    <FaPlus className="mr-1"></FaPlus> Add</button>
                <div className="h-3 mt-3"></div>
                <span className="text-green-700 font-bold">${item.price}</span>
                <p className=''>{item.description}</p>
            </div>

        </section>
    );
}

export default ItemDetail;