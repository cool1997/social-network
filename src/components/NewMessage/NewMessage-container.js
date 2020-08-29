import NewMessage from './NewMessage'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {reduxForm} from 'redux-form'


const mapStateToProps = (state) => {
  return {
    
  }
}


export default compose(
  reduxForm({form: 'newMessage'}),
  connect(mapStateToProps, {}),
)(NewMessage)

