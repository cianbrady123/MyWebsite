export default function Portababe() {
  return (
    <article className="article">
        <h1>Porta-Babe-V1</h1>
        <p>
          Porta-Babe was a project I started for my girlfriend as we were moving away over summer.
          Essentially it&apos;s a teddy bear in which I can send messages to over WiFi. This idea was
          initially just going to be a 3D printed box; however, I don&apos;t own a 3D printer so I came
          up with the much cooler idea of making it a teddy.
        </p>
        <img src="/images/portababe/breadboard.jpeg" alt="Breadboard prototype" />
        <p>
          First thing I did was prototype on a breadboard. I used an ESP32 and a 16x2 LCD screen that I
          had lying around. ESP32 was good to use because of its WiFi capabilities. After some quick
          programming it was all connected to Firebase and displayed whatever messages I wanted…
          provided it fit on a 16x2 display! One of the only problems I had was how Ella would connect
          this to the internet when she arrived but I opted to just show her how.
        </p>
        <img src="/images/portababe/electronics_complete.jpeg" alt="Completed electronics" />
        <p>
          Next thing I did was make the electronics more permanent. I soldered everything to some
          perfboard. There are 3 separate pieces of perfboard: one for the ESP32, one for the LCD, and
          one for the power and ground connections. I went through the soldering process over the course
          of about 2 hours and thank god, it worked first time! Red wires were used for power, black
          for ground and blue for data.
        </p>
        <p>
          To finish up I had to find a suitable teddy and also a way to power it. I thought that in an
          ideal world I would simply have a zip on the back of the teddy and have a power bank inside.
          This would allow easy recharging and also allow Ella to easily connect the ESP32 to her laptop
          and eventually to the internet. What I ended up finding was a teddy that was supposed to be a
          backpack. Jackpot! I took off all the straps and what I was left with was a teddy with a zip on
          the back. With a little bit of superglue and some patience I managed to get the electronics
          inside the teddy.
        </p>
        <img src="/images/portababe/zip.jpeg" alt="Zip on back of teddy" />
        <p>
          This ended up being a really fun project and I was really happy with the result. The finishing
          touches were to wrap it up nicely in a box and give it to her.
        </p>
        <img src="/images/portababe/final.jpeg" alt="Final product" />
    </article>
  )
}
