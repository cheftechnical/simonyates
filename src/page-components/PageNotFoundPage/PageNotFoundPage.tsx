import MyContainer from "../../styling/MyContainer/MyContainer";
import Link from "next/link";

export default function PageNotFoundPage() {
  return (
    <MyContainer>
      <h1 className="font-normal leading-none mt-[272px] text-7xl">404</h1>
      <p className="font-normal leading-normal mb-[388px] mt-[3.1748rem] text-gray-600 text-xl">
        Sorry, that page doesn&rsquo;t&nbsp;exist.
        <br />
        But you can navigate back to&nbsp;
        <Link
          href="/"
          className="font-bold text-gray-900 pb-1 hover:text-blue-500 hover:underline"
        >
          home
        </Link>
        .
      </p>
    </MyContainer>
  );
}
