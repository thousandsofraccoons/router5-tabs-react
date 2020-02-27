import React from 'react'

export const tabs = [
  {
    name: 'info',
    label: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <title>icons</title>
        <path d='M9.4,14.55c-2.58-2.7-3.83-4.27-1.69-5.88C9.6,7.25,9.94,6,8,3.29,6.26.77,5.57.18,3.61,2.28c-4.15,4.47-2.71,9,3,14.92s10.2,7.62,14.85,3.67C23.6,19,23,18.28,20.59,16.41c-2.64-2-3.89-1.74-5.39.08-1.7,2.06-3.21.75-5.8-1.94Z' />
      </svg>
    ),
  },
  {
    name: 'buyers',
    label: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <title>icons</title>
        <path d='M12.57,1.89l2.56,6.28a.62.62,0,0,0,.53.38l6.77.49a.62.62,0,0,1,.35,1.09l-5.18,4.37a.62.62,0,0,0-.2.62L19,21.72a.62.62,0,0,1-.93.67l-5.76-3.58a.62.62,0,0,0-.65,0L5.91,22.4A.62.62,0,0,1,5,21.72l1.62-6.59a.62.62,0,0,0-.2-.62L1.22,10.14a.62.62,0,0,1,.35-1.09l6.77-.49a.62.62,0,0,0,.53-.38l2.56-6.28A.62.62,0,0,1,12.57,1.89Z' />
      </svg>
    ),
  },
  {
    name: 'rails',
    label: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <title>icons</title>
        <path d='M11.74,1.22l-9.41,8a2.88,2.88,0,0,0-1,2.19v11a.59.59,0,0,0,.59.59H8.17a.59.59,0,0,0,.59-.59v-5a3.76,3.76,0,0,1,3.43-3.85,3.59,3.59,0,0,1,3.72,3.62v5.26a.59.59,0,0,0,.59.59h6.25a.59.59,0,0,0,.59-.59v-11a2.88,2.88,0,0,0-1-2.19l-9.41-8A.9.9,0,0,0,11.74,1.22Z' />
      </svg>
    ),
  },
]

export const hero = [
  {
    path:
      'https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80',
    title: 'Router5 react tabs',
    description: 'Tiny tabbed navigation component with SSR support',
  },
  // {
  //   path:
  //     'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80',
  //   title: 'Microdata support',
  //   description:
  //     'Sites using microdata to markup their breadcrumbs also have their trail displayed on google search results.',
  // },
  {
    path:
      'https://images.unsplash.com/photo-1448301858776-07f780e9c9da?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    title: 'Supports i18n',
    description: 'Just pass your translation function',
  },
  // {
  //   path:
  //     'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80',
  //   title: 'Use custom icons',
  //   description: 'By default component uses SVG label',
  // },
  {
    path:
      'https://images.unsplash.com/photo-1446133132410-19df4d6610a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80',
    title: 'Utility first CSS & Tailwind',
    description: 'Classic stylesheet usage demonstrated in Codesandbox example',
  },
  {
    path:
      'https://images.unsplash.com/photo-1506146829809-ecf5010c774f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80',
    title: 'Semantics and accessibility',
    description: 'Keyboard navigation and WAI-ARIA support',
  },
]

export const features = [
  {
    title: 'TypeScript support',
    text: 'Tabs component utilizes React hooks and written with Typescript.',
  },
  {
    title: 'Easy-to-use',
    text: (
      <>
        Specify captions, pass children component to{' '}
        <strong className='bg-gray-200'>{`<Tabs />`}</strong> and you all set
      </>
    ),
  },
  {
    title: 'Translatable',
    text:
      'Tab captions using translation function. Just pass your react-i18n instance.',
  },
]
