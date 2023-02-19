import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Products } from './Products';
function Categories({categoriesData}) {
  const [value, setValue] = useState("63f1dab27069b4f12755e134");


  const handleOnClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleOnClick}>
            {categoriesData.map((item, index)=> <Tab key={index} label={item.name} value={item._id}/>)}
          </TabList>
        </Box>
        <Products categoryId={value}/>
      </TabContext>
    </Box>
  );
}
export {Categories};