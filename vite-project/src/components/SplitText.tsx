import "../styles/split-text.css";

interface Props {
  children: string;
  stagger?: number;
  className?: string;
}

export function SplitText({ children, stagger = 0.04, className = "" }: Props) {
  return (
    <span className={`split-text ${className}`.trim()} aria-label={children}>
      {Array.from(children).map((char, index) => (
        <span
          key={index}
          className="split-text__char"
          aria-hidden="true"
          style={{ animationDelay: `${index * stagger}s` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
