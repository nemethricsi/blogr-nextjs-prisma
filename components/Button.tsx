import { AddIcon } from "../lib/icons";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="icon-button">
      <AddIcon className="w-6 h-6" />
      <span>{children}</span>
    </button>
  );
};
