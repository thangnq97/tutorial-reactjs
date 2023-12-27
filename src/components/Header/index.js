import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '~/img/logo.png';

export default function Header() {
    return (
        <header className="px-7 py-5 flex justify-between items-center">
            <Link to="">
                <img src={logo} />
            </Link>
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
                    <ShoppingCart />
                </Link>
            </div>
        </header>
    );
}
