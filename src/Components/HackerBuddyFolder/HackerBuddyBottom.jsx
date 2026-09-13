import Lightning from "./Lightning";
import HackerBuddyBottom2 from "./CatGirlGlow-250x250.webp";
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
            src={HackerBuddyBottom2}
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
