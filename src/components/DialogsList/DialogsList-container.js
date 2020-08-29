import DialogsList from './DialogsList'
import {connect} from 'react-redux'
import { compose } from 'redux'


const mapStateToProps = (state) => {
  return {
    usersData: state.dialogs.usersData
  }
}


export default compose(
  connect(mapStateToProps, {}),
)(DialogsList)

