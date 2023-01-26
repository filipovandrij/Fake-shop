import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                dolores iure, nam recusandae repellat assumenda dignissimos
                voluptate incidunt aspernatur iste facilis voluptatem
                accusantium natus illum minus sit reprehenderit! Nobis, beatae?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo a
                ab deserunt atque laborum? Quibusdam exercitationem quia sit
                provident repudiandae, itaque corrupti, odio nam in accusantium
                quasi quidem? Veniam, saepe!
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
