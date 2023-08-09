import { ColorModeContext , useMode } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from './scenes/dashboard/index'
import Team from './scenes/team/index'
import Invoices from './scenes/invoices/index'
import Contacts from './scenes/contacts/index'
// import Line from './scenes/dashboard/line'
// import Bar from './scenes/dashboard/bar'
import Form from './scenes/form/index'
// import Pie from './scenes/dashboard/pie'
// import FAQ from './scenes/dashboard/faq'
// import Geography from './scenes/dashboard/geography'
// import  Calendar from  './scenes/dashboard/calendar'





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
                {/* <Route path="/line" element={<Line/>} /> */}
                {/* <Route path="/bar" element={<Bar/>} /> */}
                {/* <Route path="/pie" element={<Pie/>} /> */}
                {/* <Route path="/faq" element={<FAQ/>} /> */}
                <Route path="/form" element={<Form/>} />
                {/* <Route path="/geography" element={<Geography/>} /> */}
                {/* <Route path="/calendar" element={<Calendar/>} /> */}
              </Routes>

            </main>
         </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
    </BrowserRouter>

   
  );
}

export default App;
