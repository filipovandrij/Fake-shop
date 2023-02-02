import './Style.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <header className="container">
            <div>
                <div>
                    <h1 className="logotype">
                        LOGO <span> this </span>
                    </h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header
