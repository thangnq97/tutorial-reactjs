import BannerPath from '~/components/BannerPath';
import { useParams } from 'react-router-dom';
import { useFetch } from '~/hooks/useFetch';
import Loading from '~/components/Loading';
import { InputNumber } from 'antd';
import { useContext, useState } from 'react';
import { CartContext } from '~/context/CartContext';

export default function ProductDetail() {
    const apiUrl = 'http://localhost:3000/products';
    const { cart, setCart } = useContext(CartContext);
    const [number, setNumber] = useState(1);
    const { productId } = useParams();
    const { data, isLoading, error } = useFetch(`${apiUrl}/${productId}`);
    let { image } = data;
    image = '../../' + image;

    if (error) {
        return <p>Opps...có lỗi xảy ra rồi!</p>;
    }

    const handleAddCart = () => {
        let cartUpdate = [];
        let check = false;
        cartUpdate = cart.map((item) => {
            if (item.id === data.id) {
                check = true;
                return { ...item, quantity: item.quantity + number };
            } else {
                return { ...item };
            }
        });

        if (check) {
            setCart(cartUpdate);
            return;
        }

        setCart((prev) => {
            return [...prev, { ...data, quantity: number }];
        });
    };

    const handleChangeNumber = (value) => {
        setNumber(value);
    };
    return (
        <>
            <BannerPath path="Product detail" />
            <main className="bg-[#f0f2f2] grid grid-cols-2 px-[50px] py-[69px]">
                <div>{isLoading ? <Loading /> : <img src={image} />}</div>
                <div className="py-5 px-4 flex flex-col gap-[50px] justify-center">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className="flex flex-col gap-[22px]">
                            <h3 className="text-[43px] font-[700] tracking-[1.5px] text-[#1b3e41]">{data.name}</h3>
                            <p className="text-[16px] font-[400] leading-[24px] text-[#393939] ">{data.description}</p>
                        </div>
                    )}
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex gap-5 items-center">
                            <div className="flex gap-3">
                                <InputNumber min={1} max={100} defaultValue={1} onChange={handleChangeNumber} />
                            </div>
                            <div>
                                <button
                                    onClick={handleAddCart}
                                    type="submit"
                                    className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded"
                                >
                                    Đặt hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
