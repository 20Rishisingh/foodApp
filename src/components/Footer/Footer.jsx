import logo from "../../assets/logo.png";

const Footer = () =>{
   return(
      <div className="footer">
         <div className="footer-logo">
            <img src={logo} alt="Logo"/>
            <h1 className="logo"> रसोई </h1>
         </div>
         <p>A destination for all types of Indian food. From Norths <b><i>Chhole-kulche</i></b> to Souths <b><i>Idli-Dosa</i></b>.</p>

         <ul className="links">
            <li> <a href="#" className="hero"> About </a></li>
            <li> <a href="#" className="hero"> Careers </a></li>
            <li> <a href="#" className="hero"> Services </a></li>
            <li> <a href="#" className="hero"> History </a></li>
            <li> <a href="#" className="hero"> Blog </a></li>
         </ul>

      </div>
   )
}

export default Footer;