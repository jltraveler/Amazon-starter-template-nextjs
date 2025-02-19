import { useSession } from 'next-auth/react' 
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter'
import { link, loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

const checkout =() => {
    const { data: session } = useSession();
    const total = useSelector(selectTotal);
    const items = useSelector(selectItems);
    
    const createCheckoutSession = async () => {
        const stripe = await stripePromise

        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: session.user.email
        })
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
        if (result.error) alert(result.error.message);
        
    };
    
    
  return (
      <div className='bg-gray-100'>
          <Header />
          <main className='lg:flex max-w-screen-2xl mx-auto'>
              {/* left */}
              <div className='flex-grow m-5 shadow-sm'>
                  <Image
                      src='https://links.papareact.com/ikj'
                      width={1020}
                      height={250}
                      objectfit='contain'
                  />
                  <div className='flex flex-col p-5 space-y-10 bg-white'>
                      <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your Amazon Cart is Empty' : 'Shopping Cart'}</h1>
                      {items.map((item, i) => (
                          <CheckoutProduct
                              key={i}
                              id={item.id}
                              title={item.title}
                              rating={item.rating}
                              price={item.price}
                              description={item.description}
                              category={item.category}
                              image={item.image}
                              hasPrime={item.hasPrime}
                          />
                      ))}
                  </div>

              </div>

              {/* right */}
              <div className='flex flex-col bg-white p-10 shadow-md'>
                  {items.length > 0 && (
                      <>
                          <h2 className='whitespace-nowrap'>Subtotal({items.length} items):
                              <span className='font-bold'>
                              <Currency quantity={total} currency="USD"/>
                          </span>
                          </h2>
                          <button
                              onClick={createCheckoutSession}
                              role={link}
                              disabled={!session}
                              className={`button mt-2 ${
                              !session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                              >
                              
                              {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                          </button>
                          
                      </>
                  )}
                        </div>
          </main>
    </div>
  )
}

export default checkout;