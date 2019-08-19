import React from "react";
import {Container, TitleContainer, Title, InputContainer, ContainerInput, TalkBubble, BodyContainer} from "./styles";
import Button from "@material-ui/core/Button";

export default function Chat() {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Conversas</Title>
        </TitleContainer>
        <BodyContainer>
          <TalkBubble>
            <p>Olá</p>
          </TalkBubble>
        </BodyContainer>
        <InputContainer>
          <ContainerInput
            placeholder="Enviar mensagem"
          />
          <Button href={""} variant="contained" color="primary">
            Enviar
          </Button>
        </InputContainer>
      </Container>
    </>
  )
}
