import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";

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

  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("project")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src={detailData.images1} alt=""></img>
          </a>
        </Wrap>
        {detailData.images2 && (
          <Wrap>
            <a>
              <img src={detailData.images2} alt=""></img>
            </a>
          </Wrap>
        )}
        {detailData.images3 && (
          <Wrap>
            <a>
              <img src={detailData.images3} alt=""></img>
            </a>
          </Wrap>
        )}
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
          margin-left: auto;
          margin-right: auto;
          height: 100%; 
        }
      
        &:hover{
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
  }


`;
