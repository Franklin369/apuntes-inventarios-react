import styled from "styled-components";
import { BtnCircular, UserAuth, v,ListaMenuDesplegable,DesplegableUser, useAuthStore } from "../../index";
export function Header({ stateConfig }) {
  const {signOut} = useAuthStore()
  const { user } = UserAuth();
  const funcionXtipo = async (p) => {
    if (p.tipo === "cerrarsesion") {
     
      await signOut();
    }
  };
  return (
    <Container>
      
      <Datauser onClick={stateConfig.setState}>
        <div className="imgContainer">
          <img src="https://i.ibb.co/kGYgRZ8/programador.png" />
        </div>
        <BtnCircular
          icono={<v.iconocorona />}
          width="25px"
          height="25px"
          bgcolor={`linear-gradient(15deg, rgba(255, 88, 58, 0.86) 9%, #f8bf5b 100%);`}
          textcolor="#ffffff"
          fontsize="11px"
          translatex="-50px"
          translatey="-12px"
        />
        <span className="nombre">{user.email}</span>
        {stateConfig.state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          top="62px"
          funcion={(p) => funcionXtipo(p)}
        />
      )}
      </Datauser>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;
`;
const Datauser = styled.div`
  z-index: 10;
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .nombre {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
