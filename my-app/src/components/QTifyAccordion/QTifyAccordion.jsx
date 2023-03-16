import React from 'react';
import styles from './QTifyAccordion.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const QTifyAccordion = () => {
  return (
    <>
    <div className={styles.accordionstyle}>
    <h1>FAQs</h1>
      <Accordion sx={{borderRadius: "9px", marginBottom: "20px"}}>
        <AccordionSummary
        sx={{backgroundColor: "black", color: "white", height: "70px", borderRadius: "9px"}}
          expandIcon={<ExpandMoreIcon style={{ color: "green", fontSize: "50px" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{borderRadius: "9px", textAlign: 'left', padding: "0px", marginTop: "30px", marginBottom:"30px", paddingLeft: "20px", paddingRight: "20px"}}
        >
          <Typography>
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "9px"}}>
        <AccordionSummary
        sx={{backgroundColor: "black", color: "white", height: "70px", borderRadius: "9px"}}
          expandIcon={<ExpandMoreIcon style={{ color: "green", fontSize: "50px" }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{borderRadius: "9px", textAlign: 'left', padding: "0px", marginTop: "30px", marginBottom:"30px", paddingLeft: "20px", paddingRight: "20px"}}
        >
          <Typography>
            Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  )
}

export default QTifyAccordion