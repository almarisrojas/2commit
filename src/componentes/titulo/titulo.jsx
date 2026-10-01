import Card  from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import './titulo.css';


export function Titulo({NomeDaTela}) {

    return (
        <Card sx={{width: '90%', 
                   padding: 2, 
                   marginBottom: 2,
                   marginTop:5,
                   backgroundColor: '#0a0439',
                   borderRadius: 2,
                   alignItems: 'center',
                   boxShadow: '0px 2px 4px rgba(0,0,0.1)'
                   }}>
          <Typography variant="h4"
                     sx={{fontSize: 29,
                        fontFamily: 'arial',
                        color: '#fff',
                        textAlign: 'center',
                        textDecoration: 'underline'
                    }}
          >
             {NomeDaTela}
          </Typography>        
        </Card>
    );

}