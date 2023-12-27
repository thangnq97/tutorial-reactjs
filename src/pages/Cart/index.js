import BannerPath from '~/components/BannerPath';
import CartBody from './CartBody';
import CartOder from './CartOder';

export default function Cart() {
    return (
        <>
            <BannerPath path="Shopping cart" />
            <main className="grid grid-cols-2 gap-8 px-7">
                <CartBody />
                <CartOder />
            </main>
        </>
    );
}
