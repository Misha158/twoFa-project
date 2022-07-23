import styled from "styled-components";

const getLeft = ({ text }) => {
  if (text === "Good") {
    return "57px";
  }

  if (text === "Bad") {
    return "62px";
  }

  if (text === "Normal") {
    return "52px";
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
  width: 150px;
  height: 150px;

  .gradientPie::before {
    content: ${({ text }) => (text ? `"${text}"` : "")};
    position: absolute;
    top: 85px;
    left: ${getLeft};
    color: ${getColor};
    font-weight: 600;
  }
`;
