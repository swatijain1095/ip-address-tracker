interface InputProps {
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
}

export const Input = ({
  className,
  placeholder = "Search for any IP address",
  style,
  type,
}: InputProps) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      style={style}
      type={type}
    />
  );
};
