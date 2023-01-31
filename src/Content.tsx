import classes from './Content.module.css'

type Props = { text1: string; text2: string; year: number }

console.log(classes)

export const Content = (props: Props) => {
    return (
        <>
            <p className={`${classes.text}`}>{props.text1}</p>
            <p>{props.text2}</p>
            <p>Year: {props.year}</p>
        </>
    )
}
// export default Content
