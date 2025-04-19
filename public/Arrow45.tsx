import { IconProps } from "./type";

export const Arrow45 = ({
  width = 10,
  height = 10,
  fill = '#C4E839',
}: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.521.815a.777.777 0 0 0-.42-.42.777.777 0 0 0-.295-.062H1.032a.777.777 0 0 0 0 1.555h5.9L.48 8.333a.777.777 0 0 0 .253 1.274.777.777 0 0 0 .85-.17L8.03 2.984v5.9a.777.777 0 0 0 1.554 0V1.112a.777.777 0 0 0-.062-.296z'
        fill={fill}
      />
    </svg>
  );
};
