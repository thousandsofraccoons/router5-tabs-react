import React, { FunctionComponent } from 'react'
import { TabsProps } from './typings'
import { useTabs } from './hooks'

const Tabs: FunctionComponent<TabsProps> = ({
  children,
  tabs,
  dataCy = 'tabs',
  router,
  classes: {
    wrapper = 'w-full',
    contentSection,
    tab = 'tab-label flex items-center py-4 px-12 rounded-t-lg',
    svgIcon = 'fill-current',
    buttons = 'flex relative py-4',
    tabInactive = 'hover:bg-gray-600 hover:text-white cursor-pointer transition',
    tabActive = 'bg-gray-900 text-white hover:bg-gray-800',
  } = {},
}) => {
  const { handleKeyboard, childrenIndex, isCurrent, setCurrentTab } = useTabs(
    tabs,
    router
  )

  function TabNavigation(): React.ReactElement {
    return (
      <>
        {tabs.map(currentTab => {
          const isCheckedStatus = isCurrent(currentTab.name)
          return (
            <button
              className={`${tab} ${isCheckedStatus ? tabActive : tabInactive}`}
              key={currentTab.name}
              role='tab'
              type='button'
              disabled={currentTab.disabled}
              tabIndex={0}
              autoFocus={isCheckedStatus || false}
              onClick={() => setCurrentTab(currentTab.name)}
              onKeyUp={e => handleKeyboard(e, currentTab.name)}
              aria-disabled={currentTab.disabled}
              aria-selected={isCheckedStatus}
            >
              {typeof currentTab?.label === 'string'
                ? currentTab?.label
                : React.cloneElement(currentTab?.label, {
                    className: svgIcon,
                  })}
            </button>
          )
        })}
      </>
    )
  }

  return (
    <div data-cy={dataCy} className={wrapper}>
      <nav role='tablist' className={buttons}>
        <TabNavigation />
      </nav>
      <section aria-live='polite' className={contentSection}>
        {children.map((child, idx) =>
          React.cloneElement(child, {
            role: 'tabpanel',
            ...(childrenIndex !== idx && { hidden: true }),
          })
        )}
      </section>
    </div>
  )
}

export default Tabs
