import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: rgba(0, 0, 0, 0.05);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
      .h-5 {
        height: 20px;
      }

      .h-6 {
        height: 24px;
      }
      .w-5 {
        width: 20px;
      }

      .w-6 {
        width: 24px;
      }
      .text-red {
        color: red;
      }
      .text-grey {
        color: grey;
      }
      .ghost-button {
        border: none;
        background: none;
        border-radius: 4px;
        display: grid;
        place-content: center;
        padding: 6px;
        transition: background 0.15s ease-in;
      }
      .ghost-button:hover {
        background: white;
      }
      .icon-button {
        display: flex;
        align-items: center;
      }
      .icon-button span {
        font-size: 18px;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
  </div>
);

export default Layout;
