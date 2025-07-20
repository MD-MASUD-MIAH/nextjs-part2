import Link from "next/link";
import style from "./posts.module.css";
export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};

export const metadata = {
  title: " All Post || Learning Nextjs",
  description: "Loading JSON Holder Data",
};

export default async function Posts(props) {
  const getData = await getPost();
  return (
    <div className="grid grid-cols-4 gap-5">
      {getData.map((res) => (
        <div className="border" key={res.id} res={res}>
          <p>{res.title}</p>

          <p className={style["tes"]}>{res.body}</p>

          <Link href={`/posts/${res.id}`}>
            <button className="bg-green-400">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
