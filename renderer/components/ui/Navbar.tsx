import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, PriceChangeOutlined } from "@mui/icons-material";
import { useContext } from 'react';
import { UiContext } from '../../context/ui';

export const Navbar = () => {

    const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/home' passHref>
                <Link display='flex' flexDirection='row' alignItems='center'>
                    <Typography variant="h1" fontSize={25}>Copiadora| </Typography>
                    <Typography variant="h2" fontSize={20} ml={1}>El EstudianteJr</Typography>
                </Link>
            </NextLink>

            <Box flex={1} />

            <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                <NextLink href='/inventario' passHref>
                    <Link>
                        <Button>Inventario</Button>
                    </Link>
                </NextLink>
                <NextLink href='/clientes' passHref>
                    <Link>
                        <Button>Clientes</Button>
                    </Link>
                </NextLink>
            </Box>

            <Box flex={1} />

            <IconButton>
                <SearchOutlined />
            </IconButton>

            <NextLink href='/caja' passHref>
                <Link>
                    <IconButton>
                        <Badge badgeContent={2} color='secondary'>
                            <PriceChangeOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>

            <Button onClick={toggleSideMenu}>
                Menu
            </Button>

        </Toolbar>
    </AppBar>
  )
}
