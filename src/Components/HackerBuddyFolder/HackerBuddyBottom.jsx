import Lightning from "./Lightning";
import HackerBuddyBottom from "./Hackerbuddy-125PX.webp";
import "./HackerBuddy.css";

 

const HackerBuddyButton = () => {
  return (
  <>
   

    <a href="https://mybabb.com" >
     <div className="hackerBuddyBottom relative flex flex-col  items-center w-fit m-auto  
     dataToolTip2 dataToolTipStyles font-LibreBaskerville-Regular"
                  data-tool-tip="psst... There`s Way More!"  >
      < Lightning /> 
        <img src={HackerBuddyBottom} alt="Hacker Buddy Batman
        " width={"100px"} height={"100px"} />
     </div>
   </a> 
  </>
);
};

export default HackerBuddyButton;
 
       
              
        