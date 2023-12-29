import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useContext, useMemo } from "react";
import { MainStateContext } from "../../contexts/state";

export default function Filter() {

  const { state: { downloadCostumerFilter, downloadMonthFilter, invoicesData },
   buildActionsFunc } = useContext(MainStateContext);

  const handleInputChange = (event: SelectChangeEvent<string>, func: any) => {
    func(event.target.value);
  }

  const numberList = useMemo(() => {
    return invoicesData.numbers?.map(costumerNumber => 
    <MenuItem value={costumerNumber?.costumerNumber} key={costumerNumber?.costumerNumber}>
      {costumerNumber?.costumerNumber}</MenuItem>)
  } , [invoicesData.numbers])

  const billsMonthList = useMemo(() => {
    return invoicesData.billsMonths?.map(month => 
    <MenuItem value={month} key={month}>{month}</MenuItem>)
  }, [invoicesData.billsMonths]);

  console.log(invoicesData)

  return (
    <section className="w-full flex flex-col p-10 bg-slate rounded-2xl mt-5">
        <h2 className="text-black font-bold text-lg">FILTRO</h2>

        <section className="p-8 flex w-full gap-20">
              <section className="w-1/2">
                <h4>Cliente</h4>
                  <Select
                   className="w-full"
                   value={downloadCostumerFilter}
                   onChange={(e) => handleInputChange(e, buildActionsFunc.setDownloadCostumerFilter)}
                   >
                    {numberList}
                </Select>
            </section>
              <section className="w-1/2">
                  <h4>Mês</h4>
                  <Select
                   className="w-full"
                   value={downloadMonthFilter}
                   onChange={(e) => handleInputChange(e, buildActionsFunc.setDownloadMonthFilter)}
                   >
                      {billsMonthList}
                  </Select>
              </section>
        </section>

    </section>
  )
}
