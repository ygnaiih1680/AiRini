import React, {Component, lazy} from 'react'
import BrowserRouter, {Switch, Route} from 'react-router'

const Main = lazy(() => import("Main"))

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={Main}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App