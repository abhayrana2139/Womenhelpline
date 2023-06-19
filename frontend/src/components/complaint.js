import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

const Complaint = ({name, description, title, imageURL ,FaultyName}) => {


  return (
    
    <Card sx={{
      width: "90%",
      margin: "auto",
      mt: 2,
      padding: 2,
      boxShadow: "5px 5px 10px #ccc",
      ":hover": {
        boxShadow: "10px 10px 20px #ccc",
      },
    }}>
    <CardHeader
    
      
      
      title={name}
      subheader={FaultyName}
    />
     <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
   
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      Complaint title------- {title}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
 
   
    </CardActions>
      <CardContent>
       
      
        <Typography paragraph>
         Complaint Description------ {description}
        </Typography>
       
       
      </CardContent>
     
  
  </Card>
      
      
    
  );
};
  
  
export default Complaint