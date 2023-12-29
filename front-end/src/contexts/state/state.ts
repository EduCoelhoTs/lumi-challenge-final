interface Numbers {
    costumerNumber: string;
    installationNumber: string;
}

export interface IMainStateValue {
    costumerNumber: string;
    downloadCostumerFilter: string;
    downloadMonthFilter: string;
    invoicesData: {
        numbers:Numbers[];
        billsMonths: string[];
    }
}

export const mainStateValue: IMainStateValue = {
    costumerNumber: '7005400387',
    downloadCostumerFilter: '',
    downloadMonthFilter: '',
    invoicesData: {
        numbers: [],
        billsMonths: [],
    }
}