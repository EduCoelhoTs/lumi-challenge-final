import { Action } from "../../utils/models/action";
import { actionType } from "./actionsTypes";
import { mainStateValue } from "./state";

export const mainStateReducer = (state = mainStateValue, action: Action) => {

    switch(action.type){

        case actionType.setCostumerNumber:
            return {
              ...state,
                costumerNumber: action.payload
            }

        case actionType.setDownloadCostumerFilter:
            return {
             ...state,
                downloadCostumerFilter: action.payload
            }
        
        case actionType.setDownloadMonthFilter:
            return {
            ...state,
                downloadMonthFilter: action.payload
            }

        case actionType.setInvoicesData:
            return {
           ...state,
            invoicesData: action.payload
            }

        default:
            return state;
    }
}