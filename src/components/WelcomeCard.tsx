import { ShapesBackground } from "./background/ShapesBackground";
import Button from "./button/Button";

export const WelcomeCard = () => (
  <div className="my-14 relative">
    <ShapesBackground />
    <div className="container mx-auto px-4 md:px-0">
      <div className="px-4 md:mx-40 bg-white rounded-xl shadow-welcome-card md:pl-36 md:pr-10 flex items-center relative overflow-hidden">
        <div className="w-full md:w-4/6 pt-20 pb-14 space-y-6">
          <span className="text-title-cyan text-3xl md:text-5xl font-bold">
            Prêts à raconter tes rêves?
          </span>
          <div className="tracking-wide text-xl space-y-1">
            <p>
              De nombreux contributeurs ont déjà décrit leus plus beaux songes
              et leurs cauchemars les plus étranges.
            </p>
            <p>
              Nous n'attendons plus que toi pour comprendre davantage les
              manifestations de ton imagination !
            </p>
          </div>
          <Button
            link="/add-dream"
            extraClasses="px-8 py-2 font-bold text-md"
            uppercase
          >
            Il faut que je te raconte ce rêve...
          </Button>
        </div>
        <div className="flex-1 hidden md:block">
          <img src="/images/threeCircles.png" alt="three circles" />
        </div>
        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-welcome-top to-welcome-bot h-4"></div>
      </div>
    </div>
  </div>
);
