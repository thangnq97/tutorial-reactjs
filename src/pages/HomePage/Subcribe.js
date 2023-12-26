export default function Subcribe() {
    return (
        <div className="grid grid-cols-4">
            <div className="flex flex-col gap-3 items-center py-9 border-r">
                <a className="flex justify-center" href="#">
                    <img src="img/contact1.png" />
                </a>
                <h3 className="text-[24px] font-[800] text-[#335154] px-5 my-4 max-w-[200px] text-center tracking-[1px]">
                    Saddle Personal Fitting
                </h3>
                <p className="text-[16px] font-[400] leading-[24px] text-[#393939] max-w-[220px] text-center">
                    Individual saddle fitting according to your height and weight.
                </p>
                <p className="text-[#df453e] text-[16px] font-[600] leading-[22px]">Read more</p>
            </div>
            <div className="flex flex-col gap-3 items-center py-9 border-r">
                <a className="flex justify-center" href="#">
                    <img src="img/contact2.png" />
                </a>
                <h3 className="text-[24px] font-[800] text-[#335154] px-5 my-4 max-w-[200px] text-center tracking-[1px]">
                    Spare Parts Exchange
                </h3>
                <p className="text-[16px] font-[400] leading-[24px] text-[#393939] max-w-[220px] text-center">
                    Have spare parts and want to sell or exchange them? Come and see!
                </p>
                <p className="text-[#df453e] text-[16px] font-[600] leading-[22px]">Read more</p>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center gap-7">
                <h2 className="max-w-[480px] text-[36px] leading-[46px] font-[800] text-[#335154]">
                    Subscribe to our newsletter about new products
                </h2>
                <form className="flex" action="">
                    <input
                        className="w-[290px] h-[60px] pl-[27px] py-[15px] border-2 border-[e2e7e7] bg-[#f6f7f7]"
                        placeholder="Your email address..."
                        required
                        type="email"
                    />
                    <input
                        className="w-[120px] h-[60px] bg-[#335154] text-[#5d6b6d] text-[16px] font-[500] cursor-pointer"
                        type="submit"
                        value="Subcribe now"
                    />
                </form>
            </div>
        </div>
    );
}
