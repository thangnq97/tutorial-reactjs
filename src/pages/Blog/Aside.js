export default function Aside() {
    return (
        <aside className="border px-8 py-8">
            <form className="relative flex mb-9" action="">
                <i className="absolute top-[15px] right-[10px] text-red-600 fa-solid fa-magnifying-glass"></i>
                <input
                    className="flex-[1] border border-red-500 outline-none px-2 py-2 w-[30px]"
                    type="text"
                    placeholder="Search Post..."
                />
            </form>
            <div className="border-b mb-4">
                <a href="#">
                    <img src="img/blog-01.jpg" />
                </a>
                <h3 className="mt-5 mb-3 font-[600] text-[16px]">SURVIVE LONG BIKE ROAD TRIPS</h3>
                <p className="text-[#ddd] text-[14px] font-[400] mb-5">21 May, 2022 by Katie</p>
            </div>
            <div className="border-b mb-4">
                <a href="#">
                    <img src="img/blog-02.jpg" />
                </a>
                <h3 className="mt-5 mb-3 font-[600] text-[16px]">HOW DO BICYCLES OPERATE?</h3>
                <p className="text-[#ddd] text-[14px] font-[400] mb-5">28 May, 2022 by Linda</p>
            </div>
            <div className="border-b mb-4">
                <a href="#">
                    <img src="img/blog-03.jpg" />
                </a>
                <h3 className="mt-5 mb-3 font-[600] text-[16px]">A BRIEF HISTORY OF BICYCLING</h3>
                <p className="text-[#ddd] text-[14px] font-[400] mb-5">02 May, 2022 by Megan</p>
            </div>
            <div className="mb-4">
                <a href="#">
                    <img src="img/blog-04.jpg" />
                </a>
                <h3 className="mt-5 mb-3 font-[600] text-[16px]">TO BIKE OR NOT TO BIKE</h3>
                <p className="text-[#ddd] text-[14px] font-[400] mb-5">18 May, 2022 by Katie</p>
            </div>
        </aside>
    );
}
