import { useContext } from "react";
import { MainStateContext } from "../../contexts/state";
import { getDownloadFile } from "../../services/invoiceApiService";
import DownloadIcon from '@mui/icons-material/Download';

export default function Download() {

  const { state: { downloadCostumerFilter, downloadMonthFilter, invoicesData }}= useContext(MainStateContext);

  const handleDownloadfile = async () => {
      const costumer = invoicesData?.numbers?.find(el => el.costumerNumber === downloadCostumerFilter);
      const installationNumber = costumer?.installationNumber || '';
      await getDownloadFile(downloadMonthFilter, installationNumber);
  }

  return (
      <section className="relative overflow-auto py-4 border-2' rounded-2xl border-slate max-h-96">
       <div className="w-full">
         <div className="grid grid-cols-3 bg-slate p-4 rounded-xl">
          <span>Número cliente</span>
          <span>Mês referência</span>
          <span>Download</span>
        </div>
         <div className="grid grid-cols-3 p-4">
          <span className="px-3">{downloadCostumerFilter}</span>
          <span className="px-3">{downloadMonthFilter}</span>
          <span className="px-3 cursor-pointer" onClick={handleDownloadfile}><DownloadIcon /></span>
        </div>
       </div>
      </section>
  )
}
