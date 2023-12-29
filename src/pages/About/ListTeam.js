import Team from '~/components/Team';

export default function ListTeam() {
    const listTeam = [
        {
            image: './img/team-1.jpg',
            name: 'Mr. Mike Banding',
            position: 'Manager',
        },
        {
            image: './img/team-2.jpg',
            name: 'Mr. Peter Pan',
            position: 'Developer',
        },
        {
            image: './img/team-3.jpg',
            name: 'Ms. Sophia',
            position: 'Designer',
        },
        {
            image: './img/team-4.jpg',
            name: 'Mr. John Lee',
            position: 'Chairmen',
        },
    ];
    return (
        <section className="my-[64px] px-7">
            <h2 className="text-[42px] text-[#335154] font-[800] leading-[52px] mb-6 text-center">
                Meet our expert Team
            </h2>
            <div className="grid grid-cols-4 gap-5">
                {listTeam.map((item) => (
                    <Team key={item.image} image={item.image} name={item.name} position={item.position} />
                ))}
            </div>
        </section>
    );
}
