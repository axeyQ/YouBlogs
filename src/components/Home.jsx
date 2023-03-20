import React from "react";
import { Link } from "react-router-dom";

import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home=()=>{
    return <>
        <div className="home" id="home">
        <main >
            <h1>YouBlogs!</h1>
            <p>You write, we'll read</p>
            <div className="button"><Link to="/login">Join us for free</Link></div>
            

        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                The writer needs a reader as Mr Kanye needs 
                Mr West
                and We would like to become your Kanye,Mr West and
                also may be you can find a "ye" in the journey 
                so let us help you Mr/Ms Kanye West. 

            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue. Tortor at risus viverra adipiscing at in tellus integer. Rhoncus est pellentesque elit ullamcorper dignissim. Maecenas pharetra convallis posuere morbi leo. Nec feugiat nisl pretium fusce id velit. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Sit amet nisl suscipit adipiscing. At consectetur lorem donec massa sapien faucibus et molestie ac. Ac turpis egestas integer eget. Morbi tristique senectus et netus et malesuada fames. Placerat in egestas erat imperdiet sed. Nunc vel risus commodo viverra maecenas accumsan lacus vel.

Ligula ullamcorper malesuada proin libero nunc. gravida rutrum. Sit amet cursus sit amet dictum sit amet. Feugiat in ante metus dictum at tempor commodo. Eget arcu dictum varius duis. Elementum tempus egestas sed sed. Et ligula ullamcorper malesuada proin libero nunc consequat. In ornare quam viverra orci sagittis eu volutpat. Semper risus in hendrerit gravida rutrum quisque non. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Arcu risus quis varius quam quisque. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Viverra orci sagittis eu volutpat odio facilisis mauris. Consequat nisl vel pretium lectus quam id leo. Ut placerat orci nulla pellentesque.</p>
        </div>
    </div>
    <div className="home4" id="features">
        <div>
            <h1>Features</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s",
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"0.9s",
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    </>
}
export default Home