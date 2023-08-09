import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChat from "../../components/BarChart";


const Bar = () => {
    return (

        <Box m="20px">
             <Header title="Bar Chat" subtitle="Simple Bar Chart"/>
             <Box height="75vh">
               <BarChat />
             </Box>
        </Box>
    )
}
export default Bar