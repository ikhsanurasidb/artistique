import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

function HeroSkeleton(){
    return (
      <div className=" flex flex-col-reverse lg:flex-row lg:mt-[9vh] lg:min-h-[91vh] bg-neutral mt-[22vh] min-h-[90vh] skeleton bg-neutral">
        <div className="flex-1">
          <div className="skeleton bg-neutral text-2xl text-base-200 tracking-[.12em] mt-2 lg:mt-52 lg:ms-20 font-bold lg:text-3xl lg:text-base-200 text-center lg:text-start"></div>
          <div className="skeleton bg-neutral mt-8 lg:mb-16 lg:ms-20 text-base-200 text-center lg:text-start">
            <div className="skeleton bg-neutral tracking-[.38em] mt-8 mb-6"></div>
            <div className="skeleton bg-neutral btn w-20 lg:h-12 lg:w-44 btn-primary rounded-full text-neutral"></div>
          </div>
          <div className="skeleton bg-neutral mt-8 lg:ms-20 text-base-200 text-center lg:text-start">
            <div className="skeleton bg-neutral tracking-[.38em] mb-6"></div>
            <div className="skeleton bg-neutral btn w-20 mb-8 lg:h-12 lg:w-44 btn-primary rounded-full text-neutral"></div>
          </div>
        </div>
        <div className="skeleton bg-neutral flex-1 lg:flex-shrink-0 p-4">
          <div className="skeleton bg-neutral w-full h-full rounded-lg"></div>
        </div>
      </div>
    );
  };

// Skeleton Loading for AuctionArea
function AuctionAreaSkeleton() {
  return (
    <div className="mt-32" id="auction-area">
      <div className="min-h-[10vh] text-center p-4">
        <div className="skeleton bg-neutral text-2xl tracking-[.2em] mt-2 text-base-200 font-bold lg:text-5xl"></div>
      </div>
      <div className="flex gap-8 items-center justify-center min-h-[80vh] bg-neutral">
        <ArrowBack />
        <div className="flex-1 p-8 bg-primary text-base-200">
          <div className="grid grid-cols-4 gap-4 grid">
            {/* Skeletons for images */}
            {[...Array(8).keys()].map((index) => (
              <div
                key={index}
                className="skeleton bg-neutral rounded hover:scale-105 transform transition-all duration-500 ease-in-out"
              ></div>
            ))}
          </div>
          <CardContent>
            <div className="skeleton bg-neutral h-6 w-2/3 mb-4"></div>
            <div className="skeleton bg-neutral h-4 w-1/2"></div>
          </CardContent>
        </div>
        <ArrowForward />
      </div>
    </div>
  );
};

// Skeleton Loading for ArtsArea
function ArtsAreaSkeleton() {
  return (
    <div className="bg-neutral mt-32" id="arts-area">
      <div className="min-h-[10vh] p-4">
        <div className="skeleton bg-neutral text-2xl tracking-[.2em] text-center text-base-200 font-bold mb-16 lg:text-5xl"></div>
        {/* Skeletons for ArtCategories */}
        {[...Array(4).keys()].map((index) => (
          <div key={index} className="skeleton bg-neutral h-8 w-1/3 mb-4"></div>
        ))}
      </div>
    </div>
  );
};

export { HeroSkeleton, AuctionAreaSkeleton, ArtsAreaSkeleton };
  