import React, {Component, lazy, Suspense} from 'react'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router'

const Cover = lazy(() => import("./component/Cover"))

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={() => <div/>}>
                    <Switch>
                        <Route path="/" exact name="Cover" render={() => <Cover/>}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default App