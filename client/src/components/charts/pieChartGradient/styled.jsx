import styled from "styled-components";

const getLeft = ({ text }) => {
  if (text === "Good") {
    return "107px";
  }

  if (text === "Bad") {
    return "115px";
  }

  if (text === "Normal") {
    return "100px";
  }
};

const getColor = ({ text }) => {
  if (text === "Good") {
    return "darkgreen";
  }

  if (text === "Bad") {
    return "darkred";
  }

  if (text === "Normal") {
    return "darkorange";
  }
};

export const PieContainerStyled = styled.div`
  .gradientPie::before {
    content: ${({ text }) => (text ? `"${text}"` : "")};
    position: absolute;
    top: 140px;
    left: ${getLeft};
    color: ${getColor};
    font-weight: 600;
  }
`;
