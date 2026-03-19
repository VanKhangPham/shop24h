import { Button } from '@/components/ui/button'
import React from 'react'
import Container from '@/components/Container'


const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis veniam error nisi esse numquam assumenda sequi perferendis et cum natus! Eum, voluptates harum! Praesentium, cum ipsa. Totam cupiditate id architecto voluptas repellendus possimus unde doloremque sit facere perferendis veritatis accusamus aliquam obcaecati amet harum laboriosam accusantium eveniet, minus sunt. Commodi.
      </p>
      <Button size="lg">Checkout</Button>
    </Container>
  )
}

export default Home