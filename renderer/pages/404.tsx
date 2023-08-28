import { Box, Typography } from "@mui/material"
import { MainLayout } from "../components/layouts"

const Custom404 = () => {
  return (
    <MainLayout title={"Pagina No Encontrada"}>
        <Box>
           <Typography>404</Typography> 
        </Box>
    </MainLayout>
  )
}

export default Custom404