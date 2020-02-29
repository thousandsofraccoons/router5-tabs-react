import { useState, useEffect, KeyboardEvent } from 'react'
import { Tab } from './typings'

export const useTabs = (tabs: Array<Tab>, router = () => null) => {
  const {
    route: { name, params },
    router: { navigate },
  } = router() || {
    route: { name: null, params: { tab: null } },
    router: { navigate: null },
  }

  const [currentTab, setCurrentTab] = useState<string>(
    params?.tab || tabs[0].name
  )

  useEffect(() => {
    const handleBackHistory = (e: { state: { params: { tab: string } } }) =>
      setCurrentTab(e.state.params.tab)

    window.addEventListener('popstate', handleBackHistory)
    return () => {
      window.removeEventListener('popstate', handleBackHistory)
    }
  }, [])

  useEffect(() => {
    if (currentTab !== params?.tab) {
      const temp = { ...params } || { tab: null }
      temp.tab = currentTab
      navigate && navigate(name, temp)
    }
  }, [currentTab, params.tab, navigate, name, params])

  const getIndex = tabEl => currentTab === tabEl.name
  let childrenIndex = tabs.findIndex(getIndex)

  const handleKeyboard = (e: KeyboardEvent, pressed: string): void => {
    const nextChildren = tabs[childrenIndex + 1]?.name
    const prevChildren = tabs[childrenIndex - 1]?.name

    if (e.keyCode === 13) {
      setCurrentTab(pressed)
    } else if (e.keyCode === 39 && nextChildren) {
      setCurrentTab(nextChildren)
    } else if (e.keyCode === 37 && prevChildren) {
      setCurrentTab(prevChildren)
    }
  }

  const isCurrent = (name: string): boolean => name === currentTab

  return {
    handleKeyboard,
    childrenIndex,
    isCurrent,
    setCurrentTab,
  }
}
