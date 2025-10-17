import { Construction, Drill, FileSliders, Forklift, HardHat, Hotel, House, Pickaxe } from 'lucide-react'

const Marquee = () => {
    const entries = [
        { Icon: Hotel, label: 'Commercial Construction' },
        { Icon: House, label: 'Residential Construction' },
        { Icon: FileSliders, label: 'Pre- Construction' },
        { Icon: HardHat, label: 'Site Management' },
        { Icon: Drill, label: 'Special Projects' },
        { Icon: Forklift, label: 'Infrastructure Construction' },
        { Icon: Construction, label: 'Civil Engineering' },
        { Icon: Pickaxe, label: 'Landscape Construction' },
    ]

    const group = (
        <div className="marquee__group mr-20" style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
            {entries.map(({ Icon, label }, i) => (
                <h2 key={i} className="flex items-center gap-2 whitespace-nowrap" style={{ margin: 0 }}>
                    <Icon strokeWidth={1.5} size={48} /> {label}
                </h2>
            ))}
        </div>
    )

    return (
        <div className="w-full overflow-hidden pb-5">
            <style>{`
                .marquee__track {
                    display: flex;
                    width: max-content;
                    align-items: center;
                    animation: marquee 14s linear infinite;
                }
                .marquee__track:hover { animation-play-state: paused; } /* pause on hover */
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            <div className="marquee__viewport" style={{ width: '100%', overflow: 'hidden' }}>
                <div className="marquee__track" aria-hidden="false">
                    {group}
                    {group /* duplicate for seamless looping */}
                </div>
            </div>
        </div>
    )
}

export default Marquee