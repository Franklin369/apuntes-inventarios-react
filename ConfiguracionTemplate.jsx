import styled from "styled-components";
import fondocuadros from "../../assets/fondocuadros.svg";
import {  Link } from "react-router-dom";
import { DataModulosConfiguracion } from "../../utils/dataEstatica";
export function ConfiguracionTemplate() {
  
  return (
    <Container>
     
      <div id="cards">
        {DataModulosConfiguracion.map((item, index) => {
          return (
            <Link to={item.state?item.link:""} className={item.state?"card": "card false"} key={index}>

            
              <div class="card-content">
                <div class="card-image">
                  <img src={item.icono} />
                </div>
       

                <div class="card-info-wrapper">
                  <div class="card-info">
                    <i class="fa-duotone fa-unicorn"></i>
                    <div class="card-info-title">
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23, 23, 23);
  background-image: url(${fondocuadros});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat, repeat;
  align-items: center;
  background-color: ${({ theme }) => theme.bgtotal};
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #484848;
    border-radius: 10px;
  }
  #cards {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 916px;
    width: calc(100% - 20px);
  }

  #cards:hover > .card::after {
    opacity: 1;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    height: 260px;
    flex-direction: column;
    position: relative;
    width: 300px;
    transition: 0.3s;
    border: 0.5px solid transparent;
    &:hover {
      border: 1px solid ${(props) => props.theme.bg5};
      .card-image {
        img {
          filter: grayscale(0);
        }
      }
    }
    &.false{
      &:hover {
      border: 1px solid red;
      .card-image {
        img {
          filter: grayscale(0);
        }
      }
    }
    }
  }

  .card:hover::before {
    opacity: 1;
  }

  .card::before,
  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  .card::before {
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }

  .card > .card-content {
    background-color: ${({ theme }) => theme.bgcards};
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }

  h1,
  h2,
  h3,
  h4,
  span {
    color: ${({ theme }) => theme.colorsubtitlecard};
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    margin: 0px;
  }

  i {
    color: ${({ theme }) => theme.colorsubtitlecard};
  }

  .card-image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;

    img {
      transition: 0.3s;
      height: 70%;
      filter: grayscale(100%);
    }
  }

  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
  }

  .card-info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }

  .card-info > i {
    font-size: 1em;
    height: 20px;
    line-height: 20px;
  }

  .card-info-title > h3 {
    font-size: 1.1em;
    line-height: 20px;
  }

  .card-info-title > h4 {
    color: ${({ theme }) => theme.colortitlecard};
    font-size: 0.85em;
    margin-top: 8px;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    body {
      align-items: flex-start;
      overflow: auto;
    }

    #cards {
      max-width: 1000px;
      padding: 10px 0px;
    }

    .card {
      flex-shrink: 1;
      width: calc(50% - 4px);
    }
  }

  @media (max-width: 500px) {
    .card {
      height: 180px;
    }

    .card-image {
      height: 80px;
    }

    .card-info-wrapper {
      padding: 0px 10px;
    }

    .card-info > i {
      font-size: 0.8em;
    }

    .card-info-title > h3 {
      font-size: 0.9em;
    }

    .card-info-title > h4 {
      font-size: 0.8em;
      margin-top: 4px;
    }
  }

  @media (max-width: 320px) {
    .card {
      width: 100%;
    }
  }

  #youtube-link {
    bottom: 10px;
  }
`;

