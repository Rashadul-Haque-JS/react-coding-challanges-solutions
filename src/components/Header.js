const Header = ({props,clr}) => {
    return(
        <div style={{background:clr,padding:'32px 0px', textTransform:'uppercase', fontSize:'1.3rem'}}>
            <p style={{ color: "#ffffff", textAlign: "center", }}>{props }</p>
        </div>
    )
}

export default Header