export type Tab = {
  name: string
  label: React.ReactElement | string
  disabled?: boolean
}

export type TabsProps = {
  children: Array<React.ReactElement>
  tabs: Array<Tab>
  dataCy?: string
  classes?: {
    wrapper?: string
    contentSection?: string
    label?: string
    svgIcon?: string
    buttons?: string
    label?: string
    tabInactive?: string
    tabActive?: string
    tab?: string
    test: string
  }
}
