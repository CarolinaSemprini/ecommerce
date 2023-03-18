import './item.css';
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    CardMedia
  } from '@mui/material'

  import { createTheme, ThemeProvider } from '@mui/material/styles';
const Item =({info})=>{

    const theme = createTheme({
        palette: {
          primary: {
            // This is green.A700 as hex.
            main: '#E7B10A',
          },
        },
      });

    return(

        <Box className='container-productos' width='300px' 
        component='span'
          sx={{
            backgroundColor: 'primary.secundary',
            color: 'white',
            height: '780px',
            width: '300px',
            paddingTop:'50px',
           
          }}>
        <Card className='productos'>

            <Link to={`/detalle/${info.id}`} className='productos'>

          <CardMedia
            component='img'
            height='370'
            image={info.imagen}
            alt='unsplash image'
          />
          <CardContent>
            <Typography className='titulo-producto' gutterBottom variant='subtitle1' component='div'>
            {info.title}
            </Typography>
            <Typography className='precio-producto' variant='subtitle1' gutterBottom >
            ${info.price}
            </Typography>
          </CardContent>
          <CardActions>
          <ThemeProvider theme={theme}>
            <Button variant="warning"  className="boton-comprar" >
                COMPRAR
                </Button>
            </ThemeProvider>
          </CardActions>
          </Link>
        </Card>
      </Box>




        /*<Grid  container spacing={1} md={3} >
         <Grid 
            justifyContent="center"
            alignItems="center"
            marginLeft="12%"
            marginTop="80px" 
            height="450px"
            
            >
            <Card className='productos'> 
            <Link to={`/detalle/${info.id}`} className='productos'>
                <img variant="bottom_imagen" src={info.imagen} alt='blnaco'/>
                
                    <p className='titulo-producto'>{info.title}</p>
                    <p className='precio-producto'><strong>${info.price}</strong></p>
                    <button type="button" className="btn btn-warning boton-comprar">COMPRAR</button>
                </Link>
             </Card>
            </Grid>
        </Grid>*/
             
    )
}

export default Item;
