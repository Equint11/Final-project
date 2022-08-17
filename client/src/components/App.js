import { Route, Routes} from "react-router-dom"
// import { useState, useEffect } from "react"
import NavBar from "./NavBar/NavBar" 
import PostFeed from "./Feed and Market/PostFeed"
// import Explore from "./Feed and market/Explore"
// import Login from "./Login/Login"
// import ProfilePage from "./ProfilePage"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: "#38b3dc",
      light: "#abdef0",
      dark: "#00a4d7",
     
    },
    secondary: {
      main: "#e6e9fa"
    },
    button: {
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
    }
  }
}})

function App() {


  return (
    <ThemeProvider  theme={theme} >
        <CssBaseline />
      <NavBar/>
      <Routes>
      {/* <Route path="/" element={<Feed/>} /> */}
        <Route path="/" element={<PostFeed/>}/>
      </Routes> 
    </ThemeProvider>
  );
}

export default App;