export default function handleInvoiceData(invoiceData: any[]) {

    const result: any = {};
    const costumers = new Set(invoiceData.map(invoice => invoice.customerNumber));
    costumers.forEach((costumer: number) => {
        result[costumer] = invoiceData.filter(invoice => invoice.customerNumber === costumer)
    })

    return result;
}