import { Route, Switch } from 'react-router'
import Dashboard from '../Screens/Dashboard'

function RoutesWrapper() {

  return (
    <div id="routeContainer">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* <Route exact path="/booking" component={BookingScreen} /> */}

      </Switch>
    </div>
  )
}

export default RoutesWrapper
