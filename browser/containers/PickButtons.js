import {connect} from 'react-redux';
import PickButtons from '../components/PickButtons';
import { pickedButton, removedButton, toggleSelectAll, toggleButtonSelected, toggleAllButtons } from '../actions/pickbutton-actions';

const  mapStateToProps = ( {buttonsPicked, allButtonsSelected, buttonsAvailable} ) => {
	return {
		buttonsPicked,
		allButtonsSelected,
		buttonsAvailable,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addButton: icon => {
			dispatch( pickedButton(icon) );
		},
		removeButton: icon => {
			dispatch( removedButton(icon) );
		},
		toggleSelect: bool => {
			dispatch( toggleSelectAll(bool) );
		},
		toggleButton: (bool, index) => {
			dispatch( toggleButtonSelected(bool, index) );
		},
		toggleAllButtons: bool => {
			dispatch( toggleAllButtons(bool) );
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PickButtons);


