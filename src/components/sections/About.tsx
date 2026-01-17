import Image from "next/image";

export default function About() {
  return (

    <div className="mx-auto w-full max-w-5xl px-6 py-28">
      <div className="grid items-start gap-16 md:grid-cols-2">
        {/* Left: text */}
        <div>
          <h2 className="text-4xl font-extrabold leading-[0.95] text-[rgb(var(--textdark))]">
            About
          </h2>

          <p className="mt-10  leading-[1.35] text-[rgb(var(--textdark))]">
            I&apos;m a front-end developer with a strong interest in solving
            problems through design and code. I focus on building intuitive,
            user-friendly web experiences and enjoy exploring new technologies to
            continuously improve my skills.
          </p>

          <p className="mt-12  leading-[1.35] text-[rgb(var(--textdark))]">
            I&apos;m passionate about the intersection of technology and design,
            and how they work together to create meaningful digital products. My
            goal is to bring ideas to life in a way that feels clear, engaging,
            and visually refined.
          </p>
        </div>

        {/* Right: image */}
        <div className="flex justify-center md:justify-end py-6">
          {/* push image slightly down */}
          <div className="relative mt-10 w-full max-w-75">
            {/* offset background block */}
            <div className="absolute -bottom-6 left-8 h-full w-full rounded-xl bg-[rgb(var(--textdark))]" />

            {/* actual image */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/me.png"
                alt="Mirthe portrait"
                width={600}
                height={500}
                className="h-auto w-90 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
