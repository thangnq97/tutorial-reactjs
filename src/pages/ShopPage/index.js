import BannerPath from '~/components/BannerPath';
import { useFetch } from '~/hooks/useFetch';
import ProductsAll from './ProductsAll';
import Loading from '~/components/Loading';

export default function ShopPage() {
    const apiUrl = 'http://localhost:3000/products';
    const { data, isLoading, error } = useFetch(apiUrl);

    if (error) {
        return <p className="font-semibold text-xl">{error}</p>;
    }

    return (
        <>
            <BannerPath path="Shop Fullwidth" />
            {isLoading ? (
                <div className="font-semibold text-xl text-center text-red-500 py-32 bg-[#f1f2f2] flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <ProductsAll data={data} />
            )}
        </>
    );
}
