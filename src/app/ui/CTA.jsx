import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>Got a cool project idea? <br className='sm:block hidden'/>
      Let's team up and bring it to life together!
      </p>

      <Link href="/contact" className='btn'>
        Contact
      </Link>
    </section>
  )
}

export default CTA