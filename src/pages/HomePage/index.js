import Banner from '~/components/Banner';
import Subcribe from './Subcribe';
import ProductsNew from './ProductsNew';
import HomeContact from './HomeContact';
import { useFetch } from '~/hooks/useFetch';
import Loading from '~/components/Loading';

export default function HomePage() {
    const apiUrl = 'http://localhost:3000/products';
    const { data, isLoading, error } = useFetch(apiUrl);

    if (error) {
        return <p className="font-semibold text-xl">{error}</p>;
    }

    return (
        <>
            <Banner />
            <Subcribe />
            {isLoading ? (
                <div className="font-semibold text-xl text-center text-red-500 py-32 bg-[#f1f2f2] flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <ProductsNew data={data} />
            )}
            <HomeContact />
        </>
    );
}
