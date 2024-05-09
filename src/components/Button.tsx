import './Button.css';

interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
}

const Button = ({ title, type = 'button', onClick, style }: Props) => {
  return (
    <button onClick={onClick} type={`${type ?? 'button'}`} className={`Button Button_${style}`}>
      {title}
    </button>
  );
};

export default Button;
