import React from "react";

export const Footer = () => {
  return (
    <div className="footer-root flex flex-align-center flex-justify-between">
      <div>
        <span>© 2023, made for НПЦ ИРС</span>
      </div>
      <div className="flex gap-15">
        <a href="https://github.com/udomday">GitHub</a>
        <a href="https://t.me/udomday">Telegram</a>
      </div>
    </div>
  );
};
