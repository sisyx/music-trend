import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { PRICE_SETTINGS } from '../../constatnts';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function MinMaxSlider({ setMaxPrice, setMinPrice }) {
  const [value1, setValue1] = React.useState([PRICE_SETTINGS.min, PRICE_SETTINGS.max]);

  const handleChange1 = (_event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  React.useEffect(() => {
  }, [value1]);


  return (
    <Box sx={{ width: 300 }}>
      <Slider
        min={PRICE_SETTINGS.min / 100000}
        max={PRICE_SETTINGS.max / 100000}
        step={1}
        showDis
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        onChangeCommitted={ () => {
          setMaxPrice(() => value1[1] * 100000)
          setMinPrice(() => value1[0] * 100000)
        }}
      />
    </Box>
  );
}
