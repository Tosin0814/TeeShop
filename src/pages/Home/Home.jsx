import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      <div className='contentContainer d-flex'>
        <aside className='sideBar'>
          <p>All Products</p>
          <p>Categories</p>
          <p>Recommended</p>
        </aside>
        <div className='mainContent'>
          <h3>Home</h3>
        </div>
      </div>
    </div>
  )
}
