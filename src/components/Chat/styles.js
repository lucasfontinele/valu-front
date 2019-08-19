import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 80px);
  background: #ECF1F8;
  border: solid #D9D9D9 1px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 80px;
  width: 30%;
`;

export const TitleContainer = styled.div`
  background: #9b59b6;
`;

export const Title = styled.p`
  text-align: center;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 20px;
`;

export const InputContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  display: flex; 
  padding-left: 5px;
  flex-direction: row;
`;

export const ContainerInput = styled.input`
  height: 40px;
  width: 70%;
`;

export const BodyContainer = styled.div`
  padding: 30px 0 30px 30px;
`;

export const TalkBubble = styled.div`  
  width: 120px;
  height: 40px;
  background: white;
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  align-items: center;
  display: flex;  
  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 6px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid white;
    border-bottom: 13px solid transparent;
  }
`;
