import React, { useState } from "react";
import * as S from "./styles";

interface Props {
  onNavigate?: () => void;
}

const TabNames = ["Your Feed", "Global Feed"];

export default function FeedNav({ onNavigate }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    setActiveIndex(Number(currentTarget.dataset.index));
  };

  return (
    <S.FeedNav>
      {TabNames.map((tabName, idx) => (
        <S.Tab
          key={tabName}
          isActive={activeIndex === idx}
          data-index={idx}
          onClick={handleClick}
        >
          {tabName}
        </S.Tab>
      ))}
    </S.FeedNav>
  );
}
