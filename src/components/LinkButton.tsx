import "./LinkButton.css";

interface LinkButtonProps {
  href: string;
  label: string;
}

const LinkButton = ({ href, label }: LinkButtonProps) => {
  return (
    <div className="input">
      <button className="button">
        <a href={href} target="_blank">
          {label}
        </a>
      </button>

      {/* <button className="button">
            <a href="https://www.linkedin.com/in/parnian-zarbafian/" target="_blank"> LinkedIn </a>
        </button> */}
      {/* <button className="button">
            <a href="https://github.com/Parnian-Zrb" target="_blank"> GitHub </a>
        </button> 
        <button className="button">
            <a href="../../src/Resume.pdf" target="_blank" > Resume </a>
        </button> */}
    </div>
  );
};

export default LinkButton;
