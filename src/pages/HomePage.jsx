import "../index.css";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center mb-10 mx-12">
        <h1 className="text-3xl font-bold mb-2 text-center">Welcome!</h1>
        <p className="mb-12 text-center">
          My name is Maximiliano Naddeo, I am a front-end developer based in
          Wörgl, Tyrol, Austria. I currently have one project to showcase which
          I created during my web developement bootcamp with Ironhack.
        </p>
        <div>
          <hr className="mb-10" />
          <h2 className="text-2xl font-bold mb-4 text-center">
            Checkout my latest project:
          </h2>
          <div className="border-black border-2 flex flex-col items-center">
            <h3 className="font-bold underline mb-2">Renting Stuff Online</h3>
            <p className="leading-5 text-center mb-3">
              Renting Stuff Online is a community based renting platform for
              sports equipment. Rent stuff to and from other people, leave
              comments and rate your experience
            </p>
            <div className="flex justify-around w-full mb-3">
              <button>Go to site</button>
              <button>Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
