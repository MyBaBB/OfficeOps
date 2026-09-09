import Lightning from "./Lightning";
import HackerBuddyBottom from "./Hackerbuddy-125px.webp";
import "./HackerBuddy.css";

const HackerBuddyButton = () => {
  return (
    <>
      <a href="https://mybabb.com">
        <div
          className="hackerBuddyBottom dataToolTip2 dataToolTipStyles relative m-auto flex w-fit flex-col items-center"
          data-tool-tip="psst... There`s Way More!"
        >
          <Lightning />
          <img
            src={HackerBuddyBottom}
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
