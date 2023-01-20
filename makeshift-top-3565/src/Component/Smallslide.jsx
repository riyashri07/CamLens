import { Slidecss } from "./Slidecss";
export const Smallslide = ({ image, para, price, buy }) => {
  return (
    <Slidecss>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{para}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
      <div>
        <p>{buy}</p>
      </div>
    </Slidecss>
  );
};
