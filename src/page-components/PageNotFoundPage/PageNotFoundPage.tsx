import MyContainer from "../../styling/MyContainer/MyContainer";
import Link from "next/link";

export default function PageNotFoundPage() {
  return (
    <MyContainer>
      <h1 className="font-normal leading-none mt-[272px] text-7xl">404</h1>
      <p className="font-normal leading-relaxed mb-[388px] mt-[3.1748rem] text-gray-600 text-xl">
        This page does&nbsp;not exist.
        <br />
        <em>If anyone asks, you were never&nbsp;here.</em>
        <br />
        <br />
        You can navigate back&nbsp;to{" "}
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
