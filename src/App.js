import './App.css';
import Img from './assets/images/hero-desktop.jpg'
import logo from './assets/images/logo.svg'
import arrow from './assets/images/icon-arrow.svg'
function App() {
  return (
    <div className="App">
      <div className='content'>
         <img src={logo} alt='logo'/>
         <h1><span className='regular'>WE'RE</span> COMING SOON</h1>
         <p className='des'>Hello fellow shopers! We're currently building our new fashion store. Add your Email below to stay 
         up-to-date with announcements and launching deals.</p>
         <form>
           <input type='email' id='email' placeholder='Email Address'/>
           <button type='submit'><img src={arrow} alt='Enter'/></button>
         </form>
         <p className='errorMsg'>Please provide a valid email</p>
      </div>
      
      <div className='image' >
        <img  src={Img} alt='hero'/>
        </div>

    </div>
  );
}

export default App;
