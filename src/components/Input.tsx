interface InputProps {
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
}

export const Input = ({
  className,
  placeholder = "Search for any IP address",
  style,
}: InputProps) => {
  return (
    <input className={className} placeholder={placeholder} style={style} />
  );
};
