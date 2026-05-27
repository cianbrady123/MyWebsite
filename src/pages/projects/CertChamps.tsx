export default function CertChamps() {
  return (
    <>
      <article className="article">
          <h2>CertChamps</h2>
          <p>
            CertChamps is a Leaving Cert platform focused on making practicing questions as easy for
            students as possible. My co-founder Ben and I worked for over a year to build the
            platform and get it off the ground. If you are more interested in what it is and what the
            features are, scroll down to check it out!
          </p>
          <p>
            The platform was programmed in React using the Vite framework. Tailwind CSS was used for
            styling and the app is deployed on GitHub Pages. The database is hosted on Firebase.
          </p>
          <p>
            There are many interesting design choices that I am very proud of. One of them was done
            to solve the problem that other platforms have where they will spend months on end
            screenshotting all the papers. This is very inefficient and not nearly as flexible as we
            wanted. The idea I came up with instead was to simply render it from the PDFs. This does
            2 things:
          </p>
          <ul>
            <li>
              It negates the need for us to store all the screenshots in a database which will save
              a lot of money.
            </li>
            <li>It allows us to implement a feature where you can expand the question to the full paper.</li>
          </ul>
          <p>
            As well as this it allows us to implement a feature where you can expand the question to
            the full paper. The way this works is we store the question page, height and coordinate
            on the question. There is a page we built on the website that allows us to use hotkeys to
            fire through the questions really quickly cropping them and it exports them as a JSON file
            which can be uploaded to the database using Python.
          </p>
      </article>
      <iframe
        className="certchamps-embed"
        src="https://www.certchamps.ie"
        title="CertChamps website"
      />
    </>
  )
}
