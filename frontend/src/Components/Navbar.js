import React from 'react'
import { Box, Typography } from '@mui/material'

function Navbar() {
    return (
        <Box sx={{ textAlign: "center", p: "3vh 0", color: "teal" }}>
            <Typography sx={{ fontWeight: "bold" }} variant='h3'>Personal Details</Typography>
        </Box>
    )
}

export default React.memo(Navbar);