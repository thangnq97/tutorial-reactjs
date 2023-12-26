export default function Info({ icon, name, detail }) {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="border border-red-400 flex justify-center items-center">{icon}</div>
            <div className="col-span-4">
                <h4 className="text-[20px] font-[400] tracking-[1px]">{name}</h4>
                <p className="text-[14px] font-[400] text-[#393939]">{detail}</p>
            </div>
        </div>
    );
}
