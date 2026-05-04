import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  * {
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.secondBlack};
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 13px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .items {
      grid-area: items;
      padding-left: 20px;

      @media (max-width: 480px) {
        padding-left: 10px;
      }
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
      text-align: right;

      @media (max-width: 480px) {
        padding-right: 10px; /* ✅ era 90px, corrigido */
      }
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;

      @media (max-width: 480px) {
        padding-left: 10px;
      }
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
      text-align: right;

      @media (max-width: 480px) {
        padding-right: 10px; /* ✅ era 90px, corrigido */
      }
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 12px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 0 21px;
    margin-bottom: 40px;

    * {
      font-weight: 700;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 0 10px; /* ✅ era padding-right: 90px, corrigido */
      margin-bottom: 24px;
    }
  }
`;