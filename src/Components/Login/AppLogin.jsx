import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormLogin } from './FormLogin'

createRoot(document.getElementById('rootLogin')).render(

    <div className='d-flex justify-content-center align-items-center' style={{height:"95vh"} }>
        <FormLogin/>
    </div>

)
