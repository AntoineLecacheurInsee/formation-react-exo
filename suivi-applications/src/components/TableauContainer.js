import { connect } from 'react-redux'
import Tableau from './Tableau'
const mapStateToProps = state => ({ compteur : state.compteur})
export default connect(mapStateToProps)(Tableau)