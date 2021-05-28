import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	outline: {
		width: "100%",
		border: "2px solid blue",
	},
	image: {
		border: "2px solid white",
		margin: theme.spacing(2),
	},
   heading : {
      textAlign: 'center',
      width: '100%',
      color: 'seagreen',
      fontWeight: 'bold',
      fontSize: '20px',
      margin: theme.spacing(3)
   },
   table : {
      width: '100%',
      textAlign : 'center',
      border: '2px solid white',
      color : 'seagreen',
      fontWeight: 'bold'
   },
   cell : {
      color: 'seagreen',
      fontSize: '18px',
      fontWeight: 'bold'
   },
   pagination : {
      margin : theme.spacing(2),
      display : 'flex',
      justifyContent : 'space-evenly',
      alignItems: 'center'
   }
}));
