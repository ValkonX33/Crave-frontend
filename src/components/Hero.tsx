import boy from "../assets/boy.png"
import verified from "../assets/verified.png"
import woman from "../assets/woman.png"

const Hero = () => {
  return (
    <>
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center text-center gap-20 mt-20 ">
        <div className="text-4xl text-wrap">
          <div className="font-serif text-7xl pt-1">Savor <br/> the <br/> Flavor </div>
          <br />
          <div className="font-semibold text-5xl text-orange-500">Order Now and Indulge!</div>
          <br />
          <div className="w-full text-[20px] text-slate-800 text-wrap break-words">Ignite Your Appetite with Our Mouthwatering Selection <br/> Order, Sit Back, and Enjoy the Flavor Explosion!</div>
        </div>

        <div className="relative md:ml-20  ">
          <img src="https://res.cloudinary.com/dpprgvafz/image/upload/v1720196951/food1_x1ifpm.jpg" alt="" className="rounded-full w-[65vw] md:w-[33vw] h-[45vh] md:h-[70vh] object-cover" />
          <div className=" hidden absolute top-10 md:top-0  text-nowrap right-4 z-10 font-semibold items-center p-3 justify-start bg-white rounded-full w-[200px] h-[50px] md:flex ">
            5.0 Ratings &nbsp; ⭐⭐⭐⭐⭐
          </div>

        <div className="hidden absolute top-80 left-1.5 transform -translate-x-1/2 z-10    justify-start    bg-slate-200  rounded-2xl w-[200px] h-[150px] opacity-75 md:flex md:flex-col">
          <div className="h-[20px] w-[85px] bg-orange-500 text-white font-medium text-[13px] rounded-tl-lg">⭐ 4.6 (456) </div>
          <div className="flex flex-row">
          <img src={boy} alt="" className="h-[4vh] w-[2vw] mt-4 mr-3 ml-3" />
         
          <div className="relative mt-3 text-[10px]">
  <span className="text-sm font-medium">Italian Pasta</span>
  <img src={verified} alt="" className="h-[2vh] w-[1vw] absolute top-1 right-[-16px]" />
  <br />
  Today at 12:00 PM
</div>
        </div>

          <div className="text-[14px] font-light mt-3">
          User-friendly app interface, making ordering a breeze!
          
          </div>
          {/* <div className="absolute bottom-0 right-0 mb-2 mr-4 rounded-xl">
    <img src="src/assets/best.png" alt="" className="h-[3vh] w-[1.5vw]" />
  </div> */}
        </div>


        <div className="hidden absolute bottom-0 right-0 z-10 bg-slate-200 rounded-2xl w-[210px] h-[150px] opacity-75 md:flex  md:flex-col">
  <div className="h-[20px] w-[85px] bg-orange-500 text-white font-medium text-[13px] rounded-tl-lg">⭐ 4.4 (246) </div>
  <div className="flex flex-row">
    <img src={woman} alt="" className="h-[4vh] w-[2vw] mt-4 mr-3 ml-3" />
  
    <div className="relative mt-3 text-[10px]">
      <span className="text-[11px] font-medium mr-1">Mamma Mia's Spaghetti</span>
      <img src={verified} alt="" className="h-[2vh] w-[1vw] absolute top-0 right-[-16px] " />
      <br />
      Today at 3:10 PM
    </div>
  </div>

  <div className="text-[14px] font-light mt-3">
  Convenient and reliable food delivery service!
  </div>
</div>









      </div>
    </div>
    
    </>
  )
}

export default Hero;
