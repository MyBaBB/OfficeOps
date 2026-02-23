import { useEffect, useState } from "react";
import "./HackerBuddy.css";
import { GiLightningArc } from "react-icons/gi";
const LightningBolt = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const flashLightning = () => {
      const flashCount = Math.floor(Math.random() * 3) + 1;
      let flashIndex = 0;

      const flash = () => {
        setVisible((prev) => !prev);
        flashIndex++;
        
        if (flashIndex < flashCount * 2) {
          setTimeout(flash, Math.random() * 100 + 50);
        }
      };

      flash();
    };

    const timeoutId = setTimeout(() => {
      const interval = setInterval(flashLightning, Math.random() * 4000 + 2000);
      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className=" h-12 justify-center flex items-center">
      {visible && (
        <div className=" ">
          <p className="text-5xl text-[#22d3ee] ">
            <GiLightningArc />
          </p>
        </div>
      )}
    </div>
  );
};

export default LightningBolt;
