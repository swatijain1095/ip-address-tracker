interface InputProps {
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input = ({
  className,
  placeholder = "Search for any IP address",
  style,
  type,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      style={style}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
