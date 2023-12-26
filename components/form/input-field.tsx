import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { Control, useController } from 'react-hook-form'

export type InputFieldProps = TextFieldProps & {
    name: string
    control: Control<any>
}

// export interface In
export function InputField ( {name, control, type,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    value: externalValue,
    ref: externalRef,
    ...rest} : InputFieldProps) {
    const {
        field: {
            onChange, onBlur, value, ref
        },
        fieldState: { error }
    } = useController({
        name,
        control
    })
    return (
        <TextField
            fullWidth
            type={type}
            size='small' 
            margin='normal'
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            onClick={()=>onChange(value+1)} ref={ref}
            error={!!error}
            helperText={error?.message}

            {...rest}
        >{name}: {value}</TextField>
    )
}