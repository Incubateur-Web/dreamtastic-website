import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { PlusIcon } from "../icons/PlusIcon";

type Option = { name: string; id: string; [key: string]: any };

type Props = {
  options: Option[];
  limit?: number;
  onChange: (keys: string[]) => void;
};

export const CategoryPicker = ({ options, onChange, limit = 0 }: Props) => {
  const [pickedOptions, setPickedOptions] = useState<string[]>([]);

  useEffect(() => {
    onChange(pickedOptions);
  }, [onChange, pickedOptions]);

  return (
    <div className="flex space-x-2 relative">
      {options
        .filter((opt) => pickedOptions.includes(opt.id))
        .map((opt) => {
          return (
            <div
              key={opt.id}
              className="flex bg-white border border-main transition-colors divide-gray-200 rounded-full px-2 py-1 space-x-2 items-center text-white"
            >
              <div>
                <div
                  role="button"
                  className="bg-cyan rounded-full p-1 transform rotate-45"
                  onClick={() =>
                    setPickedOptions((prev) =>
                      prev.filter((val) => val !== opt.id)
                    )
                  }
                >
                  <PlusIcon fill="white" width={10} height={10} />
                </div>
              </div>
              <span className="pr-1 text-cyan uppercase">{opt.name}</span>
            </div>
          );
        })}

      {limit === 0 || pickedOptions.length < limit ? (
        <AddButton>
          <div className="absolute top-6 left-0 bg-white shadow-md p-0.5 rounded-md z-10 max-h-44 min-w-15 overflow-auto border">
            {options
              .filter((opt) => !pickedOptions.includes(opt.id))
              .map((opt) => {
                return (
                  <div
                    key={opt.id}
                    onClick={() =>
                      setPickedOptions((prev) => [...prev, opt.id])
                    }
                    role="button"
                    className="hover:bg-gray-200 px-3 py-2 rounded-md whitespace-nowrap"
                  >
                    {opt.name}
                  </div>
                );
              })}
          </div>
        </AddButton>
      ) : null}
    </div>
  );
};

const AddButton: FC = ({ children }) => {
  const [choiceOpen, setChoiceOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => setChoiceOpen(false));

  return (
    <div className="relative" ref={ref}>
      <div
        role="button"
        onClick={() => setChoiceOpen((prev) => !prev)}
        className="flex bg-dark-violet hover:bg-light-violet transition-colors divide-gray-200 rounded-full px-2 py-1 space-x-2 items-center text-white"
      >
        <div>
          <div className="bg-white rounded-full p-1">
            <PlusIcon fill="#7c16f6" width={10} height={10} />
          </div>
        </div>
        <span className="font-light pr-1">AJOUTER</span>
      </div>
      <div
        className={clsx(!choiceOpen && "hidden")}
        onClick={() => setChoiceOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};
