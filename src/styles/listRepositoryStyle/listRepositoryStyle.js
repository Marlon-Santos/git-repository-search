import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 25px 15px 0 15px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  align-content: space-between;
  justify-items: center;
  li {
    padding: 10px 0;
    overflow: auto;
    width: calc(100% - 100px);
    white-space: nowrap;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    text-align: right;
    flex: 1;
  }

  li + a + span {
    width: 100%;
    border-top: 1px solid #ddd;
    :last-child {
      width: 100%;
      border-top: 0px solid #ddd;
    }
  }
`;
export default List;
