import Filter from "./Filter";
import { useContext } from "react";
import { MainStateContext } from "../../contexts/state";
import Download from "./Download";

export default function Invoices() {

const { state: { downloadCostumerFilter, downloadMonthFilter }}= useContext(MainStateContext);

  return (
    <main>
      <h2 className="text-secondary font-bold text-lg">FATURAS</h2>
      <section className="flex flex-col gap-6">
        <section className="h-1/2">
          <Filter />
        </section>
        <section className="h-1/2">
           {
            (downloadCostumerFilter && downloadMonthFilter) &&
            <Download />
           }
        </section>
      </section>
    </main>
  )
}
