export default function TopMenu() {
    const menu_items = {
        Home: '#top',
        About: '#about-title',
        Services: '#services-container',
        Contact: '#contact'
    }
  return (
    <div id="topMenu">
    <img id="menu-logo" src="/images/BarbellCircle-2.png" alt="logo" />
    <div id="navBar">
    {Object.entries(menu_items).map(([key, value]) => (
        <a href={value} className="navItem" key={key}>{key}</a>
    ))}
    </div>
  </div>
  )
}

