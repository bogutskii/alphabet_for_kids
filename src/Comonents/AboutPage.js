import React from 'react';






const AboutPage = () => {
  return <div className="about-content">
    <h1>About</h1>
    <p>This application is designed to make learning the English alphabet fun and effective for children. It allows children to learn letters through interactive games, videos, and tests, facilitating quick and enjoyable learning.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Interactive Alphabet Learning: Use games and videos to learn each letter of the alphabet.</li>
      <li>Assessment Tests: Tests help to assess and reinforce what children have learned.</li>
      <li>Educational Games: Various games that make learning letters fun and engaging.</li>
      <li>Support for English Alphabet: The app focuses on teaching the English alphabet, ideal for early learning in English-speaking environments or for ESL students.</li>
    </ul>
    <h2>About the Developer</h2>
    <p>The Children's Alphabet Learning App was developed by Petr Bogutskii, a dedicated software developer with a passion for
      creating innovative and user-friendly digital solutions.</p>
    <a href="https://github.com/bogutskii" target="_blank" className="link-with-icon" rel="noreferrer noopener">
      <img className="githubLogo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
           alt="GitHub"/>
      Follow me on GitHub
    </a>
    <p className="copyright">© {new Date().getFullYear()} Petr Bogutskii</p>
  </div>

}

export default AboutPage