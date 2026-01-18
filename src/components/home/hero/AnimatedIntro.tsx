import Typewriter from "typewriter-effect"

export default function AnimatedIntro() {
  return (
    <div>
      <div className="text-lg sm:text-2x1 h-30 px-8 text-center font-medium text-gray-400">
        Hi, I&apos;m Bruno - A passionate
        <span className="text-indigo-400 font-bold">
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer",
                "Next.js Developer",
                "React Expert",
                "NestJS Developer",
                "Python Developer",
                "Tech Enthusiast",
                "UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              wrapperClassName: "inline-block py-6",
            }}
          />
        </span>
      </div>
    </div>
  );
}