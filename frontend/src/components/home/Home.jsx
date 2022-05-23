import React from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'home',
    title: 'Início',
    subtitle: 'Project Login'
}

export default props =>
    <Main {...headerProps}>
        <div className="display-4"> Bem Vindo!</div>
        <hr />
        <p className="mb-0"> Desenvolvendo CRUD em React</p>
    </Main>