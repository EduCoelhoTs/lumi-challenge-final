import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useMemo } from 'react';
import { MainStateContext } from '../../contexts/state';

export default function Filter() {

  const { state, buildActionsFunc } = useContext(MainStateContext);

  const handleInputChange = (event: SelectChangeEvent<string>) => buildActionsFunc.setCostumerNumber(event.target.value)

  const listItems = useMemo(() => {
    return state.invoicesData?.numbers?.map(
      customerNumber => (<MenuItem key={customerNumber.costumerNumber} value={customerNumber.costumerNumber}>
        {customerNumber.costumerNumber}</MenuItem>)
      )
    }, [state.invoicesData.numbers]);
    
  return (
     <section className='w-44'>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Clientes</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.costumerNumber}
            label="Age"
            onChange={handleInputChange}
          >
            {listItems}
          </Select>
        </FormControl>
     </section>
  )
}
