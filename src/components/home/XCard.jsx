import { BsLightningCharge } from "react-icons/bs";
import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-router-dom";

function XCard() {
    return ( 
        <div className="relative p-8 shadow-md max-w-80 group  cursor-default">
            {/* line */}
            <div className="grouph-1 w-full h-1 absolute top-0 left-0 bg-gradient-to-r from-primary-start to-primary-end group-hover:from-primary-end group-hover:to-primary-start"></div>
            {/* Title */}
            <div className="font-black text-primary-end text-xl mb-4 group-hover:text-primary-start">Great Title</div>
            {/* text */}
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem magni iure maxime repudiandae est facilis hic maiores itaque fugiat.</div>
            {/* bottom */}
            <div className="mt-5 flex items-center justify-between">
                <Link to="/start">
                    <button type="button" class="flex items-center justify-evenly gap-2 text-black hover:text-primary-start hover:gap-4 transition-all duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Choose plan
                        <PiArrowRight />
                    </button>
                </Link>
                <div className="rounded-full p-3 cursor-pointer transition-all duration-150 hover:bg-gray-300 w-fit">
                    <BsLightningCharge color="#e31e78" fontSize="2rem" />
                </div>
            </div>
        </div>
     );
}

export default XCard;