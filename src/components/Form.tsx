import "./Form.css";
import { useState } from "react";

// interface FormProps {
//   name: string;
//   email: string;
//   message: string;
//   handleClick: () => void;
// }
const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleClick = () => {
    alert("Thank you for sumitting the form");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={message}
          placeholder="Type Your  Message Here..."
          onChange={(event) => setMessage(event.target.value)}
        />
        <br />

        <button
          type="submit"
          onClick={handleClick}
          disabled={message.length <= 10}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
