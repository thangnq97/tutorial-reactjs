import { Email, LocationCity, LockClock, Phone } from '@mui/icons-material';
import BannerPath from '~/components/BannerPath';
import Form from '~/components/Form';
import Info from '~/components/Info';

export default function Contact() {
    return (
        <>
            <BannerPath path="Contact us" />
            <main className="my-[64px] px-9 grid grid-cols-2 gap-5">
                <section>
                    <h2 className="font-[800] text-[42px] leading-[52px] text-[#335154] mb-[52px]">Get Info</h2>
                    <div className="grid grid-cols-2 gap-y-10">
                        <Info icon={<LocationCity />} name="LOCATION" detail="Trịnh Văn Bô - Hà Nội" />
                        <Info icon={<Phone />} name="PHONE" detail="(+84)344750590" />
                        <Info icon={<Email />} name="EMAIL" detail="thangnqph28950@fpt.edu.vn" />
                        <Info icon={<LockClock />} name="OPENING HOURS" detail="Mon-Sat 09:00 AM - 18:00 PM" />
                    </div>
                </section>
                <Form />
            </main>
        </>
    );
}
