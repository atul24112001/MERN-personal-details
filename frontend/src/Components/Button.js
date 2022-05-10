import React from 'react'
import { Button } from '@mui/material'

function MyButton({ onClick, title, icon, color }) {
    return (
        <Button sx={{
            backgroundColor: color ? "tomato" : "teal",
            m: "1vh  1vw",
            p: "1vh  1vw",
            color: "white",
            ':hover': {
                backgroundColor: color ? "rgba(255, 99, 71, 0.8)" : "rgba(0, 128, 128, 0.8)",
            }
        }} startIcon={icon} onClick={onClick}>{title}</Button>
    )
}

export default React.memo(MyButton);