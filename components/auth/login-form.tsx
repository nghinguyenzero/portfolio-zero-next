import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoginPayload } from '@/models'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'

export interface LoginFormProps {
    onSubmit?:  (payload: LoginPayload) => void
}

export function LoginForm ({onSubmit} : LoginFormProps ) {
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter username')
            . min(4, 'Username is required to have at least 4 characters'),
        password: yup        
            .string()
            .required('Please enter password')
            . min(4, 'Password is required to have at least 4 characters'),
    })

    const [showPassword, setShowPassword] = useState(false)
    const { control, handleSubmit, formState: {isSubmitting}} =  useForm<LoginPayload>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    async function handleLoginSubmit(payload: LoginPayload ) {
        console.log('handleLoginSubmit');

        console.log({payload});
        await onSubmit?.(payload)
    }


    return <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputField name='username' label='Username' control={control}/>
        <InputField name='password' label='Password' type={showPassword? 'text': 'password'} control={control}
            InputProps={{
                endAdornment : (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={()=>setShowPassword((x) => !x)}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff/> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                )
            }}
        />
			<Button 
                disabled={isSubmitting} 
                startIcon={isSubmitting ? <CircularProgress color='inherit'  size='1em'/>: null} 
                type="submit" variant="contained" fullWidth sx={{mt: 4}}>
				Login
			</Button>
    </Box>
}
