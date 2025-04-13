const aboutItems = [
  {
    label: "Project done",
    number: 4,
  },
  {
    label: "Years of experience",
    number: 3,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello, I&apos;m Maria Inés, a software engineer with a Master&apos;s
            degree in Software Engineering. I enjoy building web applications
            that are clear, functional, and maintainable. My work focuses on
            writing clean code, using modern tools, and designing systems that
            are both practical and efficient.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2 ">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={180}
              className="ml-auto md:w-[10px] md:h-[90px]"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
