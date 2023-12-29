import ReactApexChart from "react-apexcharts";
import { InvoiceCompiledData } from "../../../utils/models/invoice";


export default function EletricPowerConsumption({data}: {data: InvoiceCompiledData[]}) {

    const chartData = {
      options: {
        chart: {
          id: 'basic-area-chart'
        },
        xaxis: {
          categories: data.length > 0 ? data?.map(element => Number(element.billMonth)) : []
        }
      },
      series: [
        {
          name: 'Energia Compensada kWh',
          data: data.length > 0 ? data?.map(element => Number(element.compensatedEnergyKWh)) : [],
        },
        {
        name: 'Consumo de Energia Elétrica KWh',
        data: data.length > 0 ? data?.map(element => Number(element.electricPowerConsumption)) : [],
      },
    ]
    };

  return (
    <div className="px-5 py-10">
      <h3 className="text-primaryHover">Consumo de Energia (kWh)</h3>
      <ReactApexChart
        type="area"
        height="200"
        options={chartData.options}
        series={chartData.series}
      />
    </div>
  )
}
