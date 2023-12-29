import { createContext, useEffect, useReducer } from "react"
import { mainStateValue } from "./state";
import { ModelChildren } from "../../utils/models/modelChildren";
import { mainStateReducer } from "./reducer";
import { buildActions } from "./actions";
import { getInvoiceData } from "../../services/invoiceApiService";

interface MainStateProps extends ModelChildren {}

const mainContext = {
  state: mainStateValue,
  buildActionsFunc: buildActions({})
}

export const MainStateContext = createContext(mainContext); 

export default function MainState({children}: MainStateProps) {

  const [state, dispatch] = useReducer(mainStateReducer, mainStateValue);
  const buildActionsFunc = buildActions(dispatch);

    const getInvoicesFectchData = async () => {
      const result = await getInvoiceData();
      const billsMonths = [...new Set(result.map(invoice => invoice.billMonth))];
      const numbers =  [...new Set(result.map(invoice =>  invoice.customerNumber))].map(
        number => {
          const invoice = result.find(inv => inv.customerNumber === number);
          return {
            costumerNumber: number,
            installationNumber: invoice.installationNumber,
          }
        }
      )

      buildActionsFunc.setInvoicesData({billsMonths, numbers})
    }

    useEffect(() => {
      getInvoicesFectchData();
    }, [])

  return (
    <MainStateContext.Provider value={{state, buildActionsFunc}}>
        {children}
    </MainStateContext.Provider>
  )
}
