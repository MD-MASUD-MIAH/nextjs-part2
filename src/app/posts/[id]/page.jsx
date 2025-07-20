export const getSingle = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const singlePost = await getSingle(id);

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: singlePost.title,
    description: singlePost.body
  };
}

async function Single({ params }) {
  const p = await params;
  const single = await getSingle(p.id);
  return (
    <div
      className=" flex flex-col justify-center
         items-center"
    >
      <p>Id : {single.id}</p>

      <p className="text-2xl font-bold">{single.title}</p>
      <p>{single.body}</p>
    </div>
  );
}

export default Single;
