import { working } from "../data/setting";

export const Experience = () => {
  return (
    <div className="experience">
      <h2 className="title text-xl lg:text-2xl lg:font-medium  mb-4 pb-2 border-b-2">
        Experience
      </h2>
      <ul>
        {working.map((item, key) => (
          <li key={key} className="mb-4">
            <h2 className="mb-2 text-base lg:text-lg font-normal">{item.work}</h2>
            <span className="font-medium text-sm mb-2 block">{`${item.from} ~ ${item.to}`}</span>
            <p className="font-light text-base pb-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
