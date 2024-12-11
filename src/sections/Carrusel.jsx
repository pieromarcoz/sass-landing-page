import {plans} from "../constants/index.jsx";

export default function Carrusel() {
    return (
        <section className={'container'}>
            <div className={'flex gap-6 overflow-auto scroll-hide'}>
                {
                    plans.map((plan, i) => {
                        return (
                            <div key={i} className={'max-xl:min-w-80 xl:w-[calc(33.33%+2px)] plan-item relative flex items-center justify-center'}>
                                <h1>{plan.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}