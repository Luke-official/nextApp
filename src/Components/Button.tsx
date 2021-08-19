interface IButton {
    className: string;
    cta: string;
}

const Button: React.FC<IButton> = ({cta, className}) => {
  return (
    <>
      <button className={className}>
      {cta}<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">
          {cta}_
        </span>
        <span aria-hidden className="cybr-btn__tag">
          R25
        </span>
      </button>
    </>
  );
};

export default Button;
