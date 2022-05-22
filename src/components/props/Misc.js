
import { useState } from 'react'
import style from "../../module/index.module.css";


export const Modal = ({props}) => {
    const [modal, setModal] = useState(false);
    const [msg, setMsg] = useState(props);

    const showModal = () => {
      !modal ? setModal(true) : setModal(false);
    };

    return (
      <div className={style.container}>
        <h1 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>Modal Using Props</h1>
        {modal && (
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <p
              style={{
                color: "green",
                textAlign: "center",
                padding: "8px 0px",
                fontWeight: "bold",
              }}
            >
              "{msg}"
            </p>
            {modal && (
              <button
                className={style.btn}
                style={{
                  backgroundColor: "red",
                  padding: "0px 16px",
                  color: "#fff",
                }}
                onClick={showModal}
              >
                Hide
              </button>
            )}
          </div>
        )}

        {!modal && (
          <button
            className={style.btn}
            style={{ margin: "8px 0px" }}
            onClick={showModal}
          >
            Show Modal
          </button>
        )}
      </div>
    );
};


export const UserModel = ({ user }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background:'#D9A08B', padding:'16px', borderRadius:'5px', width:'188px' }}>
      <p>Title: {user.name.title}</p>
      <img style={{borderRadius:'100%'}} src={ user.picture.thumbnail}/>
      <h2 style={{margin:'0px', fontSize:'1.1rem', textAlign:'center'}}>{user.name.first} {user.name.last}</h2>
      <p> Ntionality: { user.nat}</p>

  </div>
)

}

