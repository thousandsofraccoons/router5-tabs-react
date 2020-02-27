import { useRoute } from 'react-router5'
import { useState, useEffect } from 'react'
import { Tab } from './typings'

export const useTabs = (tabs: Array<Tab>) => {
  const {
    route: { name, params },
    router: { navigate },
  } = useRoute()
  const [currentTab, setCurrentTab] = useState<string>(
    params.tab || tabs[0].name
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
    if (currentTab !== params.tab) {
      const temp = { ...params }
      temp.tab = currentTab
      navigate(name, temp)
    }
  }, [currentTab, params.tab, navigate, name, params])

  const handleEnterPress = (e: KeyboardEventInit, pressed: string): void => {
    if (e.key === 'Enter') {
      setCurrentTab(pressed)
    }
  }

  const getIndex = tabEl => currentTab === tabEl.name
  const childrenIndex = tabs.findIndex(getIndex)

  const isCurrent = (name: string): boolean => name === currentTab

  return {
    handleEnterPress,
    childrenIndex,
    isCurrent,
    setCurrentTab,
  }
}
