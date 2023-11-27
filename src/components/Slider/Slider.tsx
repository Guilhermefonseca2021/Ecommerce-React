import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Slider.css";
import { useState } from 'react'

export default function Slider() {
  const [currentSlide, setCurrentSlider] = useState(0);

  function prevSlide() {
    setCurrentSlider(currentSlide == 0 ? 2 : (prev) => prev - 1);
  }

  function nextSlide() {
    setCurrentSlider(currentSlide == 2 ? 0 : (prev) => prev + 1)
  }

  const dataSlider = [
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={dataSlider[0]} alt="" />
        <img src={dataSlider[1]} alt="" />
        <img src={dataSlider[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon">
          <ArrowForwardIcon onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
}


// export default Slider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
//   };
//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
//   };

//   return (
//     <div className="slider">
//       <div className="container" style=>
//         <img src={data[0]} alt="" />
//         <img src={data[1]} alt="" />
//         <img src={data[2]} alt="" />
//       </div>
//       <div className="icons">
//         <div className="icon" onClick={prevSlide}>
//           <WestOutlinedIcon />
//         </div>
//         <div className="icon" onClick={nextSlide}>
//           <EastOutlinedIcon />
//         </div>
//       </div>
//     </div>
//   );
// };