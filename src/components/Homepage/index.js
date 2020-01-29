// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import BannerAfter from 'src/components/Homepage/BannerAfter';
import Cardweb from 'src/components/Homepage/Cardweb';
import Description from './Description';
import LeftBar from './LeftBar';
import Cardmob from './Cardmob';
import SearchBarMaps from './SearchBarMaps';

const useStyles = makeStyles(() => ({

  container: {
    'max-width': '1080px',
  },
}));

const Homepage = ({ search, events, }) => {

  const classes = useStyles();
  return (
    <div>
      {!search && <Banner />}
      <Container className={classes.container} id="app">
        <Grid>
          {search && <Hidden only={['xs']}><BannerAfter /></Hidden>}
          <Grid container spacing={3}>
            <Grid item md={3}>
              {!search && <Description />}
              {search && <LeftBar />}
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Hidden only={['sm', 'md', 'lg', 'xl']}><SearchBarMaps /></Hidden>
              {events.map((event) => (
                <Cardweb key={event.id} {...event} />))}

              <Hidden only={['sm', 'md', 'lg', 'xl']}><Cardmob /></Hidden>
              <Hidden only={['sm', 'md', 'lg', 'xl']}><Cardmob /></Hidden>
              <Hidden only={['sm', 'md', 'lg', 'xl']}><Cardmob /></Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Homepage.propTypes = {
  search: PropTypes.bool.isRequired,
};
export default Homepage;
