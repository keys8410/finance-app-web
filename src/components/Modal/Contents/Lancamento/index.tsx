import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import { Forms, Row, Col } from '../../../../styles/globalStyles';
import InputField from '../../../Forms/InputField';
import { Modalbody } from '../styles';

const Lancamento = () => {
  const formLancamento = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {}, []);

  return (
    <Modalbody quitMission>
      <Forms ref={formLancamento} onSubmit={handleSubmit}>
        <InputField name="nome" label="Título" />
      </Forms>
    </Modalbody>
  );
};

export default Lancamento;
