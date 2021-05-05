import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'

function Index() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="*" component={Error404} />
            </Switch>
        </>
    )
}

export default Index
