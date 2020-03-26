import React from "react";
import * as S from "./style.js";

export default ({ ...props }) => {
  const { handleBackClick, title } = props;
  return (
    <S.CallBackContainer onClick={handleBackClick}>
      <i className="iconfont icon_left">&#xe69d;</i>
      <div className="title">{title}</div>
    </S.CallBackContainer>
  );
};