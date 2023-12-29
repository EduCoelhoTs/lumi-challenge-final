import { actionType } from "./actionsTypes";

export const buildActions = (dispatch: any) => ({
    setCostumerNumber: (payload: string) => dispatch({ type: actionType.setCostumerNumber, payload}),
    setDownloadCostumerFilter: (payload: string) => dispatch({ type: actionType.setDownloadCostumerFilter, payload}),
    setDownloadMonthFilter: (payload: string) => dispatch({ type: actionType.setDownloadMonthFilter, payload}),
    setInvoicesData: (payload: any) => dispatch({ type: actionType.setInvoicesData, payload})
})