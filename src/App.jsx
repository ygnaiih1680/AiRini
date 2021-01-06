import React, {Component, lazy, Suspense} from 'react'

const Cover = lazy(() => import("./component/Cover"))

class App extends Component {
    render() {
        return (
            <Cover/>
        )
    }
}

export default App