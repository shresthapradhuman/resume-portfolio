import Image from "next/image";

const BlogCard = ({ thumbnail, category, date, title, excerpt }) => {
  return (
    <li className="w-full">
      <Image
        alt={"forums image"}
        src={thumbnail}
        width="100"
        height="100"
        layout="responsive"
        className="w-full object-cover object-center"
        priority
      />
      <div className="my-2">
        <div className=" mb-2">
          {category.map((cat, key) => (
            <span
              key={key}
              className="text-sm font-medium bg-orange-400 p-1 rounded first:ml-0 ml-2"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="text-base font-medium">{date}</p>
        <h3 className="text-xl">{title}</h3>
        <p className="text-lg font-light">{excerpt}</p>
      </div>
    </li>
  );
};

export default BlogCard;
