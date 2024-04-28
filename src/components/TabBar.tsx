import { FC, useState } from "react";

interface Props {
  className?: string;
  navTitle?: string[];
  navLink?: string[];
}

const TabBar: FC<Props> = ({ navTitle = [], className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className={`nav-background ${className} ${"active-" + activeIndex}`}>
      <ul className="flex gap-1">
        {navTitle.map((title, index) => (
          <li key={title} className="nav-item">
            <button
              key={index}
              className={`nav-link ${index === activeIndex ? "nav-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
