import { working } from "../data/setting";

export const Experience = () => {
  return (
    <div className="experience">
      <span className="title font-medium text-4xl block mb-5 border-b-2 py-2       ">
        Experience
      </span>
      <ul>
        {working.map((item, key) => (
          <li key={key} className="xl:px-10 px-5 py-5 shadow mb-4 last:mb-0">
            <span className="block text-2xl font-medium mb-2">{item.work}</span>
            <span className="block text-base mb-2">{`${item.from} ~ ${item.to}`}</span>
            <span className="block text-xl font-light">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
