export default function Team({ image, name, position }) {
    return (
        <div class="bg-[#335154] flex flex-col items-center px-5 py-5">
            <a href="#">
                <img src={image} />
            </a>
            <h3 class="text-[26px] font-[500] text-[#df453e] mt-5 mb-3">{name}</h3>
            <p class="text-[15px] font-[400]">{position}</p>
        </div>
    );
}
