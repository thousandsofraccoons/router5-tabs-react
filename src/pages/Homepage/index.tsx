import { useRoute } from 'react-router5'
import React from 'react'
import { Hero, Features, Iframes, Footer, Badge } from '../../components'
import { hero, features, tabs } from './data'
import Tabs from '../../../build'

export const Homepage = props => {
  return (
    <>
      <Hero hero={hero} />
      <main className='container mx-auto'>
        <Features features={features} />
        <hr />
        <Tabs
          tabs={tabs}
          // router={useRoute}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Tabs>
        <Iframes />
        <div
          className='fb-comments px-10'
          data-href='https://developers.facebook.com/docs/plugins/comments#configurator'
          data-width='100%'
          data-numposts=''
        />
        <Badge />
      </main>
      <Footer />
    </>
  )
}
