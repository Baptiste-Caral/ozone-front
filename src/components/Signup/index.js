// == Import : npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaRegUserCircle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


// == Import : local
import './signup.scss';

// == Import : sous-composants
import Banner from 'src/components/Banner';
import SignupForm from './SignupForm';

// == Style du composant
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    flexGrow: 1,
  },
}));


// == Composant
const Signup = (
  {
    onSignupFieldChange,
    signupEmailValue,
    signupUsernameValue,
    signupPasswordValue,
    signupConfirmPasswordValue,
    passwordNotConfirmed,
    onCheckPasswordConfirmation,
  },
) => {
  const classes = useStyles();
  return (
    <div id="signup">
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <Banner />
        </Grid>
        <Grid item>
          <Typography variant="h1" gutterBottom xs={12}>
             Inscription
          </Typography>
        </Grid>
        <Grid item>
          <FaRegUserCircle size={70} xs={12} />
        </Grid>
        <Grid item>
          <SignupForm
            onSignupFieldChange={onSignupFieldChange}
            signupEmailValue={signupEmailValue}
            signupUsernameValue={signupUsernameValue}
            signupPasswordValue={signupPasswordValue}
            signupConfirmPasswordValue={signupConfirmPasswordValue}
            onCheckPasswordConfirmation={onCheckPasswordConfirmation}
            passwordNotConfirmed={passwordNotConfirmed}
          />
        </Grid>
      </Grid>
    </div>
  );
};

//= = Validation des props
Signup.propTypes = {
  onSignupFieldChange: PropTypes.func.isRequired,
  signupEmailValue: PropTypes.string,
  signupUsernameValue: PropTypes.string,
  signupPasswordValue: PropTypes.string,
  signupConfirmPasswordValue: PropTypes.string,
  onCheckPasswordConfirmation: PropTypes.func.isRequired,
  passwordNotConfirmed: PropTypes.bool,
};

// == Export
export default Signup;
