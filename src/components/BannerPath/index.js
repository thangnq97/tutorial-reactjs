export default function BannerPath({ path }) {
    return (
        <section className="py-10 text-center flex flex-col gap-6 bg-[#335154]">
            <h2 className="text-[#df453e] font-[800] text-[42px]">{path}</h2>
            <p className="text-[#777777] text-[16px] font-[500] ">
                Home <span className="text-white">/ {path}</span>
            </p>
        </section>
    );
}
