"use client";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <button className="btn btn-primary btn-small">Button - Small</button>
          <br />
          <button className="btn btn-primary btn-medium">
            Button - Medium
          </button>
          <br />
          <button className="btn btn-primary btn-large">Button - Large</button>
        </section>
        <section>
          <button className="btn btn-secondary btn-small">
            Button - Small
          </button>
          <br />
          <button className="btn btn-secondary btn-medium">
            Button - Medium
          </button>
          <br />
          <button className="btn btn-secondary btn-large">
            Button - Large
          </button>
        </section>
      </main>
    </>
  );
}
