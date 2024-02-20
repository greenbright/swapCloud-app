import './App.css';
import {useState} from 'react'
import { IoCloudCircleSharp } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const[show,setShow] = useState(false);
  const [giftcard,setGiftcard] = useState(false);
  const [crypto,setCrypto] = useState(false)
  const [nft,setNft] = useState(false)

  const handleSwap=()=>{
    setShow(!show)
     console.log('checking my click event')
     
    
  }
  const handleCard=()=>{
    
      setGiftcard(!giftcard)
   
 }
 const handleCrypto=()=>{
  setCrypto(!crypto)
  
 
}
const handleNft=()=>{
  setNft(!nft)

}
  return (
    <div className="h-screen bg-black">
    <div className='swap-container bg-purple-900 '>
        <IoCloudCircleSharp className='cloud-logo'/>
        <h3 className='text-4xl mt-5 text-white text-center md:text-4xl mt-5 text-white text-center'>SwapCloud</h3>
      <div className='btn-container'>
      <div >
        
        <button className='swap-btn' onClick={handleSwap} >Crypto
         <FaArrowsRotate  className='icon-swap' />
         Cash </button>
       </div>
       <div >
        <button className='swap-btn' onClick={handleCard}>Crypto
         <FaArrowsRotate  className='icon-swap-1' />
         Giftcard </button>
       </div>
       <div >
        <button className='swap-btn' onClick={handleCrypto}>Crypto
         <FaArrowsRotate  className='icon-swap-2' />
        Crypto </button>
       </div>
      
      <div>
        <button className='swap-btn' onClick={handleNft}>Crypto 
        <FaArrowsRotate  className='icon-swap' />
        NFT</button>
        </div>
         {/* CRYPTO TO CASH 1 */}
    </div>
    {show && 
     <div className=''>
     <form>
       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl'>Amount(Usdt)</label>  <br></br>
       <input type='number' id="" className ="swap-input" placeholder='USDT'></input>
       </div>

       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl '>Cash(NGN)</label> <br></br>
       <input type='number' id=""  className ="swap-input" placeholder='NGN'></input>
       </div>
       <button className='swap-speed-btn'>Swap</button>
     </form>
   </div>
   }
   {/* CRYPTO TO GIFTCARD 2*/}
   {giftcard && 
     <div className=''>
     <form>
       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl'>Amount(BTC)</label>  <br></br>
       <input type='number' id="" className ="swap-input" placeholder='BTC'></input>
       </div>

       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl '>GiftCard(Q)</label> <br></br>
       <input type='number' id=""  className ="swap-input" placeholder='NGN'></input>
       </div>
       <button className='swap-speed-btn'>Swap</button>
     </form>
   </div>
   } 
   {/* CRYPTO TO CRYPTO 3*/}
   {crypto && 
     <div className=''>
     <form>
       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl'>Amount(Usdt)</label>  <br></br>
       <input type='' id="" className ="swap-input" placeholder='USDT'></input>
       </div>

       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl '>Amount(BNB)</label> <br></br>
       <input type='' id=""  className ="swap-input" placeholder='BNB'></input>
       </div>
       <button className='swap-speed-btn'>Swap</button>
     </form>
   </div>
   } 
   {/* CRYPTO TO NFT 4*/}
   {nft && 
     <div className=''>
     <form>
       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl'>Amount(Usdt)</label>  <br></br>
       <input type='' id="" className ="swap-input" placeholder='USDT'></input>
       </div>

       <div className=' mt-5 mb-5 ml-10'>
       <label className='mb-5 text-3xl '>NFT(G)</label> <br></br>
       <input type='' id=""  className ="swap-input" placeholder='Enter NFT code'></input>
       </div>
       <button className='swap-speed-btn'>Swap</button>
     </form>
   </div>
   } 
   <div className='social-icon flex ml-80 gap-9'>
   <FaFacebook className='text-3xl text-white '/> 
   <FaGoogle className='text-3xl text-white'/>
   <FaXTwitter className='text-3xl text-white'/> 
   <FaLinkedin className='text-3xl text-white'/>
   </div>
    </div>
    </div>
  );
}

export default App;
