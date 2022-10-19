function FooterComponent(props){
    return (
        <div className="footer" style={{backgroundColor:props.bgcolor,color:props.color}}>
            @copy; {props.copyright} <em>{props.company}</em>
            <p>{new Date().toDateString()}</p>
        </div>
    );
}

export default FooterComponent;