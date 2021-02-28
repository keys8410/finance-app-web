import React from 'react';
import { useAuth } from '../../../contexts/authProvider';

const UnauthorizedAccess = () => {
  const { sair } = useAuth();
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <div>
        <div className="justify-content-center">
          <div>
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">403</h1>
              <h4 className="pt-3">
                Opa! Parece que você está sem acesso a esta funcionalidade.
              </h4>
              <p className="text-muted float-left">
                Talvez seja necessário uma autorização elevada. Entre em contato
                com a administração.
              </p>
              <button color="primary" onClick={sair}>
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;
