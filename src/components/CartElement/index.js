import { useState, useContext, useEffect } from 'react';
import { CartContext } from '~/context/CartContext';
import { Button, InputNumber, Flex } from 'antd';

export default function CartElement({ id, image, name, price, quantity }) {
    const { cart, setCart } = useContext(CartContext);
    const [number, setNumber] = useState(quantity);

    const handleChangeNumber = (value) => {
        setNumber(value);
    };

    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });

            if (quantity !== number) {
                let cartUpdate = [];
                cartUpdate = cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: number };
                    } else {
                        return item;
                    }
                });

                setCart(cartUpdate);
            }
        }, 2000);
    };

    const handleRemoveCartElement = () => {
        const cartUpdate = cart.filter((item) => item.id !== id);
        setCart(cartUpdate);
    };

    return (
        <div className="grid grid-cols-4 border-b">
            <a href="">
                <img src={image} />
            </a>
            <div className="col-span-3 flex flex-col justify-center ">
                <h4 className="text-[14px] font-[600] text-[#335154] mt-3 mb-2">{name}</h4>
                <div className=" flex justify-between">
                    <p className="text-[#df453e] font-[600] text-[12px] text-[df453e] tracking-[1.5px]">{price}</p>
                    <div className="flex items-center gap-2">
                        <InputNumber
                            style={{ width: '55px' }}
                            min={1}
                            max={100}
                            defaultValue={quantity}
                            onChange={handleChangeNumber}
                        />
                        <Flex gap="small">
                            <Flex gap="small" wrap="wrap">
                                <Button
                                    style={{ backgroundColor: '#4096ff' }}
                                    type="primary"
                                    loading={loadings[0]}
                                    onClick={() => enterLoading(0)}
                                >
                                    Update
                                </Button>
                                <Button type="primary" danger onClick={handleRemoveCartElement}>
                                    x
                                </Button>
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </div>
        </div>
    );
}
