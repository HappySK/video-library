import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
   form : {
      textAlign : 'center',
      margin : theme.spacing(4)
   },
   label : {
      display : 'block',
      fontWeight : 'bold',
      margin : 'auto',
      textAlign : 'justify',
      width : '50%',
      color : 'white'
   },
   input : {
      display : 'block',
      width : '50%',
      margin : 'auto',
      border : '2px solid white',
      outline : 'none',
      height : '2.4rem',
      fontSize : '20px',
      color : 'white',
      fontWeight : 'bold',
      background : 'none',
      borderRadius : '1rem',
      padding : '10px'
   },
   formcontrol : {
      margin : '10px'
   },
   error : {
      width : '50%',
      margin: 'auto'
   },
   button : {
      margin : '.3rem',
      background : 'none',
      color : 'white',
      outline : 'none',
      border : '2px solid white',
      fontWeight : 'bold',
      width : '5rem',
      height : '2rem',
      borderRadius : '1rem',
      cursor : 'pointer'
   },
   heading : {
      textAlign : 'center',
      color : 'white',
      margin: 'auto'
   },
   loading : {
      backgroundColor : 'white',
      color : 'seagreen'
   },
   hide : {
      display : 'none'
   },
   show : {
      display : 'block'
   }
}));
