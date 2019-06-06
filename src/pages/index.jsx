import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';

import { Switch, Route, BrowserRouter } from "react-router-dom";

// own classes
import DSAAppBar from './DSAAppBar';

import SuccessesAndFailuresMain from './successes/SuccessesAndFailuresMain';
import CraftingMain from './crafting/CraftingMain';
import TreasuresMain from './treasures/TreasuresMain';
import TavernMain from './tavern/TavernMain';
import FaunaMain from './fauna/FaunaMain';
import SpellbookMain from './spellbook/SpellbookMain'
import FloraMain from './flora/FloraMain';
import OverviewMain from './OverviewMain';

import { DSAGrid, DSAGridRow} from './controls/DSAGrid';
import DSADescription from './controls/DSADescription';
import DSAInfoBox from './controls/DSAInfoBox';
import withRoot from '../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  }
};

const ROOT_PATH = '/';

class Index extends Component {

  render() {
    const { classes } = this.props;

  let PAGES = [
    {
      title: "Herstellung",
      page: <CraftingMain />,
      path: ROOT_PATH + "craftig",
      image: "img/crafting.jpg",
      description: "",
    },
    {
      title: "Erfolge und Fehlschläge",
      page: <SuccessesAndFailuresMain />,
      path: ROOT_PATH + "successes",
      image: "img/nahkampf-angriff-erfolg.jpg",
      description: "",
    },
    {
      title: "Schätze",
      page: <TreasuresMain />,
      path: ROOT_PATH + "treasures",
      image: "img/mondamulet.jpg",
      description: "",
    },
    {
      title: "Tavernen",
      page: <TavernMain />,
      path: ROOT_PATH + "tavern",
      image: "img/Zwergenfest.jpg",
      description: "",
    },
    {
      title: "Jagd",
      page: <FaunaMain />,
      path: ROOT_PATH + "fauna",
      image: "img/tierkunde.jpg",
      description: "",
    },
    {
      title: "Pflanzen",
      page: <FloraMain />,
      path: ROOT_PATH + "flora",
      image: "img/flora.jpg",
      description: "",
    },
    {
      title: "Zauberbuch",
      page: <SpellbookMain />,
      path: ROOT_PATH + "spellbook",
      image: "img/zauber.jpg",
      description: "",
    },
  ];

  PAGES.push({
    title: "Übersicht",
    page: <OverviewMain pages={PAGES}/>,
    path: ROOT_PATH,
    image: "img/buch.jpg",
    description: "",
  });

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL + "/#"}>
        <div className={classes.root}>
          <Route path={ROOT_PATH}
            render={({ location }) => {
              const current = PAGES.find(p => p.path === location.pathname);
              return(<>
              <DSAAppBar
                title={current ? current.title : PAGES[PAGES.length - 1].title}
                pages={PAGES} />
              <Switch>
                {PAGES.map((p, i) => <Route key={i} path={p.path} render={() => p.page} />)}
              </Switch>
            </>);
            }}/>
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
      </BrowserRouter>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
