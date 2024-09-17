import { BiCopy } from 'react-icons/bi';
import styles from './CampaignsList.module.css';
import { Button, IconButton } from '@mui/material';
import { copy } from '../../functions'

function CampaignsList({ campaings, dispatch }) {

    function handleCopyLink(event, id, type) {
        event.stopPropagation();
        const host = location.hostname;
        if (host === "localhost") {
            const port = location.port;
            copy(`${host}:${port}/reports/${type === "instagram" ? "instagram" : "telegram"}?id=${id}`)
        } else {
            copy(`${host}/reports/${type === "instagram" ? "instagram" : "telegram"}?id=${id}`)
        }
    }

    return ( 
        <div className={`relative flex flex-col flex-1 bg-gray-900 border rounded-lg rounded-tl-none overflow-hidden ${campaings.find(camp => camp.selected)?.type === "telegram" ? "border-telegram" : "border-primary"} ${styles.campaings}`}>
            <div className={`w-full text-right pr-2 pt-1 pb-1 ${campaings.find(camp => camp.selected)?.type === "telegram" ? "bg-telegram" : "bg-gradient-to-r from-primary-start to-primary-end"}`}>لیست کمپین ها</div>
            {/* campaigns list */}
            {/* <div> */}
                <div className={`flex flex-col gap-2 mt-5 p-2 h-full overflow-scroll ${styles.list}`}>
                    {
                        campaings.map(campaign =>
                            <div 
                            className={`flex justify-between items-center p-2 text-right rounded-lg border-0 transition-all duration-100 cursor-pointer ${campaign.type === "instagram" ? "bg-primary border-r-primary" : "bg-telegram border-r-telegram"} ${campaign?.selected ? "bg-white text-black border-r-8 rounded-r-none" : ""} ${styles.campaign}`}
                            onClick={() => dispatch({type: "select", payload: {id: campaign.id, type: campaign.type}})}
                            >
                                <IconButton sx={{padding: "0"}} onClick={(event) => handleCopyLink(event, campaign.id, campaign.type)}>
                                    <BiCopy color={`${campaign?.selected ? "black" : "white"}`} />
                                </IconButton>
                                <span>
                                    {
                                        campaign.name
                                    }
                                </span>
                            </div>
                        )
                    }
                </div>
            {/* </div> */}
        </div>
     );
}

export default CampaignsList;