import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-white'>
      <section className='container mx-auto py-10 mt-10'>
        <h2 className='mb-8 text-gray-300 text-2xl'>See also</h2>
        <div className='w-3/12'>
          <a
            className='mt-4 mb-2 flex'
            href='https://router5-breadcrumbs-react.now.sh/'
          >
            <strong>router5-breadcrumbs-react</strong>
          </a>
          <p className='text-gray-300'>
            Compact library for automatic rendering Breadcrumbs using
            router5-react
          </p>
        </div>
      </section>
    </footer>
  )
}
