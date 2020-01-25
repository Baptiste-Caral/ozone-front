// Ici le container du composant homepage à compléter
import { connect } from 'react-redux';

import InputSearch from 'src/components/Banner/InputSearch';
import { changeInput, afterSearch } from 'src/store/reducer/homepage';

// == Import d'action creators
// à compléter

// == Préparation: data
const mapStateToProps = (state) => {
  console.log(state);

  return {
    search: state.homepage.search,
  };
};

// == Préparation - actions
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => {
    console.log('changeInputValue', 'je suis dans le mDTP', value);
    dispatch(changeInput(value));
  },

  searchOk: () => {
    console.log('mDTP', 'afterSearch');
    dispatch(afterSearch());
    console.log(afterSearch);
  },
});

// == Container
const InputSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputSearch);

// == Export
export default InputSearchContainer;
