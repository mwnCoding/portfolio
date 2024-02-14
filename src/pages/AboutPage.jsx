function AboutPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2 text-center">Who am I?</h1>
          <p>
            To put it simple I am Max. I have worked around 25 jobs in my life
            and now I have decided that it's time to settle down. Job-wise I
            mean. I have dreamt of becoming a developer since I have been a kid.
            I got my first book about <b>C</b> when I was around 12 years old.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">My Tech Stack</h2>
          <ul className="list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React.js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
