import './showcase.css'
import shop from '../images/icon-arrow.svg'
import left from '../images/icon-angle-left.svg'
import right from '../images/icon-angle-right.svg'
import { useState } from 'react'

const basePath = import.meta.env.BASE_URL + "images"

const data = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        desc: "  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        mobile: `${basePath}/mobile-image-hero-1.jpg`,
        desktop: `${basePath}/desktop-image-hero-1.jpg`
        },
    {
        id: 2,
        title: "We are available all across the globe",
        desc: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        mobile: `${basePath}/mobile-image-hero-2.jpg`,
        desktop: `${basePath}/desktop-image-hero-2.jpg`
    },
    {
        id: 3,
        title: "Manufactured with the best materials",
        desc: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
        mobile: `${basePath}/mobile-image-hero-3.jpg`,
        desktop: `${basePath}/desktop-image-hero-3.jpg`
    }
]

function Showcase() {
    const [items] = useState(data)
    const [slideIndex, setSlideIndex] = useState(1)

    function nextSlide(){
        if (slideIndex !== items.length){
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex === items.length){
            setSlideIndex(1)
        }
    }

    function previousSlide(){
        if (slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex(items.length)
        }
    }


    return (
        <>
            <section className='sliders'>
                {items.map((item, index) => (
                    <article key={item.id} className={slideIndex === index + 1
                        ? 'flex flex-col lg:flex-row'
                        : 'hidden'
                    }>
                        <div className='sliders__images w-full lg:w-[55%] relative'>
                            <picture>
                                <source media="(min-width: 768px)" srcSet={item.desktop} />
                                <img src={item.mobile} alt={item.title} className='w-full'/>
                            </picture>
                            <ul className='sliders__change absolute bottom-0 right-0 flex'>
                                <li><button onClick={previousSlide} className='bg-[var(--Black)] p-6 hover:bg-[var(--Grey-800)] cursor-pointer'><img src={left}  alt="Previous slide" /></button></li>
                                <li><button onClick={nextSlide} className='bg-[var(--Black)] p-6 hover:bg-[var(--Grey-800)] cursor-pointer'><img src={right}  alt="Next slide" /></button></li>
                            </ul>
                        </div>
                        <div className='sliders__info p-8 w-full lg:w-[45%] flex flex-col self-center'>
                            <h2 className='sliders__info-title text-3xl lg:text-5xl font-bold'>{item.title}</h2>
                            <p className='sliders__info-description text-[var(--Grey-800)] my-6'>{item.desc}</p>
                            <button className='sliders__info-shopnowbutton uppercase tracking-widest flex items-center gap-4 hover:opacity-75 cursor-pointer'>
                                Shop now <img src={shop} alt="Ship now button" />
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default Showcase
