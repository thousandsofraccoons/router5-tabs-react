import React, { FunctionComponent, ReactNode } from 'react'

type Props = {
  features: Array<{ title: string; text: string | ReactNode }>
}

export const Features: FunctionComponent<Props> = ({ features }) => {
  return (
    <div className='flex justify-between'>
      {features.map((feature, index) => {
        return (
          <section className='w-1/3 px-10 my-8' key={index}>
            <h3 className='text-2xl my-2 font-light'>{feature.title}</h3>
            <p className='leading-loose'>{feature.text}</p>
          </section>
        )
      })}
    </div>
  )
}
