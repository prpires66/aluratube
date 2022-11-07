import config from "../config.json"
import styled from "styled-components";

function HomePage() {
  const estiloDaHomePage = { backgroundColor: "red" };

  console.log(config.playlists);

  return (
    <div style={estiloDaHomePage}>
      <Menu />
      <Header />
      <TimeLine playlists={config.playlists} />
    </div >

  )
};

export default HomePage

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    
  }
`;
function Menu() {
  return (
    <div>
      Menu
    </div>
  )
}

function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function TimeLine(props) {
  console.log("Dentro do componente", props)
  return (
    <div>
      TimeLine
    </div>
  )
}