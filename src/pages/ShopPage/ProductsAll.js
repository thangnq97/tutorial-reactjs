import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
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
                        <div key={item.id}>
                            <a href="#">
                                <img src={item.image} />
                            </a>
                            <a href="#">
                                <h3 className="text-[20px] font-[800] text-[#335154] mt-3 mb-2">{item.name}</h3>
                            </a>
                            <p className="text-[#df453e] font-[800] text-[20px] text-[df453e] tracking-[1.5px]">
                                ${item.price}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center gap-3">
                <Pagination count={page} onChange={handlChangePaginate} />
            </div>
        </section>
    );
}
