const fetchSingleMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    //   setMeals(data.meals || []);
    return data.meals;
  } catch (error) {
    console.log("Fetch error:", error);
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const [singlePost] = await fetchSingleMeals(id);

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: singlePost.strMeal,
    description: singlePost.strInstructions,
  };
}

async function SingleMealsPage({ params }) {
  const p = await params;

  const s = await fetchSingleMeals(p?.id);

  console.log(s);

  return (
    <div>
      <p>{JSON.stringify(s)}</p>
    </div>
  );
}

export default SingleMealsPage;
