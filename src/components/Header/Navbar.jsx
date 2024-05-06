import logo from "../../assets/logo.png";

const Navbar = () => {
   return(
     <>  
         <div className="header">
            <img src={logo} alt="Logo"/>
            <h1 className="logo"> रसोई </h1>
            
            <ul className="tabs">
               <li>Home</li>
               <li>Quote</li>
               <li>Resturant</li>
               <li>Foods</li>
               <li>Contact</li>
            </ul>

            <button>Get Started</button>
         </div>   
     </>
   )
 }
 
 export default Navbar;