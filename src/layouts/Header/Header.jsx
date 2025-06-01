import Logo from "../../components/Logo/Logo";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const Header = () => {
    return ( 
        <header>
            <div>
                <Logo/>
                <ToggleButton />
            </div>
        </header>
     );
}
 
export default Header;