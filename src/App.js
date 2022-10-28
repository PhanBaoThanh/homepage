import './App.scss';
import img from './img/img.svg'
import dom1 from './img/dom1.webp'
import dom2 from './img/dom2.webp'
import dom3 from './img/dom3.webp'
import dom4 from './img/dom4.webp'
import dom5 from './img/dom5.webp'
import dom6 from './img/dom6.webp'
import dom7 from './img/dom7.webp'
import dom8 from './img/dom8.webp'
import dom9 from './img/dom9.webp'
import dom10 from './img/dom10.webp'
import dom11 from './img/dom11.webp'
import dom12 from './img/dom12.webp'
import dom13 from './img/dom13.webp'
import dom14 from './img/dom14.webp'
import dom15 from './img/dom15.webp'
import course1 from './img/course1.webp'
import course2 from './img/course2.webp'
import course3 from './img/course3.webp'
import course4 from './img/course4.webp'
import course5 from './img/course5.webp'
import course6 from './img/course6.webp'
import course7 from './img/course7.webp'
import course8 from './img/course8.webp'
import course9 from './img/course9.webp'
import course10 from './img/course10.webp'
import course11 from './img/course11.webp'
import course12 from './img/course12.webp'
import course13 from './img/course13.webp'
import course14 from './img/course14.webp'
function App() {
  const dom = [
    {
      name: 'Color Flipper',
      link: 'https://phanbaothanh.github.io/flipper/',
      img: dom1
    },
    {
      name: 'Simple Counter',
      link: 'https://phanbaothanh.github.io/counter/',
      img: dom2
    },
    {
      name: 'Reviews/Quotes',
      link: 'https://phanbaothanh.github.io/review/',
      img: dom3
    },
    {
      name: 'Navbar',
      link: 'https://phanbaothanh.github.io/navbar/',
      img: dom4
    },
    {
      name: 'Sidebar',
      link: 'https://phanbaothanh.github.io/sidebar/',
      img: dom5
    },
    {
      name: 'Modal',
      link: 'https://phanbaothanh.github.io/modal/',
      img: dom6
    },
    {
      name: 'Questions',
      link: 'https://phanbaothanh.github.io/question/',
      img: dom7
    },
    {
      name: 'Menu',
      link: 'https://phanbaothanh.github.io/menu/',
      img: dom8
    },
    {
      name: 'Video',
      link: 'https://phanbaothanh.github.io/video/',
      img: dom9
    },
    {
      name: 'Scroll',
      link: 'https://phanbaothanh.github.io/scroll/',
      img: dom10
    },
    {
      name: 'Tabs',
      link: 'https://phanbaothanh.github.io/tabs/',
      img: dom11
    },
    {
      name: 'Countdown Timer',
      link: 'https://phanbaothanh.github.io/countdown/',
      img: dom12
    },
    {
      name: 'Lorem Ipsum',
      link: 'https://phanbaothanh.github.io/ipsum/',
      img: dom13
    },
    {
      name: 'Grocery Bud',
      link: 'https://phanbaothanh.github.io/todo/',
      img: dom14
    },
    {
      name: 'Slider',
      link: 'https://phanbaothanh.github.io/slider/',
      img: dom15
    },
  ]

  const courses = [
    {
      name: 'Counter',
      link: 'https://phanbaothanh.github.io/counters/',
      img: course1
    },
    {
      name: 'Gallery',
      link: 'https://phanbaothanh.github.io/gallery/',
      img: course2
    },
    {
      name: 'Numbers',
      link: 'https://phanbaothanh.github.io/numbers/',
      img: course3
    },
    {
      name: 'Dark Mode',
      link: 'https://phanbaothanh.github.io/darkmode/',
      img: course4
    },
    {
      name: 'Filters',
      link: 'https://phanbaothanh.github.io/filters/',
      img: course5
    },
    {
      name: 'Dad Jokes',
      link: 'https://phanbaothanh.github.io/dad-jokes/',
      img: course6
    },
    {
      name: 'Products',
      link: 'https://phanbaothanh.github.io/products/',
      img: course7
    },
    {
      name: 'Random User',
      link: 'https://phanbaothanh.github.io/random/',
      img: course8
    },
    {
      name: 'Cocktails',
      link: 'https://phanbaothanh.github.io/cocktails/',
      img: course9
    },
    {
      name: 'Slider',
      link: 'https://phanbaothanh.github.io/es6-slider/',
      img: course10
    },
    {
      name: 'Stripe Submenus',
      link: 'https://phanbaothanh.github.io/stripe/',
      img: course11
    },
    {
      name: 'Pagination',
      link: 'https://phanbaothanh.github.io/pagination/',
      img: course12
    },
    {
      name: 'Wikipedia',
      link: 'https://phanbaothanh.github.io/wiki/',
      img: course13
    },
    {
      name: 'Comfy Store',
      link: 'https://phanbaothanh.github.io/store/',
      img: course14
    },
  ]
  return (
    <div className="App">
      <div className='box whiteContent spacebetween'>
        <div className='boxContent'>
          <h2 className='boxContentHeader'>Javacript Projects</h2>
          <p className='boxContentText'>Projects are the most practical way to learn any language, and <span>Javascript</span> is no exception. Solidify your knowledge of Javascript by creating these cool projects.</p>
          <div className='boxContentBtn'>JOIN THE COURSE</div>
        </div>
        <div className='boxContentImg'>
          <img src={img} alt='ptc' />
        </div>
      </div>
      <div className='box'>
        <h2 className='header'>
          DOM Projects
          <div className='line'></div>
        </h2>
        <div className='items'>
        {
          dom.map((item,index) => (
            <div className='item' key={index}>
              <div className='itemContent'>
                <a target='__blank' href={item.link} className='itemContentLink'>
                  <img src={item.img} alt='ptc' />
                  <div className='itemContentText'>{item.name}</div>
                </a>
              </div>
            </div>
          ))
        }
        </div>
      </div>

      <div className='box'>
        <h2 className='header'>
        Course Exclusive
          <div className='line'></div>
        </h2>
        <div className='items'>
        {
          courses.map((item,index) => (
            <div className='item' key={index}>
              <div className='itemContent'>
                <a target='__blank' href={item.link} className='itemContentLink'>
                  <img src={item.img} alt='ptc' />
                  <div className='itemContentText'>{item.name}</div>
                </a>
              </div>
            </div>
          ))
}
        </div>
      </div>
    </div>
  );
}

export default App;
