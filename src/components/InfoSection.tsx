import dark from '../images/image-about-dark.jpg'
import light from '../images/image-about-light.jpg'

function InfoSection() {
    return (
        <>
            <section className='infosection grid grid-cols-1 lg:grid-cols-3'>
                <article className='infosection_leftimage'>
                    <img className="w-full" src={dark} alt="Furnitures in the dark" />
                </article>
                <article className='infosection_text flex flex-col self-center p-8 lg:p-12'>
                    <h1 className='infosection_text-title uppercase text-2xl lg:text-4xl font-bold'>About our furniture</h1>
                    <p className='infosection_text-info text-[var(--Grey-800)] my-6'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </article>
                <article className='infosection_rightimage'>
                    <img className="w-full" src={light} alt="Furnitures in the dark" />
                </article>
            </section>
        </>
    )
}

export default InfoSection