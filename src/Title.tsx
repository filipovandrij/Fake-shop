interface ITitleProps {
    text: string
}

const Title = (props: ITitleProps) => {
    return <h1>Hello {props.text}</h1>
}

export default Title
