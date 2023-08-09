import { ColorModeContext , useMode } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from './scenes/dashboard/index'
import Team from './scenes/team/index'
import Invoices from './scenes/invoices/index'
import Form from './scenes/form/index'
import Contacts from './scenes/contacts/index'
import  Calendar from  './scenes/calendar/index'
import FAQ from './scenes/faq/index'
// import Line from './scenes/dashboard/line'
import Bar from './scenes/bar/index.jsx'

// import Pie from './scenes/dashboard/pie'

// import Geography from './scenes/dashboard/geography'






function App() {
  const [theme , colorMode] = useMode()
  return (
    <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <div className="app">
          <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/invoices" element={<Invoices/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/form" element={<Form/>} />
                {/* <Route path="/line" element={<Line/>} /> */}
                <Route path="/bar" element={<Bar/>} />
                {/* <Route path="/pie" element={<Pie/>} /> */}
                {/* <Route path="/geography" element={<Geography/>} /> */}

              </Routes>

            </main>
         </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
    </BrowserRouter>

   
  );
}

export default App;
