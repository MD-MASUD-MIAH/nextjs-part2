import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({

  weight:['400','700'],
  subsets:['latin']
})
export const metadata = {
  title: "All Meals",
  description: "Meals Loaded from MealDB API",
};

async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data.meals || []);
      return data.meals;
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  const meals = await fetchMeals();

  console.log(meals);

  return (
    <div className="flex flex-col items-center justify-center">
      <MealSearchInput></MealSearchInput>

      <div className=" w-11/12 mx-auto grid grid-cols-4 py-9 gap-6">
        {meals?.map((meal) => (
          <div className=" gap-2" key={meal.idMeal}>
            <Image width={641} height={641} src={meal.strMealThumb} alt="" />
            <p className={`font-bold text-xl test ${lato.className}`}>{meal.strMeal}</p>
            <p>{meal.strInstructions}</p>

            <Link href={`/meals/${meal.idMeal}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealsPage;
