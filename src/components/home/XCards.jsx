import XCard from "./XCard";

function XCards() {
    return ( 
        <div className="min-h-screen flex flex-col items-center justify-center gap-12 pb-12 bg-white">
            <div className="flex items-center justify-evenly gap-12">
                <img src="/src/assets/images/services.png" />
                {/* title */}
                {/* <div className="text-primary font-black text-4xl w-full flex justify-center vazirmatn">خدمات</div> */}
            </div>
            {/* cards */}
            <div className="flex items-center justify-evenly gap-4 pt-8">
                <XCard />
                <XCard />
                <XCard />
                <XCard />
            </div>
        </div>
     );
}

export default XCards;