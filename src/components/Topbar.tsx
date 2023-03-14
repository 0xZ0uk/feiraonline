import React from "react";

interface TopbarProps {
  message: string | React.ReactElement;
}

const Topbar: React.FC<TopbarProps> = ({ message }) => {
  return (
    <div className="flex h-8 items-center justify-center bg-green-900 text-xs text-white md:text-sm">
      {message}
    </div>
  );
};

export default Topbar;
