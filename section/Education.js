import { education } from "../data/setting";

export const Education = () => {
  return (
    <div className="education my-5">
      <h2 className="title text-xl lg:text-2xl lg:font-medium  mb-4 pb-2 border-b-2">
        Education
      </h2>
      <ul>
        {education.map((item, key) => (
          <li key={key} className="mb-4">
            <h2 className="mb-2 text-base lg:text-lg font-normal">
              {item.school}
            </h2>
            <span className="font-medium text-sm mb-2 block">{`${item.from} ~ ${item.to}`}</span>
            <span className="font-light text-base pb-2">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
