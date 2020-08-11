import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './style.css';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  colorDefault: {
    color: colors.red,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: '#d13030' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <a style={{ color: '#fff', textDecoration: 'none' }} href="http://siapi.bombeiros.go.gov.br/paginaInicialWeb.jsf">VOLTAR AO SIAPI/CBMGO</a>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
