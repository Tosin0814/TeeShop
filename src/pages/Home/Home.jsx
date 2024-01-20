import { useState } from 'react'
import './Home.css'

export default function Home({user}) {
  const [homeContent, setHomeContent] = useState('allProducts')

  const handleHomeContentChange = (evt) => {
    // console.log(evt.target.name)
    setHomeContent(evt.target.name)
  }

  return (
    <div className='Home'>
      <div className='contentContainer d-flex'>
        <aside className='sideBar'>
          <div className='homeOptionButtons'>
            <button className='btn' name='allProducts' onClick={handleHomeContentChange}>All Products</button>
            <button className='btn' name='categories' onClick={handleHomeContentChange}>Categories</button>
            <button className='btn' name='wishList' onClick={handleHomeContentChange}>Wish List</button>
            <button className='btn' name='recommended' onClick={handleHomeContentChange}>Recommended</button>
          </div>
        </aside>
        <div className='mainContent'>
          { homeContent === 'allProducts' &&
          <>
          <div className='carousel'>
            <h3>Carousel of Products</h3>
          </div>
          <div className='productList'>
            <h3>Product List</h3>
          </div>
          </>
          }
          { homeContent === 'categories' &&
          <>
          <div className='category'>
            <h3>Category 1</h3>
            <p>Carousel</p>
          </div>
          <div className='category'>
            <h3>Category 2</h3>
            <p>Carousel</p>
          </div>
          <div className='category'>
            <h3>Category 3</h3>
            <p>Carousel</p>
          </div>
          <div className='category'>
            <h3>Category 4</h3>
            <p>Carousel</p>
          </div>
          </>
          }
          { homeContent === 'wishList' &&
          <>
          <div className='productList'>
            <h4>Wish List</h4>
          </div>
          </>
          }
          { homeContent === 'recommended' &&
          <>
          <div className='productList'>
            <h3>Recommended Products</h3>
          </div>
          </>
          }
        </div>
      </div>
    </div>
  )
}
