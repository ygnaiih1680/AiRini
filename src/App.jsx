import React, {Component, lazy, Suspense} from 'react'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'

const Main = lazy(() => import("./component/Main"))

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={() => null}>
                    <Switch>
                        <Route path="/" exact name="Main" render={() => <Main/>}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default App