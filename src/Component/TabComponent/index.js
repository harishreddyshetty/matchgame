import './index.css'

const TabComponent = props => {
  const {tabDetails, activeTab, changeActiveTab} = props
  const {displayText, tabId} = tabDetails

  const activeTabBtn = activeTab ? 'tab-item' : 'hide-line'
  const tabText = activeTab ? 'tab-name' : 'non-active-tab-name'

  const changeTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className="tab-item-element">
      <button onClick={changeTab} type="button" className={activeTabBtn}>
        <p className={tabText}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabComponent
