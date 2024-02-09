import "../index.css";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
        <p className="mb-12">
          My name is Maximiliano Naddeo, I am a front-end developer based in
          Wörgl, Tyrol, Austria. I currently have one project to showcase which
          I created during my web developement bootcamp with Ironhack.
        </p>
        <div>
          <h2 className="text-2xl font-bold">Checkout my latest projects:</h2>
        </div>
      </div>
    </>
  );
}

export default HomePage;
