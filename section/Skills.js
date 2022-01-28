import { coding, language } from "../data/setting";
import { Progress } from "react-sweet-progress";
import dynamic from "next/dynamic";
import "react-sweet-progress/lib/style.css";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

export const Skills = () => {
  return (
    <div className="my-10 flex flex-wrap justify-between w-full">
      <div className="lg:basis-6/12 basis-full">
        <h2 className="text-4xl font-medium block mb-2 py-2">Coding</h2>
        <div className="flex">
          <div className="basis-full">
            <ul>
              {coding.map((item, key) => (
                <li className="px-2 py-2" key={key}>
                  <span className="block text-left py-2">{item.title}</span>
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
        </div>
      </div>
      <div className="lg:basis-6/12 basis-full lg:pl-10 pb-10 lg:pb-0">
        <h2 className="text-4xl font-medium block py-2">Langauge</h2>
        <div className="flex">
          <div className="basis-full">
            <ul>
              {language.map((item, key) => (
                <li key={key} className="flex flex-col py-2">
                  <span className="my-4 uppercase">{item.title}</span>
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
      </div>
    </div>
  );
};
