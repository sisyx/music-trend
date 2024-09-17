import { useState } from "react";
import Toolbars from "./Toolbars";
import CampaignsList from "./CampaignsList";
import AddCampaign from "./AddCampaign";
import AddPublisher from "./AddPubliser";
import EditPublisher from "./EditPublisher";

function Main({ campaings, dispatch }) {
    
    const [state, setState] = useState("adding publisher");
    const type = campaings?.find(camp => camp.selected)?.type;

    
    return ( 
        <div className="h-screen p-2 flex">
            {/* campaigns */}
            <div className="p-1 flex-1">
                {
                    state === "adding campaign" 
                    ? <AddCampaign dispath={dispatch} />
                    : state === "adding publisher" 
                    ? <AddPublisher campaings={campaings} /> 
                    : <EditPublisher campaings={campaings} />
                }
                {/* <span>
                    {
                        state
                        }
                        </span> */}
            </div>
            <div className={`w-96 h-full flex`}>
                <div>
                    <Toolbars type={type} setState={setState} state={state} />
                </div>
                <CampaignsList campaings={campaings} dispatch={dispatch} />
            </div>
        </div>
     );
}

export default Main;