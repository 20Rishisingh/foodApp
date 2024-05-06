import Img from "../../assets/Profile.png";

const Profile = () => {
   return(
      <div className="profile">
         <img src={Img} alt="Profile-Img"/>

         <div className="profile-txt">
            <h1>Fresh and Healthy Food</h1>

            <p> Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form. Foods of India are better known for its spiciness. </p>

            <button> Menu </button>
         </div>
      </div>
      
   )
}

export default Profile;