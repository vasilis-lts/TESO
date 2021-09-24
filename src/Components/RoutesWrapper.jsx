import { Route, Switch } from 'react-router'
import Dashboard from '../Screens/Dashboard'
import LaneDetails from '../Screens/LaneDetails'

function RoutesWrapper() {

  return (
    <div id="routeContainer">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/rijbaan-details" component={LaneDetails} />
      </Switch>
    </div>
  )
}

export default RoutesWrapper
