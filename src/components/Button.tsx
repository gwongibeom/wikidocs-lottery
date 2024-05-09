import './Button.css';

interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: 'POSITIVE' | 'NEGATIVE' | '';
}

const Button = ({ title, type = 'button', onClick, style = '' }: Props) => {
  return (
    <button onClick={onClick} type={`${type}`} className={`Button Button_${style}`}>
      {title}
    </button>
  );
};

export default Button;
