export default function DrumMachine() {
  return (
    <article className="article">
      <h2>Analogue Drum Machine</h2>
      <p>
        The idea was a fully analogue drum machine: four voices, no microcontroller in the audio
        path. I also wanted an excuse to play around with SMD PCB design, so the whole thing is laid
        out as a custom board with the analogue circuitry, pots, and switches on one PCB.
      </p>
      <h3>Kick drum</h3>
      <img
        src="/images/drum-machine/kick-schematic.png"
        alt="Kick drum analogue schematic"
      />
      <p>
        A square wave is AC coupled and turned into a short gate pulse by U9, which then hits two
        paths at once. The heart of the voice is a bridged-T oscillator around Q1: C2 and C3 form
        the T-network with the transistor providing the gain, so it rings at a pitch set by POT1
        (base pitch) and POT5 (attack pitch). On a trigger, Q2 dumps charge into that network for a
        time set by POT6, which yanks the pitch up and then lets it fall back, giving the classic
        kick thump. Decay is a separate envelope into U3 that slowly chokes the oscillation, and U1
        buffers the result through a simple low-pass into the kick output.
      </p>
      <h3>Tom</h3>
      <p>
        The tom is literally the same circuit as the kick. Pitch the kick up and it already sounds
        like a tom, so I reused the bridged-T voice instead of designing a separate topology.
      </p>
      <h3>Snare drum</h3>
      <img
        src="/images/drum-machine/snare-schematic.png"
        alt="Snare drum analogue schematic"
      />
      <p>
        The snare is two sounds mixed together. The body is the same idea as the kick: a gated
        oscillator around Q4 with C10 and C11, POT8 for base pitch, an attack bump from POT10, and
        decay through U7, just tuned higher so it is a snare crack instead of a thump. The wires
        come from noise. Q3 is used as a reverse-biased transistor noise source, U8 amplifies it,
        and Q5 / Q6 shape and high-pass that hiss so it sits on top of the tone. The same trigger
        that starts the oscillator also opens the noise, and U2 sums both paths into the snare
        output.
      </p>
      <h3>Hi-hat</h3>
      <img
        src="/images/drum-machine/hihat-kicad.png"
        alt="Hi-hat analogue schematic in KiCad"
      />
      <p>
        This one is a KiCad screenshot because the schematic literally would not simulate properly
        for me in LTspice. Six 40106 Schmitt inverters free-run at slightly different frequencies
        and get summed into a metallic hash, which is the hat noise. That mix is band-pass filtered
        by a TL074 stage, then a transistor VCA (Q8 / Q10) opens on a trigger from the push switch
        so the hiss has a decay instead of sitting there constantly. A final op-amp high-pass
        cleans it up before the output.
      </p>
      <h3>1st PCB iteration</h3>
      <p>
        The first PCB iteration was awful. I was trying to get it printed in college and they only
        did 2 layer boards, so I ended up doing a separate board for each voice. I got it working
        anyway, and it worked out amazing. I got to show it to everyone at the robotics expo.
      </p>
      <div className="article__media-row">
        <img
          src="/images/drum-machine/first-iteration-expo.jpg"
          alt="Showing the first analogue drum machine boards at the robotics expo"
        />
        <video
          src="/images/drum-machine/first-iteration-1.mp4"
          controls
          playsInline
          preload="metadata"
        />
        <video
          src="/images/drum-machine/first-iteration-2.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </div>
      <h3>Final PCB iteration</h3>
      <p>
        The final board is the same voices, just done properly. I added a mixer on the end so the
        kick, tom, snare, and hi-hat actually sum into one output, and a proper power section
        instead of the messy supply on the first version. It is also 4 layers now instead of 2, so
        everything fits on one PCB instead of a board per voice.
      </p>
      <img
        src="/images/drum-machine/cad.png"
        alt="CAD render of the analogue drum machine PCB"
      />
      <img
        src="/images/drum-machine/final-schematic.png"
        alt="Full KiCad schematic of the final analogue drum machine"
      />
    </article>
  )
}
