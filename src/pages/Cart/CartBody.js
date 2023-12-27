import { useContext } from 'react';
import CartElement from '~/components/CartElement';
import { CartContext } from '~/context/CartContext';
export default function CartBody() {
    const { cart } = useContext(CartContext);

    return (
        <section className="flex flex-col gap-5 px-6 py-6">
            {cart.map((item) => {
                return (
                    <CartElement
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                    />
                );
            })}
        </section>
    );
}
