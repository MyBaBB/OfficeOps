import HackerBuddy from "./Hackerbuddy-125px.webp";``
 
import "./HackerBuddy.css";



const HackerBuddyButton = () => {
  return (
  <>
    <a href="https://mybabb.com">
     <div className="hackerBuddyButtonHide   absolute  top-[10rem] left-12  z-10 hover:scale-95 ">
        <img src={HackerBuddy} alt="Hacker Buddy Batman
        " width={"100px"} height={"100px"} />
     </div>
   </a> 
  </>
);
};

export default HackerBuddyButton;
