import './home-page.css'

function HomePage() {
  return <div className="home-page-container">
    <h1 className="home-page-title">Home Page</h1>
    <div className='contact-me'> <div>need help? have more ideas? text me :)</div> 
    <a href="https://www.linkedin.com/in/amit-the-developer/" target="_blank" rel="noopener noreferrer">
    <img width="30" height="30" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
    </a>
    </div>
  </div>;
}

export default HomePage;
