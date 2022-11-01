import { Box } from "@mui/system"
import { NavBar } from "./components";

const drawerWidth =240;
export const JournalLayouth = ({children}) => {
  return (
   <Box sx={{display:'flex'}}>
    <NavBar drawerWidth={drawerWidth}/>
     {/*Slidebar*/}
<Box 
Component='main'
sx={{flexGrow:1,p: 3}}
>
 {/*Toolbar*/}
 {children }
</Box>
   </Box >
  )
}
