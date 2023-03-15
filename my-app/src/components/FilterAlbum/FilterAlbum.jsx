import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./FilterAlbum.module.css";

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && (<div>{children}</div>)}</div>;
}

const FilterAlbum = ({albums, albumData }) => {
  const [album, setalbum] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    albumData().then((data) => {
      setalbum(data);
    });
  });
  return (
    <div className={styles.tabstyles}>
      <div className={styles.filterstyle}>
      <p>{albums}</p>
      </div>
      <div className={styles.maintab}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        TabIndicatorProps={{sx:{backgroundColor: "green", height: "4px"}}}
        sx={{
          "& button": {color: "white"},
          "& button.Mui-selected": {color: "white"},
        }}>
        <Tab label="All" />
          <Tab label="Rock" />
          <Tab label="Pop" />
          <Tab label="Jazz" />
          <Tab label="Blues" />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <div style={{marginLeft: "30px", marginRight: "40px" }}>
          <Carousel
            cardData={album}
            coolLearningByCrio={(data) => <Cards cardData={data} />}
          />
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div style={{marginLeft: "30px", marginRight: "40px" }}>
        <Carousel
          cardData={album}
          coolLearningByCrio={(data) => <Cards cardData={data} />}
        />
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div style={{marginLeft: "30px", marginRight: "40px" }}>
        <Carousel
          cardData={album}
          coolLearningByCrio={(data) => <Cards cardData={data} />}
        />
        </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div style={{marginLeft: "30px", marginRight: "40px" }}>
        <Carousel
          cardData={album}
          coolLearningByCrio={(data) => <Cards cardData={data} />}
        />
        </div>
      </TabPanel>
    </div>
  );
};

export default FilterAlbum;
