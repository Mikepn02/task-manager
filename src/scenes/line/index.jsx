import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChat from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chat" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChat />
      </Box>
    </Box>
  );
};
export default Line;
