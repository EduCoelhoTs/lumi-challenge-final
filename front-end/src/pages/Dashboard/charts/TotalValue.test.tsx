// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import TotalValue from './TotalValue';
// import { describe, expect, it } from 'vitest';
// import 'resize-observer-polyfill';

// describe('TotalValue Component', () => {
//   const mockData = [
//     { billMonth: 'JAN/2023', totalValueWithoutGD: 100, GDEconomy: 20,  compensatedEnergyKWh: 200, electricPowerConsumption: 300},
//     { billMonth: 'FEV/2023', totalValueWithoutGD: 120, GDEconomy: 25,  compensatedEnergyKWh: 250, electricPowerConsumption: 300 },
//   ];

//   it('renders TotalValue component with chart', () => {
//     render(<TotalValue data={mockData} />);

//     expect(screen?.getByText('Valores'))?.toBeInTheDocument();
//     expect(screen?.getByTestId('apex-chart'))?.toBeInTheDocument();
//   });

//   it('renders TotalValue component without data', () => {
//     render(<TotalValue data={[]} />);

//     expect(screen?.getByText('Valores'))?.toBeInTheDocument();
//     expect(screen?.getByTestId('apex-chart'))?.toBeInTheDocument();
//   });

//   it('renders TotalValue component with specific data', () => {
//     render(<TotalValue data={mockData} />);

//     expect(screen?.getByText(/Valor Total sem GD R\$/))?.toBeInTheDocument();
//     expect(screen?.getByText('Economia GD R$'))?.toBeInTheDocument();
//   });
// });
