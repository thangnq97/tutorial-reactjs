import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div className="flex gap-6">
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <Link className="text-[18px] font-semibold hover:text-red-500" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="text-[18px] font-semibold hover:text-red-500" to="/pages">
                            Pages
                        </Link>
                    </li>
                    <li>
                        <Link className="text-[18px] font-semibold hover:text-red-500" to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link className="text-[18px] font-semibold hover:text-red-500" to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className="text-[18px] font-semibold hover:text-red-500" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link to="/cart" className="cursor-pointer">
                <i className="fa-solid fa-cart-shopping"></i>
            </Link>
        </div>
    );
}
