import React from 'react'

const Caurosel = () => {
    return (
        <section id="default-carousel" className="w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div className='w-full'>
                <div className="relative h-56 overflow-hidden  md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="./WhatsApp Image 2023-08-11 at 4.21.35 PM._dark.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-fit = width: fit-content" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className=" hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://imgk.timesnownews.com/story/rrrrn.png?tr=w-600,h-450,fo-auto" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3--> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://imgk.timesnownews.com/story/rrrrn.png?tr=w-600,h-450,fo-auto" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div className=" duration-700 ease-in-out " data-carousel-item>
                        <img src="https://static.langimg.com/photo/imgsize-43578,msid-91136772/navbharat-times.jpg" className="absolute h-full w-full width:fit-content" alt="..." />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://rukminim1.flixcart.com/image/850/1000/l1whaq80/painting/n/a/k/14-1-dbrush-d216laminated-dbrush-original-imagdd7yhvk9swfd.jpeg?q=90" className="absolute " alt="..." />
                    </div>
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className=" hidden absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="hidden absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </section>
    )
}

export default Caurosel
