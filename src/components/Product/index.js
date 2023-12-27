import { Link } from 'react-router-dom';

export default function Product({ id, image, name, price }) {
    return (
        <div>
            <Link to={`/product-detail/${id}`}>
                <img src={image} />
            </Link>
            <Link to={`/product-detail/${id}`}>
                <h3 className="text-[20px] font-[800] text-[#335154] mt-3 mb-2">{name}</h3>
            </Link>
            <p className="text-[#df453e] font-[800] text-[20px] text-[df453e] tracking-[1.5px]">${price}</p>
        </div>
    );
}
