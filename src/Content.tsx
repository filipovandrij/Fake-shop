import './Content.css'

type Props = { text1: string; text2: string; year: number }
export const Content = (props: Props) => {
    return (
        <>
            <p className="content">{props.text1}</p>
            <p>{props.text2}</p>
            <p>Year: {props.year}</p>
        </>
    )
}
// export default Content
