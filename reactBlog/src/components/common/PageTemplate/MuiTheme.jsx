import { createMuiTheme } from '@material-ui/styles';
import * as Colors from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
        primary: { // works
          main: '##15171a',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: { // doesnt work - defaults to a grey button
            main: '#65CFE9',
            contrastText: '#fff',
        },
        companyRed: { // doesnt work - grey button
            main: '#E44D69',
            contrastText: '#000',
        },
        accent: { // doesnt work - grey button
            main: purple, // import purple doesnt work
            contrastText: '#000',
        },
    },
});