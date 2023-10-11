import './App.css';
import logo from './assets/images/logo.svg'
import arrow from './assets/images/icon-arrow.svg'
function App() {
  return (
    <>
    <img className='logo' src={logo} alt='logo'/>
    
          
          <div className='container'>

            <div className='left'>
              <h1><span className='regular'>WE'RE</span> <br/> COMING <br/> SOON</h1>
              <p className='des'>Hello fellow shopers! We're currently building our new fashion store. Add your Email below to stay 
              up-to-date with announcements and launching deals.</p>
              <form >
                <input  type='email' id='email' placeholder='Email Address'/>
                <button  type='submit'><img src={arrow} alt='Enter'/></button>
                
              </form>
              
            </div>   
          
            <div className='right' ></div>

          </div>        
          </>
  );
}

export default App;
