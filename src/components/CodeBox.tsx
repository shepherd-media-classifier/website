import React from "react";

interface CodeBoxProps {
  children: string;
}

export const CodeBox: React.FC<CodeBoxProps> = ({ children }) => (
  <div className="code-container">
    <code>{children}</code>
    <div className="icon-wrapper">
      <picture className="copy-icon">
        <source
          srcSet={new URL("../assets/Copy_light.svg", import.meta.url).href}
          media="(prefers-color-scheme: light)"
        />
        <img
          src={new URL("../assets/Copy.svg", import.meta.url).href}
          alt="copy"
          width={15}
          height={15}
        />
      </picture>
    </div>
  </div>
);
