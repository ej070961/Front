import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
type OptionProps = {
  selectedImageOption: string;
  setSelectedImageOption: React.Dispatch<React.SetStateAction<string>>;
};
function ImageStyleOption({
  selectedImageOption,
  setSelectedImageOption,
}: OptionProps) {
  const categories = [
    {
      id: "WATERCOLOR",
      label: "Watercolor",
    },
    {
      id: "VINTAGE",
      label: "Vintage",
    },
    {
      id: "POPART",
      label: "Pop Art",
    },
    {
      id: "REALISTIC",
      label: "Realistic",
    },
    {
      id: "CARTOON/COMIC",
      label: "Cartoon/Comic",
    },
    {
      id: "ANIMATION",
      label: "Animation",
    },
    {
      id: "GOTHIC",
      label: "Gothic",
    },
    {
      id: "SURREAL",
      label: "Surreal",
    },
    { id: "DISNEY", label: "Disney" },
    {
      id: "PIXELART",
      label: "Pixel Art",
    },
    {
      id: "FANTASY",
      label: "Fantasy",
    },
  ];
  return (
    <OptionBox>
      {categories.map((category, index) => (
        <OptionBtn
          key={index}
          $active={selectedImageOption === category.id}
          onClick={() => setSelectedImageOption(category.id)}
        >
          {category.label}
        </OptionBtn>
      ))}
    </OptionBox>
  );
}

export default React.memo(ImageStyleOption);

const OptionBox = styled.div`
  ${tw`w-[622px] inline-block items-center justify-center `}
`;

const OptionBtn = styled.button<{ $active: boolean }>`
  ${tw`font-display font-light rounded-[20px] px-[12px] border-[1px] m-[5px]`}

  ${({ $active }) =>
    $active
      ? tw`text-white bg-[rgba(141, 126, 253, 0.6)] border-mainColor`
      : tw`text-subGray border-subGray bg-gray`}
`;
