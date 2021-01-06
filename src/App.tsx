import React, {Component, lazy, Suspense} from 'react'

const Cover = lazy(() => import("./component/Cover"))

class App extends Component {
    render() {
        return (
            <Suspense fallback={() => null}>
                <Cover/>
            </Suspense>
        )
    }
}

export default App