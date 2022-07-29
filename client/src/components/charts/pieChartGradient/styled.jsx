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
  position: ${({ size }) => size === "small" && "absolute"};
  top: -25px;
  right: 20px;

  .gradientPie::before {
    content: ${({ text }) => (text ? `"${text}"` : "")};
    position: absolute;
    top: 140px;
    left: ${getLeft};
    color: ${getColor};
    font-weight: 600;
  }
`;

export const PieBackground = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: white;
  right: 25px;

  ${({ size }) =>
    size === "small"
      ? `
    width: 65px;
    height: 65px;
    top: -20px;
  `
      : `
    width: 155px;
    height: 155px;
    top: 80px;
  `}
`;
