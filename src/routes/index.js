import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Page404 from '../pages/Page404';

const Home = lazy(() => import('../pages/Home'));
const Nt012020 = lazy(() => import('../pages/NT012020'));

export default function Routes() {
  return (
    <Suspense
      fallback={
        <div style={{ height: '100vh' }}>
          <div className="d-flex h-100 justify-content-center align-items-center">
            <h3>Carregando...</h3>
          </div>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={Nt012020} />
        {/* <Route exact path="/escaninho" component={Escaninho} /> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/adicionarProtocolo" component={AddProtocol} /> */}
        {/* <Route path="/editarProtocolo" render={(props) => <EditProtocol {...props} />} /> */}
        {/* <Route path="/cadastro" component={Register} /> */}
        {/* <Route path="/perfil" component={Profile} /> */}
        {/* <Route path="/usuarios" component={Users} /> */}
        <Route path="/nt012020" component={Nt012020} />
        <Route path="*" component={Page404} />
      </Switch>
    </Suspense>
  );
}
