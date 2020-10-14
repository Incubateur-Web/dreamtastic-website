import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import HeaderProfileSubmenu from "./HeaderProfileSubmenu";
import { useClickAway } from "react-use";

export default function HeaderProfile() {
  const [isConnected, setIsConnected] = useState(false);
  const [displaySubMenu, setDisplaySubMenu] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setDisplaySubMenu(false);
  });

  const handleConnection = () => {
    setIsConnected(true);
  };

  const handleDisconnection = () => {
    setIsConnected(false);
  };

  return (
    <div
      className={
        "mx-auto flex cursor-pointer transition duration-150 " +
        (!isConnected && "my-auto")
      }
    >
      {isConnected ? (
        <div
          ref={ref}
          className="relative"
          onClick={() => setDisplaySubMenu((prevState) => !prevState)}
        >
          <div className="hover:opacity-75 h-full flex">
            <div className="w-8 h-8 my-auto rounded-full flex overflow-hidden">
              <img
                alt="profileAvatar"
                className="rounded-full m-auto"
                src={process.env.PUBLIC_URL + "/logo512.png"}
              />
            </div>
            <div className="my-auto px-2">Jean Valjean</div>
            <div className="my-auto mx-1">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <HeaderProfileSubmenu
            visible={displaySubMenu}
            onDisconnection={handleDisconnection}
          />
        </div>
      ) : (
        <>
          <div
            onClick={handleConnection}
            className="active-bounce-button px-3 py-1 border rounded hover:bg-white transition duration-150 hover:text-blue-800"
          >
            Connexion <FontAwesomeIcon icon={faSignInAlt} />
          </div>
        </>
      )}
    </div>
  );
}