import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { Smallslide } from "./Smallslide";

export const MultipleSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    indicators: true,
    transitionDuration: 400,
    infinite: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div >
            <Smallslide
              para={"Light and Motion stella Pro "}
              image={"https://www.adorama.com/images/product/lm85522ab.jpg"}
            />
          </div>
          <div>
            <Smallslide
              para={"GVM GVM PR 150R"}
              image={"https://www.adorama.com/images/product/gvmpr150r.jpg"}
            />
          </div>
          <div>
            <Smallslide
              para={"WESTCOAT 7 week Parabolic"}
              image={"https://www.adorama.com/images/product/gvmsd200d.jpg"}
            />
          </div>
          <div>
            <Smallslide
              para={"Brother Image Center"}
              image={"https://www.adorama.com/images/product/gvmsd300s.jpg"}
            />
          </div>
          <div>
            <Smallslide
              para={"SmallRig AD 01-3"}
              image={"https://www.adorama.com/images/product/we5i1r50.jpg"}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export const BigSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    transitionDuration: 400,
    infinite: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div>
            <Smallslide
              para={"Fujifilm XT4 Mirrorless"}
              image={"https://www.adorama.com/images/product/ifjxt4s.jpg"}
              price={"$1699.95"}
              buy={"Buy Now"}
            />
          </div>
          <div>
            <Smallslide
              para={"Apple HomePod Generation"}
              image={"https://www.adorama.com/images/product/acmqj73lla.jpg"}
              price={"$629.95"}
              buy={"Buy Now"}
            />
          </div>
          <div>
            <Smallslide
              para={"Sony FE 20-70mm"}
              image={"https://www.adorama.com/images/product/dzoffa1835bl.jpg"}
              price={"$749.95"}
              buy={"Buy Now"}
            />
          </div>
          <div>
            <Smallslide
              para={"ASUS tough Gaming"}
              image={"https://www.adorama.com/images/product/asvg32aqa1a.jpg"}
              price={"$2099.95"}
              buy={"Buy Now"}
            />
          </div>
          <div>
            <Smallslide
              para={"GODOX Movelink ll"}
              image={"https://www.adorama.com/images/product/gomlinkiirxb.jpg"}
              price={"$499.95"}
              buy={"Buy Now"}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

//                 <img
//                   src="https://www.adorama.com/images/product/ifjxt4s.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 style={{ color: "blue" }}>Fujifilm XT4 Mirrorless </h3>
//                 <h2>$1699.95</h2>
//                 <div className="reddiv"></div>
//                 <p>TOP RATED GEAR</p>
//                 <h4 style={{ color: "blue", margin: "20px 20px" }}>Buy Now</h4>
//               </div>
//             </div>
//           </div>

//           <div className="parentbigslide">
//             <div className="bigslideDiv">
//               <div>
//                 <img
//                   src="https://www.adorama.com/images/product/acmqj73lla.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 style={{ color: "blue" }}>
//                   Apple HomePod Secongd Generation
//                 </h3>
//                 <h2>$299.00</h2>
//                 <div className="reddiv"></div>
//                 <p>FREE GIFT</p>
//                 <h4 style={{ color: "blue", margin: "20px 20px" }}>Buy Now</h4>
//               </div>
//             </div>
//           </div>

//           <div className="parentbigslide">
//             <div className="bigslideDiv">
//               <div>
//                 <img
//                   src="https://www.adorama.com/images/product/dzoffa1835bl.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 style={{ color: "blue" }}>Sony FE 20-70mm </h3>
//                 <h2>$799.00</h2>
//                 <div className="reddiv"></div>
//                 <p>NEW ARRIVAL</p>
//                 <h4 style={{ color: "blue", margin: "20px 20px" }}>Buy Now</h4>
//               </div>
//             </div>
//           </div>

//           <div className="parentbigslide">
//             <div className="bigslideDiv">
//               <div>
//                 <img
//                   src="https://www.adorama.com/images/product/asvg32aqa1a.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 style={{ color: "blue" }}>ASUS tough Gaming</h3>
//                 <h2>$4789.00</h2>
//                 <div className="reddiv"></div>
//                 <p>NEW ARRIVAL</p>
//                 <h4 style={{ color: "blue", margin: "20px 20px" }}>Buy Now</h4>
//               </div>
//             </div>
//           </div>

//           <div className="parentbigslide">
//             <div className="bigslideDiv">
//               <div>
//                 <img
//                   src="https://www.adorama.com/images/product/gomlinkiirxb.jpg"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <h3 style={{ color: "blue" }}>GODOX Movelink ll </h3>
//                 <h2>$79.00</h2>
//                 <div className="reddiv"></div>
//                 <p>FREE GIFT</p>
//                 <h4 style={{ color: "blue", margin: "20px 20px" }}>
//                   Buy Now
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     </div>
//   );
// };


