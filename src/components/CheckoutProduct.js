import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'


function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    return (
        //   left
        <div className='grid grid-cols-5'>
            <Image
                src={image}
                height={200}
                width={200}
                objectfit='contain'
            />
            {/* middle */}
            <div className='col-span-3 mx-5'>
                
                <p>{title}</p>

                <div className='flex'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className='h-5 text-yellow-500' />))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency="USD" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt="hasprime"
                        />
                        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                    </div>)}
            </div>
            {/* right add and remove */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button mt-auto'>Add to Cart</button>
                <button className='button mt-auto'>Remove from Cart</button>
            </div>
        </div>
        
    );
}

export default CheckoutProduct;