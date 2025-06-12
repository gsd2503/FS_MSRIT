import Exe1 from "./Exe1";
import Exe2 from "./Exe2";
import Exe3 from "./Exe3";
import Exe4 from "./Exe4";
import Exe5 from "./Exe5";
import Exe6 from "./Exe6";
import NewsletterSignup from "./Exe7";
import UserStatusSwitcher from "./Exe8";
import FeedbackPoll from "./Exe9";
import ExpenseTrackerInput from "./Exe10";
import ThemeSelector from "./Exe11";
import TextInputTracker from "./Exe12";
import ColorChanger from "./Exe13";
import Counter from "./Exe14";
import TechBugReportForm from "./Exe15";

import "./App.css";

function App() {
  const sampleFunc = () => {
    return "Hello!";
  };

  return (
    <>
      <p>Exe1</p>
      <Exe1 />
      <br />
      <p>Exe2</p>
      <Exe2 />
      <br />
      <p>Exe3</p>
      <div className="rest">
        <Exe3 />
      </div>

      <br />
      <p>Exe4</p>
      <Exe4 title="Full Stack" duration={4} name="SH" />
      <br />
      <p>Exe5</p>
      <Exe5 />
      <br />
      <p>Exe6</p>
      <Exe6
        propArray={[1, 2, 3]}
        propBool={"true"}
        propString="Sample"
        propFunc={sampleFunc}
        propNumber={42}
      />
      <hr />
      <br />
      <p>Exe7</p>
      <NewsletterSignup />
      <hr />
      <p>Exe8</p>
      <UserStatusSwitcher />
      <hr />
      <p>Exe9</p>
      <FeedbackPoll />
      <hr />
      <p>Exe10</p>
      <ExpenseTrackerInput />
      <hr />
      <p>Exe11</p>
      <ThemeSelector />
      <hr />
      <p>Exe12</p>
      <TextInputTracker />
      <hr />
      <p>Exe13</p>
      <ColorChanger />
      <hr />
      <p>Exe14</p>
      <Counter />
      <hr />
      <p>Exe15</p>
      <TechBugReportForm />
    </>
  );
}

export default App;
