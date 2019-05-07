import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 2
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class DSAAppBar extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (page) => (event) => {
    this.setState({ anchorEl: null });
    this.props.onPageChange(page);
  };

  render() {
    const { classes, title, pages } = this.props;

    const menuitems = pages.map((p, i) => {
      return <MenuItem key={i} onClick={this.handleClose(p)}>{p.title}</MenuItem>
    })

    const { anchorEl } = this.state;
    return (
        <AppBar position="static" className={classes.root}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title} - DSA 5 Web App</title>
          </Helmet>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {menuitems}
            </Menu>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

DSAAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(DSAAppBar);
