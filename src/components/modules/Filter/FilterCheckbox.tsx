import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { flowersData } from '../../../data/data';

export const FilterCheckbox = () => {
  const arrFamily = Array.from(new Set(flowersData.map((el) => el.family)));
  // const handleChange = (e: SelectChangeEvent<string>) => {
  // console.log(e);
  // const name = e.target.value;

  // this.setState(prevState => {
  //   return {
  //     categories: {
  //       ...prevState.categories,
  //       [name]: !prevState.categories[name]
  //     }
  //   };
  //   // });
  //   console.log(name);
  // };
  // console.log(arrFamily);

  return (
    <FormGroup>
      {arrFamily.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox />}
          label={item}
          value={item}
          // onChange={handleChange}
        />
      ))}
    </FormGroup>
  );
};
