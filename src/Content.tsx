type Props = { text1: string; text2: string; year: number }
const Content = (props: Props) => {
    return (
        <>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>Year: {props.year}</p>
        </>
    )
}
export default Content
