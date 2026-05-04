import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px;
  background: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 340px;
  height: 260px;
  border-radius: 28.48px;
  position: relative;

  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.orange};
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  strong {
    font-size: 22px;
    color: ${(props) => props.theme.black};
    font-weight: 800;
    line-height: 20px;
  }

  /* Notebook pequeno */
  @media (max-width: 1279px) and (min-width: 1024px) {
    width: 300px;
    height: 240px;
    padding: 40px;

    strong { font-size: 18px; }
    p { font-size: 16px; }
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    width: 240px;
    height: 210px;
    padding: 32px 24px;
    gap: 24px;

    div { height: 60px; }
    strong { font-size: 16px; }
    p { font-size: 14px; margin-bottom: 24px; }
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    width: 160px;
    height: 190px;
    padding: 24px 12px 16px;
    gap: 12px;
    border-radius: 16px;
    margin-top: 40px; 

    div { height: 50px; }
    strong { font-size: 12px; }
    p { font-size: 12px; margin-bottom: 16px; }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    width: 145px;
    height: 175px;
    padding: 55px 10px 50px;
    gap: 30px;
    margin-top: 45px;

    div { height: 45px; }
    strong { font-size: 11px; }
    p { font-size: 11px; margin-bottom: 12px; }
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -60px;
  left: 40%;
  transform: translateX(-50%);
  object-fit: contain;

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    height: 80px;
    top: -40px;
  }

  /* Mobile padrão  */
  @media (max-width: 767px) {
    height: 65px;
    top: -38px;
    left: 45%;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    height: 55px;
    top: -32px;
    left: 45%;
  }
`;