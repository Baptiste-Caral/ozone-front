import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


// Quand l'user clique sur le boutton participer ce modal s'ouvre
// SI il est déjà inscrits à l'évent

export default function AlertAlreadySub({ resetStatus }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    resetStatus();

    // resetStatus() repasse alreadySubscribe à false
    // car si il reste à true le modal va s'ouvrir lorsque l'user va aller sur un autre event
    // Si le state reste à true "il croit" que l'user est dejà inscrit même si ce n'est pas le cas
    // grâce à ce reset du state (en le repassant à son état initial: false) on evite le bug
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Déjà Inscrit</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vous êtes déjà sur la liste des partcipants de cet événement!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
AlertAlreadySub.propTypes = {
  resetStatus: PropTypes.func.isRequired,
};
