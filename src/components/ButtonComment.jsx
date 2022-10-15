import styled from "styled-components";

const Button = styled.button`
  border: 1px solid black;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  padding: 0px 10px;
  background-color: inherit;
  margin-left: auto;
  border: 1px solid ${(props) => props.color};
`;

function ButtonComment({ children }) {
  const getColor = (btnname) => {
    switch (btnname) {
      case "등록":
        return "#2bd8d8";
      case "업데이트":
        return "#1182cd";
      default:
        return "black";
    }
  };

  return <Button color={getColor(children)}>{children}</Button>;
}

export default ButtonComment;
