import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import Form from "./components/Form";
import Pic from "./assets/Pic.jpg";

const App = () => {
  return (
    <div>
      <Profile
        name={"Parnian Zarbafian"}
        image={Pic}
        bio={
          "Hi, My name is Parnian. I am a jounior web developer based in Toronto, canada."
        }
      />
      <br />
      <h2>Contact Me. </h2>
      <br />
      <Form />
      <br />
      <br />
      <LinkButton
        href={"https://www.linkedin.com/in/parnian-zarbafian/"}
        label={"LinkedIn"}
      />
      <LinkButton href={"https://github.com/Parnian-Zrb/"} label={"GitHub"} />
      <LinkButton href={"../../src/Resume.pdf"} label={"Resume"} />
    </div>
  );
};

export default App;
