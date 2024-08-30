import CenterLayout from "./components/UI/CenterLayout";
import GoToLink from "./components/UI/GoToLink";

export default function HomePage() {
  return (
    <CenterLayout>
      <section id="home-page">
        <h1 className="text-center text-2xl md:text-3xl text-slate-300">
          Welcome to our HomePage
        </h1>
        <h2 className="text-center text-xl md:text-2xl text-slate-400">
          Read or Share in our Blog
        </h2>
        <div className="mt-3 flex items-center justify-center">
          <GoToLink
            path="/blog"
            text="Search Blog"
            className="w-40 text-center rounded-sm bg-slate-700"
          />
        </div>
      </section>
    </CenterLayout>
  );
}
