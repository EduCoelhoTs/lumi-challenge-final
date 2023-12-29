import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsIcon from '@mui/icons-material/Payments';

export interface ISideBarData {
    name: string;
    path: string;
    icon?: any;
}

const sideBarData: ISideBarData[] = [
    {
        name: 'Dashboard',
        path: '/',
        icon: DashboardIcon
    },
    {
        name: 'Faturas',
        path: '/invoices',
        icon: PaymentsIcon
    }

]


export default sideBarData;