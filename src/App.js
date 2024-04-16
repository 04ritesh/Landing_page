import React, { useRef } from 'react';
import Card from './Card';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 
import ImageCarousel from './ImageCarousel';
import s1 from './image/s1.jpg'
import s2 from './image/s2.jpg'
import s3 from './image/s3.jpg'
import s4 from './image/s4.jpg'
import Reviews from './Reviews';
import Footer from './Footer';

const App = () => {
  const cardContainerRef = useRef(null); 
  const reviewsContainerRef = useRef(null); 

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + 200,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <ImageCarousel />
      <div className='flex justify-center m-4 pt-3'>
  <h2 className='text-xl text-gray-500'>Top Students</h2>
</div>

      <div className="flex justify-between items-center px-6 pt-4 pl-16 ">
        <button onClick={() => scrollLeft(cardContainerRef)} className="focus:outline-none bg-orange-500 p-2">
          <BsChevronLeft className='' size={24} />
        </button>
        <button onClick={() => scrollRight(cardContainerRef)} className="focus:outline-none  bg-orange-500 p-2">
          <BsChevronRight size={24} />
        </button>
      </div>
      <div className='flex gap-2' style={{ overflowX: 'hidden', overflowY: 'hidden' }} ref={cardContainerRef}>
        <Card image={s1} name="Shilki Kumari" descp="Topper in Biology" />
        <Card image={s2} name="Ritesh Kumar"  descp="Good rank in Botany" />
        <Card image={s3} name="Smriti"  descp="Rank holder, AIR 10" />
        <Card image={s4} name="Shreay Singh"  descp="Achieves 99.8 percentile" />
        <Card image={s4} name="Khushi Singh"  descp="Rank holder under 1000" />
      </div>
      <h2 className='text-xl text-gray-500 m-6 flex justify-center'>Reviews</h2>
      <div className='gap-2 mb-12 flex flex-wrap' style={{ overflowX: 'hidden', overflowY: 'hidden' }} ref={reviewsContainerRef}>
        <Reviews name="Rahul Kumar" descp="maintaining Competetive environmment"/>
        <Reviews name="Abhay Kumar" descp="Great teachers in bags"/>
        <Reviews name="Dipti Kumari" descp="Best Technology used while teaching"/>
        <Reviews name="Ranu mondal" descp="Great studying environment"/>
      </div>
      <Footer className='pt-6' />
    </>
  );
};

export default App;
