import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import Product from '~/components/Product';
export default function ProductsAll({ data }) {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsInit = data.filter((item, index) => index < 8);
        setPage(Math.ceil(data.length / 8));
        setProducts(productsInit);
    }, [data]);

    const handlChangePaginate = (e, p) => {
        if (p === 1) {
            setProducts(() => {
                const products = data.filter((item, index) => index < 8);
                return products;
            });
        } else {
            const productsPaginate = data.filter((item, index) => {
                return (p - 1) * 8 <= index && index < p * 8;
            });
            setProducts(productsPaginate);
        }
    };

    return (
        <section className="py-6 bg-[#f1f2f2] my-0">
            <h2 className="text-center font-[800] text-[42px] leading-[52px] text-[#335154]">Products</h2>
            <div className="grid grid-cols-4 gap-8 px-8 my-8">
                {products.map((item) => {
                    return (
                        <Product key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
                    );
                })}
            </div>
            <div className="flex justify-center gap-3">
                <Pagination count={page} onChange={handlChangePaginate} />
            </div>
        </section>
    );
}
