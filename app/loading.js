import { HeroSkeleton, ArtsAreaSkeleton, AuctionAreaSkeleton } from "./ui/skeletons"

export default function Loading() {
    return(
        <>
            <HeroSkeleton />
            <AuctionAreaSkeleton />
            <ArtsAreaSkeleton />
        </>
    ) 
}