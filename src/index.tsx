import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import Title from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="Ts" />
            <Content text1="Hello world 1" text2="Hello world 2" year={2023} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
