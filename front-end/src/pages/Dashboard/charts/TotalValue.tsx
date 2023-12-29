import ReactApexChart from "react-apexcharts"
import { InvoiceCompiledData } from "../../../utils/models/invoice";



export default function TotalValue({ data }: { data: InvoiceCompiledData[] }) {

  const options = {
    options: {
      chart: {
        id: 'basic-line-chart'
      },
      xaxis: {
        categories: data.length > 0 ? data?.map(element => element?.billMonth) : []
      },
      markers: {
        size: 5, 
        strokeWidth: 0, 
        hover: {
          size: 7 
        }
      }
    },
    series: [{
      name: 'Valor Total sem GD I R$',
      data: data.length > 0 ? data?.map(element => Number(element?.totalValueWithoutGD?.toFixed(2))) : [],
    },
    {
      name: 'Economia GD I R$',
      data: data.length > 0 ? data?.map(element => Number(element?.GDEconomy?.toFixed(2))) : []
    }],

  };


  return (
    <div className="px-5 py-10">
      <h3 className="text-primaryHover">Valores</h3>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="line"
        height="200"
        data-testid="apex-chart"
      />
    </div>
  )
}
