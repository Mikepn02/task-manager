import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/Person2Outlined"
import SearchIcon from "@mui/icons-material/Search"

const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box className="flex space-between justify-between p-4">
            <Box className="flex rounded-3px" backgroundColor={colors.primary[400]}>
                <InputBase className="ml-2 flex-1" placeholder="Search" />
                <IconButton type="button" className="p-1">
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box className="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ): (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>

                </IconButton>
            </Box>
        </Box>

    )
}

export default Topbar