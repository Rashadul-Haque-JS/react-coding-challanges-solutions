const Header = ({props,clr}) => {
    return(
        <div style={{background:clr,padding:'32px 0px', }}>
            <h1 style={{ color: "#ffffff", textAlign: "center",textTransform:'uppercase', fontSize:'1.3rem' , fontWeight:'normal'}}>{props }</h1>
        </div>
    )
}

export default Header