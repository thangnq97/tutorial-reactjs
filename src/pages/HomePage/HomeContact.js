export default function HomeContact() {
    return (
        <section className="grid grid-cols-4">
            <div className="col-span-2 flex flex-col items-center justify-center bg-red-500 gap-5">
                <h2 className="text-[36px] font-[800] leading-[46px] tracking-[1px] max-w-[500px] text-white">
                    Get -20% for all BMX bikes & accessories
                </h2>
                <button className="bg-[#335154] text-white px-[36px] py-[18px] cursor-pointer text-[18px] font-[600] hover:text-black hover:bg-red-600">
                    Get your promocode
                </button>
            </div>
            <div className="flex flex-col items-center gap-6 py-8">
                <a href="#">
                    <img src="img/screwdriver.png" />
                </a>
                <h3 className="text-[24px] font-[800] text-[#335154] px-5 my-4 max-w-[200px] text-center tracking-[1px]">
                    Bicycle Repair Workshop
                </h3>
                <p className="text-[16px] font-[400] leading-[24px] text-[#393939] max-w-[220px] text-center">
                    Bicycle restoration after collisions of any severity, including complete rebuilding.
                </p>
                <p className="text-[#df453e] text-[16px] font-[600] leading-[22px]">Read more</p>
            </div>
            <div className="flex flex-col items-center gap-6 py-8 bg-[#335154]">
                <a href="#">
                    <img src="img/gear.png" />
                </a>
                <h3 className="text-[24px] font-[800] text-white px-5 my-4 max-w-[200px] text-center tracking-[1px]">
                    Bicycle Repair Workshop
                </h3>
                <p className="text-[16px] font-[400] leading-[24px] text-[#A3B4B7] max-w-[220px] text-center">
                    Bicycle restoration after collisions of any severity, including complete rebuilding.
                </p>
                <p className="text-[#df453e] text-[16px] font-[600] leading-[22px]">Read more</p>
            </div>
        </section>
    );
}
