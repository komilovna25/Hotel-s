import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import avatarImage from '../assets/avatarImage.png'; 
const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:xlpx-32'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className=''>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>
        <div className='flex items-center gap-1 mt-2'>
            <StarRating />
            <p className='ml-2'>200% OFF</p>
        </div>
        {/*  */}
        <div className='flex items-start gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
        </div>
        {/*  */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image,index) => (
                    <img onClick={() => setMainImage(image)} key={index} src={image} alt="" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-300'}`}/>
                ))}
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index) => (
                        <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                            <img src={facilityIcons[item]} alt="" className='w-5 h-5'/>
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-14 max-w-8xl'>
            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                <div className='flex flex-col'>
                    <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                    <input type="date" id='checkInDate' placeholder='Check-In' className='w-full h-[40px] rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'/>
                </div>    
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'> 
                    <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                    <input type="date" id='checkOutDate' placeholder='Check-Out' className='w-full h-[40px] rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'/>
                </div> 
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label htmlFor="guests" className='font-medium'>Guests</label>
                    <input type="number" id='guests' placeholder='0' className='max-w-20 h-[40px] rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div> 
            </div>
            <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full mt-4 md:mt-2 lg:mt-4 md:px-25 py-3 md:py-4 text-base cursor-pointer'>Check Availability</button>
        </form>
        {/*  */}
        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec, index) => (
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
                    <div>
                        <p className='text-base'>{spec.title}</p>
                        <p className='text-gray-500'>{spec.description}</p>
                    </div>
                </div>
            ))}
        </div>
        {/*  */}
        <div className='max-w-xl border-y border-gray-200 my-15 py-10 text-gray-500'>
            <p>Guests will be allocated on the ground fllor according to availability.You get a comfortable Two bedrom apartment has a true city feeling. The price quoted is for two guests, at the guests slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
        </div>
        <div>
            <h1 className='font-medium '>Location on map</h1>
        <div className='w-full rounded-md overflow-hidden shadow-lg mt-2'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.51488731765!2d-0.3817837926918892!3d51.52855824279362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb4a1a25e37%3A0x14b82b9ed401e619!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1617711238564!5m2!1sen!2s'
						className='w-full h-96 border-0'
						allowFullScreen
						loading='lazy'
						title='Google Maps'
					></iframe>
		</div>
                    <div className='flex flex-col mt-4  border-b border-gray-400 h-[90px] max-w-xl'>
                        <h2 className='font-semibold text-lg'>Los Angeles, California, USA</h2>
                        <p>It’s like a home away from home.</p>
                    </div>

        <div className='flex flex-col items-start gap-4 mt-4'>
            <div>
                <img src={avatarImage} alt="" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
                <div>
                    <p className='text-lg md:text-xl'>Hostes by {room.hotel.name}</p>
                    <div className='flex items-center mt-1'>
                        <StarRating />
                        <p className='ml-2'>200+ reviews</p>
                    </div>
                </div>
            </div>
            <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
        </div>

        </div>


    </div>
  )
}

export default RoomDetails;