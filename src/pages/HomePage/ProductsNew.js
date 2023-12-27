// import { Pagination } from '@mui/material';
// import { useEffect, useState } from 'react';

import Product from '~/components/Product';

export default function ProductsNew({ data }) {
    const products = data.filter((item, index) => index < 8);
    // const [page, setPage] = useState(0);

    // useEffect(() => {
    //     setPage(Math.ceil(data.length / 8));
    // }, [data]);
    return (
        <section className="bg-[#f1f2f2] py-[80px]">
            <h2 className="text-center font-[800] text-[42px] leading-[52px] text-[#335154]">
                Discover our new arrivals
            </h2>
            <div className="grid grid-cols-4 gap-8 px-8 my-8">
                {products.map((item) => {
                    return (
                        <Product key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
                    );
                })}
            </div>
            <div className="flex justify-center">
                {/* <Pagination count={page} /> */}
                <button className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded">
                    View Other Products
                </button>
            </div>
        </section>
    );
}
