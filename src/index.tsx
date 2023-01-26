import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitleProps {
    text: string
}

type ContentProps = {
    text1: string
    text2: string
    year: number
}

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>Year: {props.year}</p>
        </React.Fragment>
    )
}

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
