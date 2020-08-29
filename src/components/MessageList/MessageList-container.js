import MessageList from './MessageList'
import {connect} from 'react-redux'
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogs.messagesData
  }
}


export default compose(
  connect(mapStateToProps, {}),
)(MessageList)

