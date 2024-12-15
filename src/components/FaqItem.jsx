import clsx from "clsx";
import {useState} from "react";

export default function FaqItem({item, index}) {
    const [activeId, setActiveId] = useState(null);
    const active = activeId === item.id;
    return (
        <div className={'relative z-2 mb-16'}>
            <div className={'group relative flex cursor-pointer items-center justify-between gap-10 px-7'}
                onClick={() => {
                    setActiveId(activeId === item.id ? null : item.id);
                }}
            >
                <div className={'flex-1'}>
                    <div>
                        {index < 10 ? "0" : ""}
                        {index}
                    </div>
                    <div className={clsx('h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center', active && 'max-lg:text-p1')}>
                        {item.question}
                    </div>
                </div>
            </div>
        </div>
    )
}