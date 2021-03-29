import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { TypeContext } from "../../contexts/TypeContext";
import { TopicsContext } from "../../contexts/TopicsContext";

export function SearchDreams() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const { types } = useContext(TypeContext);
  const { topics } = useContext(TopicsContext);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="relative w-full md:w-1/2 h-12">
      <div
        className="absolute top-0 left-0 right-0 shadow-search-bar rounded-2xl z-50 overflow-hidden"
        ref={ref}
      >
        <div
          role="button"
          onClick={() => setOpen((prev) => !prev)}
          className={clsx(
            "flex w-full bg-white px-6 py-3 flex-col",
            open ? "rounded-t-2xl" : "rounded-2xl"
          )}
        >
          <div className="space-x-2 flex items-center">
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <span className="text-gray-600">Quels rêves recherchez vous ?</span>
          </div>
        </div>

        <div
          className={clsx(
            !open && "hidden",
            "top-12 left-0 right-0 bg-white z-40 border-t"
          )}
        >
          <div className="divide-y">
            <div className="flex">
              <div className="text-lg w-1/3 p-4 border-r">
                <span className="text-violet text-xl font-bold uppercase">
                  Type du rêve
                </span>

                <div className="flex flex-col">
                  {types.map((type) => (
                    <label className="space-x-2" key={type.id}>
                      <input type="checkbox" />
                      <span>{type.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="w-2/3 p-4">
                <span className="text-violet text-xl font-bold uppercase">
                  Thème
                </span>
                <div className="flex flex-wrap">
                  {topics.map((type) => (
                    <label className="space-x-2 w-1/2" key={type.id}>
                      <input type="checkbox" />
                      <span>{type.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-6 pb-4 px-4 space-x-6 flex justify-end items-center">
              <span role="button" className="text-violet underline">
                Effacer les filtres
              </span>
              <button className="rounded-full bg-dark-violet hover:bg-light-violet text-white font-bold px-6 py-2 uppercase focus:outline-none">
                Appliquer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}