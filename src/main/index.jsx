import './Hero.css'


export const Hero = () =>{
return(
    <section className='premium'>
        <div className='hero'>
         <h1 className='title'> Get Premium free for 1 month</h1>
         <p className='card'>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
         <div className='btn-style'>
         <button className='btn'>GET STARTED</button>
         <button className='btn-outline'>SEE OTHER PLANS</button>
         </div>
         <p className='terms'><u>Terms and conditions apply.</u> 1 month free not available for users who have already tried Premium.</p>
       </div>
    </section>
)
}