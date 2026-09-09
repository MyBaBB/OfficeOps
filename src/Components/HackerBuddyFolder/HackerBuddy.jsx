import HackerBuddy from "./Hackerbuddy-125px.webp";
``;
import Lightning from "./Lightning";
import "./HackerBuddy.css";

const HackerBuddyButton = () => {
  return (
    <>
      <a href="https://mybabb.com" className="">
        <div className="hackerBuddyButtonHide absolute left-12 top-[10rem] z-10 hover:scale-95">
          <Lightning />
          <img
            src={HackerBuddy}
            alt="Hacker Buddy Batman
        "
            width={"100px"}
            height={"100px"}
          />
        </div>
      </a>
    </>
  );
};

export default HackerBuddyButton;
