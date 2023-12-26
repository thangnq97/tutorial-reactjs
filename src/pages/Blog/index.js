import BannerPath from '~/components/BannerPath';
import Article from './Article';
import Aside from './Aside';

export default function Blog() {
    return (
        <>
            <BannerPath path="Blog" />
            <main className="mt-[64px] px-7 grid grid-cols-3 gap-9">
                <Aside />
                <Article />
            </main>
        </>
    );
}
