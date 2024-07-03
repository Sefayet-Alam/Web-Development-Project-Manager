import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText';

export default function MySelectField(props) {

    const {label, name, control, width, options} = props
   
    return (
                <Controller
                    name={name}
                    control={control}
                    render={({
                        field: { onChange, value },
                        fieldState: { error },
                        formState,
                    }) => (
                        <FormControl variant="filled" sx={{width:{width}}}>
                        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            
                        >
                        {
                            options.map((data)=>(
                                <MenuItem value={data.id}>{data.name}</MenuItem>
                            ))
                        }
                      
                        </Select>
                        <FormHelperText sx={{color:"red"}}>{error?.message}</FormHelperText>
                        </FormControl>
                    )}
                />
    );
}
