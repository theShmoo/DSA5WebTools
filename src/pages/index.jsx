import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';

// own classes
import DSAAppBar from './DSAAppBar';

import SuccessesAndFailuresMain from './successes/SuccessesAndFailuresMain';
import CraftingMain from './crafting/CraftingMain';
import TreasuresMain from './treasures/TreasuresMain';

import { DSAGrid, DSAGridRow} from './controls/DSAGrid';
import DSADescription from './controls/DSADescription';
import DSAInfoBox from './controls/DSAInfoBox';
import withRoot from '../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  }
};

const PAGES = [
  {
    title: "Crafting",
    page: <CraftingMain />
  },
  {
    title: "Successes And Failures",
    page: <SuccessesAndFailuresMain />
  },
  {
    title: "Treasures",
    page: <TreasuresMain />
  },
];

class Index extends Component {

  state = {
    currentpage: PAGES[2]
  }

  handlePageChange = page => {
    this.setState({currentpage: page})
  }

  render() {
    const { classes } = this.props;
    const { currentpage } = this.state;
    return (
      <div className={classes.root}>
        <DSAAppBar title={currentpage.title} pages={PAGES} onPageChange={this.handlePageChange}/>
          {currentpage.page}
        <footer>
          <DSAGrid>
            <DSAGridRow>
              <DSAInfoBox>
                <DSADescription caption="Impressum">
                  Website von David Pfahler.
                  Dieses Produkt wurde unter Lizenz erstellt. Das Schwarze Auge und sein Logo sowie Aventuria, Dere, Myranor, Riesland, Tharun und Uthuria
                  und ihre Logos sind eingetragene Marken von Significant GbR in Deutschland, den U.S.A. und anderen Ländern. Ulisses Spiele und sein Logo
                  sind eingetragene Marken der Ulisses Medien und Spiele Distribution GmbH.
                  Dieses Werk enthält Material, das durch Ulisses Spiele und/oder andere Autoren urheberrechtlich geschützt ist. Solches Material wird mit
                  Erlaubnis im Rahmen der Vereinbarung über Gemeinschaftsinhalte für SCRIPTORIUM AVENTURIS verwendet.
                  Alle anderen Originalmaterialien in diesem Werk sind Copyright 2018 von Moritz Schmid und werden im Rahmen der Vereinbarung über
                  Gemeinschaftsinhalte für SCRIPTORIUM AVENTURIS veröffentlicht.
                </DSADescription>
              </DSAInfoBox>
            </DSAGridRow>
          </DSAGrid>
        </footer>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
