import React from 'react'
import {
    Box,
    Typography,
} from "@mui/material"
import {
    Top,
    Search,
} from "@flock/shared-ui"

const Topbar = () => {
    return (
        <Top bar dropdown="none" page="home">
            <Box
                sx={{
                    height: '12px',
                    width: '1502px',
                    backgroundColor: '#353535',
                    border: '5px solid #d0d0d0',
                }} />
            <Box
                sx={{
                    height: '59px',
                    width: '1440px',
                    backgroundColor: '#f2f2f2',
                }} />
            <Typography
                sx={{
                    textAlign: 'left',
                    verticalAlign: 'top',
                    fontSize: '32px',
                    fontFamily: 'Inter',
                    lineHeight: 'auto',
                    color: '#353535',
                }}>
                Sign in
            </Typography>
            <Box component="img" src="TODO"
                sx={{
                    height: '37px',
                    width: '79px',
                }} />
            <Typography
                sx={{
                    textAlign: 'left',
                    verticalAlign: 'top',
                    fontSize: '32px',
                    fontFamily: 'Inter',
                    lineHeight: 'auto',
                    color: '#353535',
                }}>
                DDG
            </Typography>
            <Box
                sx={{
                    transform: 'rotate(-91deg)',
                    height: '0px',
                    width: '45px',
                    border: '2px solid #c4c4c4',
                }} />
            <Typography
                sx={{
                    textAlign: 'left',
                    verticalAlign: 'top',
                    fontSize: '24px',
                    fontFamily: 'Inter',
                    lineHeight: 'auto',
                    color: '#353535',
                }}>
                Home
            </Typography>
            <Box
                sx={{
                    height: '29px',
                    width: '131px',
                }}>
                <Typography
                    sx={{
                        textAlign: 'left',
                        verticalAlign: 'top',
                        fontSize: '24px',
                        fontFamily: 'Inter',
                        lineHeight: 'auto',
                        color: '#353535',
                    }}>
                    About us
                </Typography>
                <Box component="img" src="TODO"
                    sx={{
                        height: '12px',
                        width: '24px',
                    }} />
            </Box>
            <Box
                sx={{
                    height: '29px',
                    width: '97px',
                }}>
                <Box component="img" src="TODO"
                    sx={{
                        height: '12px',
                        width: '24px',
                    }} />
                <Typography
                    sx={{
                        textAlign: 'left',
                        verticalAlign: 'top',
                        fontSize: '24px',
                        fontFamily: 'Inter',
                        lineHeight: 'auto',
                        color: '#353535',
                    }}>
                    Learn
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '29px',
                    width: '88px',
                }}>
                <Box component="img" src="TODO"
                    sx={{
                        height: '12px',
                        width: '24px',
                    }} />
                <Typography
                    sx={{
                        textAlign: 'left',
                        verticalAlign: 'top',
                        fontSize: '24px',
                        fontFamily: 'Inter',
                        lineHeight: 'auto',
                        color: '#353535',
                    }}>
                    More
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '29px',
                    width: '119px',
                }}>
                <Box component="img" src="TODO"
                    sx={{
                        height: '12px',
                        width: '24px',
                    }} />
                <Typography
                    sx={{
                        textAlign: 'left',
                        verticalAlign: 'top',
                        fontSize: '24px',
                        fontFamily: 'Inter',
                        lineHeight: 'auto',
                        color: '#353535',
                    }}>
                    Contact
                </Typography>
            </Box>
            <Search Bar prop1="closed" hover="false">
                <Box component="img" src="TODO" />
                <Box
                    sx={{
                        height: '33px',
                        width: '32px',
                    }}>
                    <Box
                        sx={{
                            borderRadius: '16.5px',
                            height: '33px',
                            width: '32px',
                            backgroundColor: '#d0d0d0',
                        }} />
                    <Typography
                        sx={{
                            textAlign: 'left',
                            verticalAlign: 'top',
                            fontSize: '20px',
                            fontFamily: 'Inter',
                            letterSpacing: '-47%',
                            lineHeight: 'auto',
                            color: '#b1b1b1',
                        }}>
                        Search
                    </Typography>
                </Box>
            </Search Bar>
        </Top bar>
    )
}

export default Topbar