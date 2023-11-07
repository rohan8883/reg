// import shape from '../../Components/Media/shape.svg'
import SimpleImageSlider from "react-simple-image-slider"
import React, { useEffect, useState } from 'react';
import { BiPhone } from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { TiSocialFacebookCircular } from 'react-icons/ti';
// import { AiOutlineGithub } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import shape from '../../assets/shape.svg';
import pic1 from "../../Components/Image/marri.jpg";
import pic2 from "../../Components/Image/mari.jpg";
import pic3 from "../../Components/Image/pic1.png"
const Marriage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // const images = [banner1, banner2, banner3];
    // const images = [bn1, bn2];
    const images = [pic1, pic2, pic3];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>


            <div className='h-auto w-full'>
                <div className='w-full h-[70vh] md:h-[75vh]  flex relative overflow-hidden' >
                    <img className='h-0 md:h-[97vh] absolute top-7 left-16 -mt-10 z-50' src={shape} />

                    <div className='flex-initial px-6 md:px-8 relative h-[100%] flex justify-center items-center z-50'>
                        <div className='w-full'>
                            <div className="text-4xl font-bold mb-2 text-[#99B37C]">Our Proposal</div>
                            <div className="text-4xl font-bold text-black mb-2">Guestbook</div>
                            <div className="text-4xl font-bold text-black mb-2">Accommodations</div>
                            <hr className='border-2 w-20 mb-2 border-[#99B37C]' />
                            <h1 className="text-lg text-black font-PublicSans md:w-[350px] mb-6">we are excited to start this new chapter of our lives together. The story of two hearts coming together to create a beautiful love story</h1>

                            <button className='flex  bg-amber-500 hover:bg-amber-600 hover:shadow-xl px-14 py-2 rounded-full shadow-md text-white' >
                                Discover
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className='hidden md:block flex-1 z-40'>
                        <SimpleImageSlider
                            width='80%'
                            height='100%'
                            images={images}
                            showBullets={true}
                            showNavs={false}
                            loop={true}
                            duration={0.5}
                            autoPlay={true}
                        />
                    </div>
                </div>
                {/* <img src="https://cdn.pixabay.com/photo/2016/05/20/07/37/marriage-1404623_1280.jpg" alt="" className='h-96 w-full' /> */}
            </div>
            <div className='text-center px-4 md:px-36 space-y-2 mt-4'>
                <p className='text-2xl font-bold mb-2 text-[#303f1e]'>Marriage Bureau</p>
                <p className='text-sm md:text-lg'>
                    Some couples participate in pre-marital education or counseling to prepare for marriage and enhance their relationship skills.Remember that the concept and practice of marriage can vary widely across cultures, religions, and individual preferences. It's important to approach marriage with open communication, understanding, and respect for your partner's beliefs and values.</p>
            </div>
            <div className='bg-black h-auto mx-auto w-10/12 rounded-lg border  md:mx-28 mt-10'>
                <div className='md:flex text-white p-10 md:gap-10'>
                    <div className='md:h-auto  md:w-1/2  '><img src="https://cdn.pixabay.com/photo/2016/05/20/07/33/wedding-1404620_1280.jpg" alt="" /></div>
                    <div className='md:h-60 w-full md:w-1/2 md:p-5'>
                        <ul className='md:list-disc md:text-xl space-y-1 mt-2'>
                            <li className=''>Personalized Matchmaking</li>
                            <li>Background Verification</li>
                            <li>Wedding Planning Service</li>
                            <li>Profile Creation and  Enhancement</li>
                            <li>Relationship Guidance</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-black h-auto w-full mt-10 flex flex-wrap justify-evenly py-3 md:py-8 px-1 md:px-3 gap-3'>

                <div className='bg-gray-300 gap-4 border h-auto  md:w-80 '>
                    <div className='my-4 mx-4  bg-gray-100 rounded-lg h-auto hover:scale-105 hover:duration-150'>
                        <div><img src="https://cdn.pixabay.com/photo/2016/11/23/17/56/beach-1854076_1280.jpg" alt="" className='h-36 w-full  p-2' />
                            <div className='p-3 space-y-3'>
                                <p className='text-2xl text-pink-600 font-semibold'>65,250</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi velit quam. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 gap-4 border h-auto  md:w-80 '>
                    <div className='my-4 mx-4  bg-gray-100 rounded-lg h-auto hover:scale-105 hover:duration-150'>
                        <div><img src="https://stylesatlife.com/wp-content/uploads/2022/12/telugu-pelli-mandapam-decoration.jpg" alt="" className='h-36 w-full  p-2' />
                            <div className='p-3 space-y-3'>
                                <p className='text-2xl text-pink-600 font-semibold'>70,500</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi velit quam. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 gap-4 border h-auto  md:w-80 '>
                    <div className='my-4 mx-4  bg-gray-100 rounded-lg  hover:scale-105 hover:duration-150'>
                        <div><img src="https://cdn.pixabay.com/photo/2016/05/20/07/37/marriage-1404623_1280.jpg" alt="" className='h-36 w-full  p-2' />
                            <div className='p-3 space-y-3'>
                                <p className='text-2xl text-pink-600 font-semibold'>70,500</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi velit quam. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 gap-4 border h-auto  md:w-80 '>
                    <div className='my-4 mx-4  bg-gray-100 rounded-lg  hover:scale-105 hover:duration-150'>
                        <div><img src="https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_1280.jpg" alt="" className='h-36 w-full  p-2' />
                            <div className='p-3 space-y-3'>
                                <p className='text-2xl text-pink-600 font-semibold'>70,500</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi velit quam. </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='h-64 w-full bg-white flex items-center justify-evenly'>
                <div className='h-28 w-28 '>
                    <img src="https://cdn.w600.comps.canstockphoto.com/privacy-protection-guarantee-icon-vector-clipart_csp28579808.jpg" alt="" />
                </div>
                <div className='h-28 w-28 '>
                    <img src="https://t3.ftcdn.net/jpg/04/06/15/40/360_F_406154090_rkriySX3dV4KkKwVq0ZLf3Igr956JvU1.jpg" alt="" />
                </div>
                <div className='h-28 w-28 '>
                    <img src="https://media.gettyimages.com/id/1340919936/vector/customer-support-cartoon-style-icon-colorful-symbol-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=X6kTEUr6R9eGZlYj7NPAyB9jAOrlcPWVTToeZBSY3TU=" alt="" />
                </div>
                <div className='h-28 w-28 '>
                    <img src="https://cdn.w600.comps.canstockphoto.com/privacy-protection-guarantee-icon-vector-clipart_csp28579808.jpg" alt="" />
                </div>

            </div>
            <div className='bg-black w-full h-auto'>
                 
                    <Carousel
                        // className='select-none mx-auto w-full grid lg:grid-cols-4 gap-y-14 gap-x-6 m-5 transition-all duration-200 mt-10'
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container py-10"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]  '>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]'>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]'>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]'>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]  '>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]'>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]'>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>
                        <div className='h-auto md:w-80 rounded-lg  bg-[#7C7E7E]'>
                            <p className='text-center text-white text-xl font-semibold pt-6'>Database</p>
                            <p className='text-start text-white mx-5 mt-2 pb-3'>Lorem, ipsum dolor sit consectetur adipisicing elit. Laudantium adipisci aspernatur ut cupiditate sequi perspiciatis maiores consequatur officiis sint architecto.  </p>
                        </div>


                    </Carousel>
                 
            </div>
            <div className='h-auto w-full '>
                <div className='h-28 w-full justify-center items-center flex'>
                    <div>
                        <p className='text-3xl font-bold text-gray-900'>Let's Contact</p>
                    </div>
                </div>
                <div className='h-auto -mt-6  w-full justify-evenly items-center md:flex'>

                    <div>
                        <div className=' h-16 w-full justify-center items-center flex text-white'><HiOutlineMail className='h-10 w-10 p-2 rounded-full bg-black text-white' /></div>
                        <div className='text-center'>
                            <p>Email</p>
                            <p>Our friendly team is here to help.</p>
                            <p>hello@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className=' h-16 w-full justify-center items-center flex text-white'><HiOutlineLocationMarker className='h-10 w-10 p-2 rounded-full bg-black text-white' /></div>
                        <div className='text-center'>
                            <p>Office</p>
                            <p>Our friendly team is here to help.</p>
                            <p>hello@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className=' h-16 w-full justify-center items-center flex text-white'><BiPhone className='h-10 w-10 p-2 rounded-full bg-black text-white' /></div>
                        <div className='text-center'>
                            <p>Phone</p>
                            <p>Our friendly team is here to help.</p>
                            <p>hello@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>



            <footer className='h-auto w-full bg-black mt-10'>
                <div className='h-auto w-full grid grid-cols-1 md:grid-cols-3'>

                    <div className='md:col-span-1 items-center justify-center flex flex-col py-3 text-center md:text-left'>
                        <div className='mt-3'>
                            <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png" alt="" className='h-10 w-10 rounded-full' />
                        </div>
                        <div className='flex gap-4 py-4'>
                            <div><TiSocialFacebookCircular className='text-white' /></div>
                            <div><FaInstagram className='text-white' /></div>
                            <div><HiOutlineMail className='text-white' /></div>
                        </div>
                    </div>


                    <div className='md:col-span-2'>
                        <div className='flex flex-col md:flex-row md:mr-28 gap-4 items-center justify-evenly mt-4 text-white text-center md:text-left'>
                            <div>
                                <p className='text-sm'>IMPORTANT LINKS</p>
                                <p className='text-xs'>about us</p>
                                <p className='text-xs'>Terms & conditions</p>
                                <p className='text-xs'>Teams</p>
                            </div>
                            <div>
                                <p className='text-sm'>IMPORTANT LINKS</p>
                                <p className='text-xs'>about us</p>
                                <p className='text-xs'>Terms & conditions</p>
                                <p className='text-xs'>Teams</p>
                            </div>
                            <div>
                                <p className='text-sm'>IMPORTANT LINKS</p>
                                <p className='text-xs'>about us</p>
                                <p className='text-xs'>Terms & conditions</p>
                                <p className='text-xs'>Teams</p>
                            </div>
                            <div>
                                <p className='text-sm'>IMPORTANT LINKS</p>
                                <p className='text-xs'>about us</p>
                                <p className='text-xs'>Terms & conditions</p>
                                <p className='text-xs'>Teams</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-white mb-5 mx-20 md:w-9/12 md:mx-auto mt-3'></div>
                <div className='text-white text-center pb-5'>@ Brand 2023-All Right Reserved</div>
            </footer>

        </>
    );
};

export default Marriage;
