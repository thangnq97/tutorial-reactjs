export default function Article() {
    return (
        <article className="col-span-2">
            <section className="border px-8 py-8 mb-[66px]">
                <a href="">
                    <img src="img/blog-1.jpg" />
                </a>
                <h2 className="text-[#2f2f2f] text-[36px] my-4">Always Look On The Bright Side Of Life</h2>
                <p className="text-[#777777] text-[14px] leading-[28px] font-[400] mb-5">
                    Ut tempus leo sed magna hendrerit, non congue libero blandit. Vestibulum libero diam, convallis in
                    arcu ut, semper vulputate dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae usce luctus fringilla fermentum…
                </p>
                <div>
                    <button className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded">
                        Read More
                    </button>
                </div>
            </section>
            <section className="border px-8 py-8">
                <video controls src=""></video>
                <h2 className="text-[#2f2f2f] text-[36px] my-4">Philosophy As A Science</h2>
                <p className="text-[#777777] text-[14px] leading-[28px] font-[400] mb-5">
                    Ut tempus leo sed magna hendrerit, non congue libero blandit. Vestibulum libero diam, convallis in
                    arcu ut, semper vulputate dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae usce luctus fringilla fermentum…
                </p>
                <div>
                    <button className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded">
                        Read More
                    </button>
                </div>
            </section>
        </article>
    );
}
