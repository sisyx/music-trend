import { Instagram } from "@mui/icons-material";
import { getInstaUser } from "../../functions";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

function InstagramTableRow({ publisher }) {
    const [imageStatus, setImageStatus] = useState({
        isLoading: true,
        isLoaded: false,
    })

    return ( 
        <tr className='bg-white hover:bg-gray-300 transition-all duration-100 cursor-pointer'>
            <td className='py-2'>
                {
                    publisher?.imgUrl
                    ? <img 
                        className="max-h-12 rounded-full"
                        src={
                            publisher?.imgUrl
                        } 
                        onLoad={() => setImageStatus(cur => {
                           return {...cur, isLoading: false, isLoaded: true}
                        })}
                        alt=""
                    />  
                    : ""
                }
                {
                    !imageStatus.isLoaded 
                    ? <CgProfile fontSize="2rem" />
                    : ""
                }
            </td>
            <td className='py-2'>{publisher.pageId}</td>
            <td className='py-2'>{publisher.showName}</td>
            <td className='py-2'>{publisher?.followesrs}</td>
            <td className='py-2'>{publisher?.postImpertion}</td>
            <td className='py-2'>{publisher?.postLikes}</td>
            <td className='py-2'>{publisher?.postViews}</td>
            <td className='py-2'>{publisher?.postComments}</td>
            <td className='py-2'>{publisher?.storyImpertion}</td>
            <td className='py-2'>{publisher?.storyViews}</td>
            <td>
                <a href={`${publisher?.postLink}`} className="text-2xl bg-gradient-to-r from-transparent to-transparent  hover:from-primary-start hover:to-primary-end hover:text-white duration-0 transition-all">
                    <Instagram sx={{fontSize: "2rem"}} />
                </a>
            </td>
        </tr>
     );
}

export default InstagramTableRow;