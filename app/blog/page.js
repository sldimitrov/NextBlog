import CenterLayout from "../components/UI/CenterLayout";
import GoToLink from "../components/UI/GoToLink";

export default function BlogPage() {
  return (
    <CenterLayout>
      <div className="flex flex-col items-center h-20 justify-between">
        <h1 className="text-center text-2xl md:text-3xl text-slate-300">
          Main Blog Page
        </h1>
        <GoToLink
          path="/"
          text="Back to Home"
          className="w-40 text-center rounded-sm bg-slate-700"
        />
      </div>
    </CenterLayout>
  );
}
