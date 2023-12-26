import BannerPath from '~/components/BannerPath';
import Educate from './Educate';
import Statistical from './Statistical';
import ListTeam from './ListTeam';

export default function About() {
    return (
        <>
            <BannerPath path="About us" />
            <Educate />
            <Statistical />
            <ListTeam />
        </>
    );
}
