import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = React.useState(false);
  return (
    <StyledRegisterVideo>
      <button className="add-video">+</button>
      {formVisivel ? (
        <form>
          <div>
            <button className="close-modal">X</button>
            <input placeholder="Título do video" />
            <input placeholder="URL" />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
