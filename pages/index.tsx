import Card from "@/components/Card";
import { Space_Grotesk } from "@next/font/google";
import { arts } from "@/data";
import Header from "@/components/Header";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import CTASection from "@/components/CTASection";

const space = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={space.className}>
      < Header/>

      {/* Cards grid section */}

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 px-6 lg:px-8 py-12 mx-auto">
        {arts.map((art) => (
          <Card
            imgAlt={art.imageAlt}
            imgSrc={art.imageSrc}
            title={art.title}
            views={art.views}
            key={art.id}
          />
        ))}
      </div>
        {/* START BIDDING SECTION */}

        <div className="py-12">
        <div className="flex flex-col px-8 lg:px-0 lg:flex-row justify-between max-w-3xl mx-auto text-gray-900 uppercase gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 lg:gap-2">
            <span className="font-medium text-base tracking-widest">
              Children of
            </span>
            <h1 className="font-bold text-5xl">
              forgotten <br />
              god
            </h1>
          </div>
          <div className="flex flex-row gap-16 items-center">
            <p className="text-sm font-medium tracking-wider">
              explore more artworks
            </p>
            <ArrowDownCircleIcon
              className="h-8 w-8 text-gray-700"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex justify-end max-w-6xl mx-auto px-8 lg:px-0 pt-16 lg:pt-0">
          <button className="px-4 py-2 bg-gray-900 text-gray-50 font-normal text-xs">
            START BIDDING
          </button>
        </div>
      </div>

      {/* ARTICLE GRID SECTION */}

      <div className="py-24 mx-auto max-w-2xl gap-4 flex flex-col">
        <p className="text-center text-base font-normal">
          Pellentesque ut consectetur nulla
        </p>
        <div className="text-6xl">
          <h1>
            <strong className="font-bold">Eget quis</strong> ultrices id
          </h1>
          <div className="flex flex-row gap-5">
            <h1>
              eu nec <strong className="font-bold">nulla.</strong>
            </h1>
            <button className="text-2xl font-medium px-4 py-2 rounded-full border  border-gray-900">
              Sometimes
            </button>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}