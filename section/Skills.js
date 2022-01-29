import { coding, language } from "../data/setting";
import { Progress } from "react-sweet-progress";
import dynamic from "next/dynamic";
import "react-sweet-progress/lib/style.css";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

export const Skills = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-xl lg:text-2xl lg:font-medium  mb-4 pb-2 border-b-2">
          Coding
        </h2>
        <ul>
          {coding.map((item, key) => (
            <li className="py-2" key={key}>
              <h2 className="font-light py-2 text-sm capitalize">{item.title}</h2>
              <Progress
                percent={item.percent}
                status="active"
                theme={{
                  active: {
                    symbol: item.percent + "%",
                    trailColor: "#CBD4E3",
                    color: "#EEA303",
                  },
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="text-xl lg:text-2xl lg:font-medium  mb-4 pb-2 border-b-2">
          Langauge
        </h2>
        <ul>
          {language.map((item, key) => (
            <li key={key} className="flex flex-col py-2">
              <span className="my-4 font-light capitalize text-sm">{item.title}</span>
              <StarRatings
                rating={item.rating}
                numberOfStars={10}
                starRatedColor="#EEA303"
                name="rating"
                starDimension="30px"
                starSpacing="5px"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
