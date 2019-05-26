import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

import { DSAGrid, DSAGridRow, DSAGridItem } from './controls/DSAGrid';
import DSAInfoBox from './controls/DSAInfoBox';
import DSAButton from './controls/DSAButton';
import DSAMediaCard from './controls/DSAMediaCard';


const styles = theme => ({
  root: {}
});

function OverviewMain(props){

  const {classes, pages} = props;

  return <div classes={classes.root}>
  <DSAGrid>
    <DSAGridRow>
      <DSAInfoBox title="Übersicht">
        <DSAGrid>
        {pages.map((p, i) => <DSAGridItem xs={12} sm={6} md={4} lg={3} key={i}>
            <DSAMediaCard
              imagesrc={p.image}
              imagetitle={p.title}
              title={p.title}
              content={p.description}
              actions={<DSAButton
                component={Link}
                to={p.path}>{p.title}</DSAButton>}
            />
            </DSAGridItem>)}
        </DSAGrid>
      </DSAInfoBox>
    </DSAGridRow>
  </DSAGrid>
  </div>
}

OverviewMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OverviewMain);
