import { CartContext } from '~/context/CartContext';
import { useContext } from 'react';

export default function CartOder() {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((a, b) => {
        return a + b.price * b.quantity;
    }, 0);

    return (
        <section className="border-l px-6 py-6">
            <h3 className="text-center text-[24px] font-[600] uppercase mb-5">Tóm tắt đơn hàng</h3>
            <div className="flex justify-between mb-3">
                <p className="text-[14px] font-[600]">Tổng giá trị sản phẩm:</p>
                <p className="text-[#df453e] font-[600] text-[12px] text-[df453e] tracking-[1.5px]">
                    $<span className="total_price1">{totalPrice}</span>
                </p>
            </div>
            <div className="flex justify-between mb-3">
                <p className="text-[14px] font-[600]">Phí vận chuyển:</p>
                <p className="text-[#df453e] font-[600] text-[12px] text-[df453e] tracking-[1.5px]">Miễn phí</p>
            </div>
            <hr />
            <div className="flex justify-between mt-3 mb-8">
                <b className="text-[22px] font-[700]">Tổng tiền:</b>
                <b className="text-[#df453e] font-[600] text-[20px] text-[df453e] tracking-[1.5px]">
                    $<span className="total_price2">{totalPrice}</span>
                </b>
            </div>
            <div className="flex justify-center">
                <button className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded">
                    Tiến hành đặt hàng
                </button>
            </div>
        </section>
    );
}
