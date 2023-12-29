import Filter from "./Filter";
import EletricPowerConsumption from "./charts/EletricPowerConsumption";
import TotalValue from "./charts/TotalValue";
import { getInvoiceCompiledData } from "../../services/invoiceApiService";
import { useContext, useEffect, useState, } from "react";
import { MainStateContext } from "../../contexts/state";
import { InvoiceCompiledData } from "../../utils/models/invoice";

export default function Dashboard() {

  const {state } = useContext(MainStateContext);

  const [data, setData] = useState<InvoiceCompiledData[]>([])

  const getInvoices = async () => {
    const result = await getInvoiceCompiledData(state.costumerNumber);
    setData(result);
  };

  useEffect(() => {
    getInvoices();
  }, [state.costumerNumber])

  return (
    <main>
      <section className="w-full flex justify-between items-center">
        <h2 className="text-secondary font-bold text-lg">DASHBOARD</h2>
        <Filter  />
      </section>
      <section>
        <EletricPowerConsumption data={data || []} />
        <TotalValue data={data || []} />
      </section>
    </main>
  )
}
