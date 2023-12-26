import { ContactEmergency, Facebook, Instagram, LocationCity, Phone, Twitter } from '@mui/icons-material';

export default function Footer() {
    return (
        <footer className=" px-8 py-[64px] bg-[#335154] grid grid-cols-4 gap-6">
            <div>
                <a href="#">
                    <img src="img/logo.png" />
                </a>
                <div className="flex mt-3 gap-4 ml-5">
                    <Facebook className="text-red-500" />
                    <Twitter className="text-red-500" />
                    <Instagram className="text-red-500" />
                </div>
            </div>
            <div>
                <h3 className="text-[18px] font-[600] tracking-[1px] text-white">Want To Call With Us?</h3>
                <div className="flex mt-3 gap-3 items-center">
                    <Phone className="text-red-500" />
                    <p className="text-[#97adaf]">(+62) 123-321-543</p>
                </div>
            </div>
            <div>
                <h3 className="text-[18px] font-[600] tracking-[1px] text-white">Want To Email With Us?</h3>
                <div className="flex mt-3 gap-3 items-center">
                    <ContactEmergency className="text-red-500" />
                    <p className="text-[#97adaf]">Info@Example.Com</p>
                </div>
            </div>
            <div>
                <h3 className="text-[18px] font-[600] tracking-[1px] text-white">Want To Visit Us?</h3>
                <div className="flex mt-3 gap-3 items-center">
                    <LocationCity className="text-red-500" />
                    <p className="text-[#97adaf]">121 King Street, New York 3000 USA.</p>
                </div>
            </div>
        </footer>
    );
}
