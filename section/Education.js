import { education } from "../data/setting";

export const Education = () => {
  return (
    <div className="education my-10">
      <span className="title text-4xl font-medium block mb-10 border-b-2 py-2">
        Education
      </span>
      <ul>
        {education.map((item, key) => (
          <li key={key} className="xl:px-10 px-5 py-5 shadow mb-4 last:mb-0">
            <span className="block text-2xl font-medium mb-2">
              {item.school}
            </span>
            <span className="block text-base mb-2">{`${item.from} ~ ${item.to}`}</span>
            <span className="block text-xl font-light">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
