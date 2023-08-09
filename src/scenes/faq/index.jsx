import { Box , useTheme , Typography} from "@mui/material";
import  Accordion  from "@mui/material/Accordion";
import  AccordionSummary  from "@mui/material/AccordionSummary";
import  AccordionDetails  from "@mui/material/AccordionDetails";
import Header from "../../components/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from "../../theme";


const FAQ = () => {
     const theme = useTheme()
     const colors = tokens(theme.palette.mode)


     return (
        <Box m="20px">
            <Header title="FAQ"  subtitle=""Frequently Asked Questions Page/>

             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                         An Important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae,
                         nobis incidunt nesciunt nihil officiis ratione labore totam numquam praesentium dolores illo magnam voluptatem accusamus. 
                         Unde, exercitationem? 
                         Ea, quo et.
                    </Typography>
                </AccordionDetails>
             </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                         Another Important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae,
                         nobis incidunt nesciunt nihil officiis ratione labore totam numquam praesentium dolores illo magnam voluptatem accusamus. 
                         Unde, exercitationem? 
                         Ea, quo et.
                    </Typography>
                </AccordionDetails>
             </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        your favourite question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae,
                         nobis incidunt nesciunt nihil officiis ratione labore totam numquam praesentium dolores illo magnam voluptatem accusamus. 
                         Unde, exercitationem? 
                         Ea, quo et.
                    </Typography>
                </AccordionDetails>
             </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                       random question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae,
                         nobis incidunt nesciunt nihil officiis ratione labore totam numquam praesentium dolores illo magnam voluptatem accusamus. 
                         Unde, exercitationem? 
                         Ea, quo et.
                    </Typography>
                </AccordionDetails>
             </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        another question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae,
                         nobis incidunt nesciunt nihil officiis ratione labore totam numquam praesentium dolores illo magnam voluptatem accusamus. 
                         Unde, exercitationem? 
                         Ea, quo et.
                    </Typography>
                </AccordionDetails>
             </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                         last question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae,
                         nobis incidunt nesciunt nihil officiis ratione labore totam numquam praesentium dolores illo magnam voluptatem accusamus. 
                         Unde, exercitationem? 
                         Ea, quo et.
                    </Typography>
                </AccordionDetails>
             </Accordion>
        </Box>
     )
}

export default FAQ