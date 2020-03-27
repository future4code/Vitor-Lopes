import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function PlanetSelector(props) {

  return (
    <div>
      <FormControl >
        <InputLabel htmlFor="age-native-helper">Selecione o Planeta</InputLabel>
        <NativeSelect
          onChange={props.handleInputChange}
          inputProps={{
            name: props.name,
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno (entrou pelas cotas)</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
