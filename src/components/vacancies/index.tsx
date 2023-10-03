import { VacancySlider } from "../vacanyslider";

export const Vacanies = () => {
  return (
    <div className="bg-[#dddddd]">
      <div className="flex flex-col text-center pt-10 p-5">
        <p className="font-semibold  capitalize  text-3xl md:text-[3rem] text-gray-800 mb-6 ">
          Come join us
        </p>
        <span className=" text-xl text-gray-500">
          and make an impact in Indonesia
        </span>

        <div>
          <button className="rounded-full  text-gray-100 bg-[#038767] p-[1rem] w-[220px] mt-[2rem]">
            Search for vacancies
          </button>
        </div>
      </div>
      <VacancySlider />
    </div>
  );
};
