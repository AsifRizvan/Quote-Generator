import { useEffect, useState } from 'react';
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';

function App() {

  const[quote,setQuote]=useState("Click to generate a quote")
  const[quotes,setQuotes]=useState([])

  useEffect(()=>{
    const fetchQuotes = async ()=>{
      try{
        const response = await fetch("https://dummyjson.com/quotes")
        const data = await response.json()
        setQuotes(data.quotes)
      }
      catch(error){
        console.error("Error Fetching Quotes", error)
      }
    }

    fetchQuotes()
  },[]);

  const generate = ()=>{
    if(quotes.length>0){
      const ranQuote=quotes[Math.floor(Math.random()*quotes.length)].quote
      setQuote(ranQuote)
    }
  }
 

  return (
    <>
       <Box
      className="animated-background" // Apply animated background class
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#e0f7e9',
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius:'10px'
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://static.wixstatic.com/media/e5e761_9d5428bfc33546e088cc5b7daa62f46e~mv2.gif"
            alt="green iguana"
          />
          <CardContent sx={{ backgroundColor: '#c8e6c9', textAlign: 'center', padding: 3 }}>
            
            <Typography
              variant="h6"
              sx={{ color: '#004d40', fontSize: '1.5rem', minHeight: '120px', fontStyle: 'italic' }}
            >
              {quote}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            backgroundColor: '#a5d6a7',
            justifyContent: 'center',
            padding: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#004d40',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1.2rem',
            }}
            onClick={generate}
          >
            Generate Quote
          </Button>
        </CardActions>
      </Card>
    </Box>
    </>
  )
}

export default App
