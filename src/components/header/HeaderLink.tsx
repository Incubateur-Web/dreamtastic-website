import React from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string;
  text: string;
  active: boolean;
  onClick?(): void;
};

export default function HeaderLink({ path, text, active, onClick }: Props) {
  return (
    <Link
      className={
        "my-auto w-full md:w-40 p-4 transition duration-150 hover:bg-blue-900 border-b-2 " +
        (active
          ? "border-white hover:border-white"
          : "border-blue-800 hover:border-blue-900")
      }
      to={path}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}