import { Element, Link as LinkScroll } from 'react-scroll'
export default function Hero() {
    return (
        <section className={'relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400'}>
            <Element name={'hero'}>
                <div className={'container'}>
                    <div className={'relative z-2 max-w-512 max-lg:max-w-388'}>
                        <div className={'caption small-2 uppercase text-p3'}>
                            Video editing
                        </div>
                        <h1 className={'mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl'}>
                            Amazingly simple
                        </h1>
                        <p className={'max-w-440 mb-14 body-1 max-md:mb-10'}>
                            We designed XORA AI Video Editor to be an easy to use, quick to learn,
                            and suprisingly powerful.
                        </p>
                        <LinkScroll to="features" offset={-100} spy={true} smooth={true}>
                            Text
                        </LinkScroll>
                    </div>
                </div>
            </Element>
        </section>
    )
}
