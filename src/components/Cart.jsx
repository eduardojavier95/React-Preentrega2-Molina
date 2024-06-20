import { MdShoppingCart } from 'react-icons/md';

function Cart({ cartItemCount }) {
    const preventBehavior = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <a href="/cart" className="pl-4 inline-block" onClick={preventBehavior}>
                <MdShoppingCart className="text-xl" />
                {cartItemCount > 0 && (
                    <span className="absolute top-2 right-16 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1 min-w-8 h-6 flex items-center justify-center">
                        {cartItemCount}
                    </span>
                )}
            </a>
        </>
    );

}

export default Cart;