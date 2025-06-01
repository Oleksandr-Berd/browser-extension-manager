const ExtensionItem = (props) => {
    const {title, text, pic} = props || {}

    console.log(props);
    
    return ( 
        <li>
            <div>

                <div>
                    <img src={pic} alt="icon" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
            <div>
                <button type="button">Remove</button>
                <button type="button"></button>
            </div>
        </li>
     );
}
 
export default ExtensionItem;