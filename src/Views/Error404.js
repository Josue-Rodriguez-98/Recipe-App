import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import EmptyLayout from "../Layouts/EmptyLayout";

class Error404 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <EmptyLayout>
        <div className="error-page">
          <header className="error-page__header">
            <img
              className="error-page__header-image"
              src="https://media.giphy.com/media/mPytjcsG3XS4o/giphy.gif"
              alt="Sad computer"
            />
            <h1 className="error-page__title nolinks">Página no encontrada</h1>
          </header>
          <p>La página que busca no se pudo encontrar.</p>
          <div className="volverDiv">
            <Link className="volver" to="/">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </EmptyLayout>
    );
  }
}

export default Error404;
