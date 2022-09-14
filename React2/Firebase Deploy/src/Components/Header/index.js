import "./style.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/image-1.png"

function Header() {
    return (

        <div className="nav-bar">

            <div>
                <div className="logo">
                    <img src={img1} alt="no image" />
                </div>

                <div>
                
                <ul className="list">
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Contact Us</a></li>
                
                </ul>
                
                
                
                </div>





                
            </div>




            

        </div>






    );

}

export default Header;