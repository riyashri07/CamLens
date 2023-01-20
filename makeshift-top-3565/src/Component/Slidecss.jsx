import styled from "styled-components";
export const Slidecss = styled.div`
  border: 3px solid white;
  background-color: white;
  //   box-shadow: 0px 2px 3px #cccccc;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 4%;
  margin: 10px;
  margin-top: 40px;
  transition: all.5s;
  :hover {
    border: 5px solid #004387;
  }
`;

export const Bigslide = styled.div`
  height: 370px;
  padding: 20px;
  box-shadow: 0px 0px 3px #c0bdbd;
  border: 1px solid teal;
  width: 90%;
  background-color: white;
  border-radius: 8px;
  margin: auto;
  margin-top: 40px;
  .supreoffers {
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 90%;
    justify-content: space-evenly;
    gap: 100px;
    background-color: white;
    border: 0px solid red;
    margin: auto;

    h1 {
      font-size: 40px;
      position: relative;

      color: #363636;
    }
    div {
      display: flex;
      flex-direction: row;
      border: 1px solid pink;
      margin: 5px;
      padding: 10px;
      gap: 30px;
      height: 50px;
      color: red;
      font-weight: bold;
    }
  }
  .parentbigslide {
    padding: 30px;
  }
  .bigslideDiv {
    display: grid;
    cursor: pointer;
    grid-template-columns: 30% 70%;
    width: 480px;
    box-shadow: 0px 0px 5px #a8a6a6;
    border-radius: 8px;
    height: 150px;
    gap: 5px;
    padding: 1%;
    border:1px solid blue;
    div {
      padding-top: 0px;
      margin-top: 0px;
    }
    h3 {
      font-size: 100%;
    }
    h2 {
      font-size: 18px;
    }
    img {
      border-radius: 8px;
      margin: 10px 10px;
    }
    p {
      font-size: 11px;
      border: 0px solid blue;
      color: gray;
    }
    span {
      color: gray;
      font-size: 10px;
      margin: 0px 5px 50px 30px;
      bottom: 5px;
      left: 18px;
    }
    h4 {
      font-size: 18px;

      right: 20px;
      color: #2b3cd1;
      text-align: right;
    }
    .reddiv {
      width: 50px;
      background-color: red;
      height: 2px;
      position: relative;
      top: -55px;
    }
  }
`;


