import PostsList from './PostsList'
import {connect} from 'react-redux'
import { compose } from 'redux'


const mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData
  }
}


export default compose(
  connect(mapStateToProps, {}),
)(PostsList)

