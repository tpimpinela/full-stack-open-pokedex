1. **Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.**

   I have chosen Java as the language for my application. I would need to use JUnit for testing, Checkstyle for linting and Maven as the build tool.

2. **What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!**

   One alternative is Travis CI. It has support for a variety of programming languages, such as Node, PHP, Python, Java... and the cool thing is that It can be integrated with GitHub, so you can run your pipeline with every commit you make. The cons is that Travis CI is a hosted services, this could be a little problem if your software is big or you have some specifics needs. An alternative could be TeamCity (made by the JetBrains team) which could be self hosted and is completely free (even for commercial use).

3. **Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?**

   The development team is consists of only 6 developers, that makes me thing that is a small project so I think a cloud based environment would be the better option because you can get your CI/CD working without too much effort and in a fastest way.
