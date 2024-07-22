import { PiArrowRight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Aboutus() {
    return ( 
        <div className="bg-gray-100 h-screen flex justify-center">
            {/* inner container */}
            <div className="flex items-center max-w-6xl">
                {/* Left */}
                <div className="w-1/2 flex flex-col items-start gap-12 group">
                    {/* title */}
                    <div className="font-black text-primary-end text-4xl group-hover:text-primary-start transition-all duration-200">Who Are We</div>
                    {/* text */}
                    <div className="relative first-letter:text-primary-start first-letter:text-3xl text-justify pl-2 before:content-[''] before:absolute before:block before:h-0 group-hover:before:h-full before:w-1 before:bg-gradient-to-b before:from-primary-start before:to-primary-end before:left-0 before:transition-all before:duration-500 cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum necessitatibus quis sit, omnis, dolor laudantium velit, earum aliquam minus voluptatum eos beatae molestiae. Atque non laborum dicta itaque necessitatibus ducimus officiis dolorem veniam quam ratione hic sunt unde aliquam blanditiis dolores animi omnis cum amet, iure deleniti doloribus quae nulla. Voluptatibus tempore est facere! Accusantium blanditiis quos dolore? Rerum dolorem illo laudantium adipisci explicabo expedita odio cum minima corrupti harum. Fugit beatae, provident a necessitatibus sint corporis non? Nulla corporis inventore similique, delectus magni hic incidunt dolores recusandae corrupti dolore aspernatur explicabo eos, nihil libero repellendus debitis totam velit.
                    </div>
                    {/* button */}
                    <Link to="/aboutus">
                        <button type="button" class="flex items-center justify-evenly gap-2 text-black hover:text-primary-start hover:gap-4 transition-all duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Know More
                            <PiArrowRight />
                        </button>
                    </Link>
                </div>
                {/* Right */}
                <div className="w-1/2 flex items-center justify-center">
                    <img src="/src/assets/images/services.png" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Aboutus;