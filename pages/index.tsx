import { IMAGE_PATHS } from "../constants";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="w-[90%] h-[380px] bg-cover bg-center rounded-[11.13px] flex justify-center items-center align-center text-center"
        style={{ backgroundImage: `url(${IMAGE_PATHS.bgImg})` }}
      >
        <div>
          <h1 className="text-white text-[28.28px] font-medium p-2 leading-[29.78px]">
            Find your favorite 
            <br /> place here!”
          </h1>
          <p className="text-white text-[7.42px] font-light font-Quicksand leading-[13px]">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
