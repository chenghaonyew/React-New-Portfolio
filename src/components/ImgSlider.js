import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Project1 from "../images/campground1.jpg";
import Project2 from "../images/old-portfolio1.png";
import Project3 from "../images/old-portfolio2.png";

const ImgSlider = (props) => {
  // yarn add react-slick
  // yarn add slick-carousel
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src={Project1} alt=""></img>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={Project2} alt=""></img>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={Project3} alt=""></img>
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  // can see both current and upcoming slider
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a{
      border radius: 4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        
        img{
            width: 100%;
            height: 600px; 
        }
      
        &:hover{
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
  }


`;
