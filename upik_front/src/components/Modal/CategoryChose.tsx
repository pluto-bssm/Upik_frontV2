import styled from "@emotion/styled";
import Image from "next/image";
import Select from "@/app/Images/Select.svg";

const Box = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fdfffc;
  border-radius: 24px 24px 0 0;
  padding: 32px 24px 0 24px;
  box-sizing: border-box;
  position: fixed;
`;

const Title = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #011627;
  margin-bottom: 32px;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #c8c8c8;
    margin: 0 auto 12px auto;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li<{ selected?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ selected }) => (selected ? "#FF9F1C" : "#011627")};
  margin-bottom: 24px;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 24px;
  top: 32px;
`;

type Props = {
  category: string;
  setGuideCategory: (category: string) => void;
};

const categories = ["기숙사", "학교생활", "유머"];

export default function CategoryChoseBox({ category, setGuideCategory }: Props) {
  return (
    <Box>
      <Title>카테고리 선택</Title>
      <ArrowIcon>
        <Image src={Select} alt="arrow" width={28} height={28} />
      </ArrowIcon>
      <CategoryList>
        {categories.map((cat) => (
          <CategoryItem
            key={cat}
            selected={cat === category}
            onClick={() => setGuideCategory(cat)}
          >
            {cat}
          </CategoryItem>
        ))}
      </CategoryList>
    </Box>
  );
}