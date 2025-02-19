import React from 'react'
import moment from 'moment'
import Currency from 'react-currency-formatter'

function Order( { id, amount, amountShipping, items, timestamp, images}) {
  return (
      <div className='relative border rounded-md'>
          <div className='relative flex items-center space-x-10  p-5 bg-gray-100 text-sm text-gray-600'>
              <div>
                  <p className='font-bold text-xs'>Order Placed</p>
                  <p>{moment.unix(timestamp).format('MM DD YYYY')}</p>
              </div>
              <div>
                  <p className='text-xs font-bold'>Total</p>
                  <p>
                      <Currency quantity={amount} currency='USD' /> Next Day Delivery{" "}
                      <Currency quantity={amountShipping} currency='USD' />
                  </p>
              </div>
              <p className='text-xs whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
                  {items.length} items
              </p>

              <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
                  ORDER # {id}
              </p>

              <div className='p-5 sm:p-10'>
                  <div className='flex space-x-6 overflow-auto'>
                      {images.map(image => (
                          <img src={image} alt="product" className='h-20 object-contain sm:h-32' />
                      ))}
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default Order