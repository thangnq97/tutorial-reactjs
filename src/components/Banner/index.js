import { Check } from '@mui/icons-material';

export default function Banner() {
    return (
        <section className="bg-[#f1f2f1] grid grid-cols-2 gap-10 px-2 py-7">
            <div>
                <img src="img/banner.png" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-[40px] font-[800] text-[#335154] leading-[50px] tracking-[3px] mb-8">
                    Mach City 7 Bicycle
                </h2>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="text-[18px] font-bold leading-[24px] text-[#335154]">
                            {' '}
                            <span>
                                <Check className="text-red-500" />
                            </span>{' '}
                            17t, 21 frame height
                        </p>
                        <p className="text-[18px] font-bold leading-[24px] text-[#335154]">
                            {' '}
                            <span>
                                <Check className="text-red-500" />
                            </span>{' '}
                            26t wheel size
                        </p>
                        <p className="text-[18px] font-bold leading-[24px] text-[#335154]">
                            {' '}
                            <span>
                                <Check className="text-red-500" />
                            </span>{' '}
                            7 speed transmission
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[18px] font-bold leading-[24px] text-[#335154]">
                            {' '}
                            <span>
                                <Check className="text-red-500" />
                            </span>{' '}
                            Paved road
                        </p>
                        <p className="text-[18px] font-bold leading-[24px] text-[#335154]">
                            {' '}
                            <span>
                                <Check className="text-red-500" />
                            </span>{' '}
                            Light weight steel frame
                        </p>
                        <p className="text-[18px] font-bold leading-[24px] text-[#335154]">
                            {' '}
                            <span>
                                <Check className="text-red-500" />
                            </span>{' '}
                            Steel rigid fork
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex items-center gap-10">
                    <h2 className="text-[43px] leading-[52px] font-bold text-[#df453e]">$ 1.500</h2>
                    <div>
                        <button className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
