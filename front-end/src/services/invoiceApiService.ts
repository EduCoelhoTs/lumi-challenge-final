import { InvoiceCompiledData } from "../utils/models/invoice";
import HttpClient from "./httpClient";
export async function getInvoiceCompiledData(costumerNumber: string): Promise<InvoiceCompiledData[]> {
    const response = await HttpClient.get<InvoiceCompiledData[]>(`/energy-bills/monthly-compiled-data?customerNumber=${costumerNumber}`);
    return response;
}

export async function getInvoiceData(): Promise<any[]> {
    const response = await HttpClient.get<any[]>(`energy-bills?selectedFields=id,billMonth,customerNumber,installationNumber`);
    return response;
}

export async function getDownloadFile(billMonth: string, costumerNumber: string): Promise<void> {
    // const response = await fetch(
    //   `http://localhost:5173/energy-bills/download?billMonth=${billMonth}&installationNumber=${costumerNumber}`,
    //   { method: 'GET' }
    // );

     const response = await fetch(
      `http://localhost:5000/download`,
      { method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          billMonth: `${billMonth}`,
          installationNumber: `${costumerNumber}`
        })
    }
    );

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
    }

    const readableStream = response.body;

    const blob = await readableStreamToBlob(readableStream);
      console.log(blob)
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob); 
      link.download = `${costumerNumber}-${billMonth}.pdf`;

      link.click();
}

async function readableStreamToBlob(readableStream:any) {
  const reader = readableStream.getReader();
  const chunks = [];

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
  }

  const blob = new Blob(chunks, { type: 'application/pdf' });
  return blob;
}