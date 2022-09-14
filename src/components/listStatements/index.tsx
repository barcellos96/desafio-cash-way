import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DashboardContext } from "../../providers/dashboard";
import { useApi } from "../../hooks/useApi";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function allProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Idebits_and_credits {
  total_debits: number;
  total_credits: number
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [dataLastMonth, setDataLastMonth] = React.useState<Idebits_and_credits | null>(null)
  const [dataLastFifTeenDays, setDataLastFifTeenDays] = React.useState<Idebits_and_credits | null>(null)
  const [dataLastSevenDays, setDataLastSevenDays] = React.useState<Idebits_and_credits | null>(null)

  const api = useApi()

  React.useEffect(()  => {
    const execLastTotalData = async () => {
    
      const LastMonth = await api.StatementsLastMonth();
      setDataLastMonth(LastMonth)
    
      const FifTeenDays = await api.StatementsLastFifteenDays();
      setDataLastFifTeenDays(FifTeenDays)

      const SevenDaysMonth = await api.StatementsLastSevenDays();
      setDataLastSevenDays(SevenDaysMonth)
    }
    execLastTotalData()
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "87%",
        marginLeft: "4%",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="7 dias" {...allProps(0)} />
          <Tab label="15 dias" {...allProps(1)} />
          <Tab label="30 dias" {...allProps(2)} />
          <Tab label="Periodo " {...allProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {dataLastSevenDays ? <span>Total de débitos(período 7 dias):R${dataLastSevenDays.total_debits}</span> : "teste não renderizou"}<br/>
      {dataLastSevenDays ? <span>Total de débitos(período 7 dias):R${dataLastSevenDays.total_credits}</span> : "teste não renderizou"}

      </TabPanel>
      <TabPanel value={value} index={1}>
      {dataLastFifTeenDays ? <span>Total de débitos(período 15 dias):R${dataLastFifTeenDays.total_debits}</span> : "teste não renderizou"}<br/>
      {dataLastFifTeenDays ? <span>Total de débitos(período 15 dias):R${dataLastFifTeenDays.total_credits}</span> : "teste não renderizou"}

      </TabPanel>
      <TabPanel value={value} index={2}>
      {dataLastMonth ? <span>Total de débitos(período 30 dias):R${dataLastMonth.total_debits}</span> : "teste não renderizou"}<br/>
      {dataLastMonth ? <span>Total de débitos(período 30 dias):R${dataLastMonth.total_credits}</span> : "teste não renderizou"}
      </TabPanel>

      <TabPanel value={value} index={3}>
      
      </TabPanel>
    </Box>
  );
}
