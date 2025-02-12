import { LOGO_URL} from "../Utils/constant"
const Header = ()=>(
    <div className="header">
        <img className="logo" alt="logo-image" src={LOGO_URL}>
        </img>

        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header