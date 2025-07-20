import Link from "next/link";

function Navbar(props) {
  return (
    <div>
      <nav className=" flex justify-center py-10">
        <ul className=" flex gap-10">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>{" "}
          <li>
            <Link href={"/products/add"}>Add Products</Link>
          </li>{" "}
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>{" "}
          <li>
            <Link href={"/meals"}>Meals</Link>
          </li>{" "}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
