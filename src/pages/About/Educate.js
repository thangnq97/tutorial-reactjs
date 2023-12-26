import { Check } from '@mui/icons-material';

export default function Educate() {
    return (
        <section className="my-9 grid grid-cols-5 gap-6">
            <div className="col-span-3 flex flex-col gap-5 px-6 justify-center">
                <h3 className="text-[42px] leading-[52px] font-[500]">
                    We educate the public about the bicycle riding
                </h3>
                <p className="text-[#393939] text-[16px] font-[400]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    totam rem aperiam eaque ipsa quae ab illo inventore.
                </p>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <Check className="text-red-500" />
                        <p className="text-[#393939] text-[14px] font-[400]">
                            Edquia numquam tempora incidunt ut labore et dolore magnam
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Check className="text-red-500" />
                        <p className="text-[#393939] text-[14px] font-[400]">
                            Exercitationem ullam corporis suscipit laboriosam volupatem
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Check className="text-red-500" />
                        <p className="text-[#393939] text-[14px] font-[400]">
                            Imilique sunt in culpa qui officia deserunt mollitia animi
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Check className="text-red-500" />
                        <p className="text-[#393939] text-[14px] font-[400]">
                            Exercitationem ullam corporis suscipit laboriosam
                        </p>
                    </div>
                </div>
                <div>
                    <button className="bg-[#df453e] text-white font-semibold text-[18px] px-[36px] py-[18px] hover:bg-[#335154] hover:text-[#df453e] rounded">
                        Read More
                    </button>
                </div>
            </div>
            <div className="px-6 col-span-2">
                <img src="img/educate.jpg" />
            </div>
        </section>
    );
}
