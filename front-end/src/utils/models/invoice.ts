export interface InvoiceCompiledData {
    billMonth: string;
	electricPowerConsumption: number;
	compensatedEnergyKWh: number;
	totalValueWithoutGD: number;
	GDEconomy: number;
}