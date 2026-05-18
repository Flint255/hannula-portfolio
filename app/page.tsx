"use client";

import { useRef } from "react";

const workExperience = [
  {
    role: "Alkutuotannon neuvoja",
    company: "DanHatch Finland Oy",
    time: "2025",
    url: "https://danhatch.com/fi/",
    description:
      "Alkutuotannon neuvontaa, tuotannon seurantaa, laadunvalvontaa ja prosessien käytännön ymmärtämistä.",
  },
  {
    role: "Työnjohto",
    company: "Landeli Group Oy",
    time: "2023",
    url: "https://landeli.fi/",
    description:
      "Leikkaamon työnjohto, esimiestyöt, tuotannonsuunnittelu, tuotantotehokkuuden ja laadunvalvonnan kehittäminen sekä perehdytys.",
  },
  {
    role: "Tuotekehitys projekti",
    company: "Ukipolis Oy / Vihannes-Laitila",
    time: "2023",
    url: "https://www.ukipolis.fi/",
    description:
      "Uuden tuotteen kehittäminen Vihannes-Laitilalle tuotekehitysprojektissa.",
  },
  {
    role: "Elintarvikealan työntekijä",
    company: "Landeli Group Oy",
    time: "2018–2023",
    url: "https://landeli.fi/",
    description:
      "Lihankäsittely, leikkaamo, sahaaminen, suolaus ja pakkaamo, broileri- ja kalkkunaleikkuu, etiketöinti, varastotyöt ja luuprässin käyttö.",
  },
  {
    role: "Lihamestari",
    company: "Liedon Lihakauppa",
    time: "2017",
    url: "https://www.liedonlihakauppa.fi/",
    description:
      "Ensimmäisiä elintarvikealan työtehtäviä lihankäsittelyn, asiakaspalvelun ja tuotannon ympäristössä.",
  },
];

const bestOfMe = [
  "Työnjohto",
  "Laadunvalvonta",
  "Projektinhallinta",
];

const specialSkills = [
  "Excel",
  "AI-työkalut",
  "Prosessikaaviot",
  "Tuotantotehokkuuden analysointi",
  "Työturvallisuus",
  "Kemikaaliturvallisuus",
  "Laatusertifikaatit",
];

const creatorServices = [
  {
    title: "Yhteistyöt ja kaupalliset kampanjat",
    text: "Mahdollisuus mainostaa somealustani kautta tuotteita.",
  },
  {
    title: "OBS-avustus",
    text: "Skenet, maps-integraatiot, subathonit ja IRL Pro SRT-siirrot.",
  },
  {
    title: "Botrix-avustus",
    text: "Botrix alertit, widgetit ja sub-integraatiot.",
  },
  {
    title: "Streamlabs-avustus",
    text: "Streamlabs skenet ja integraatiot.",
  },
  {
    title: "Konsultointi",
    text: "Striimaus arjen ongelmien ratkominen.",
  },
  {
    title: "Yritysyhteydenotot",
    text: "Yhteistyömahdollisuudet, sponsorointi ja kaupalliset kontaktit.",
  },
  {
    title: "Yhteisöalustat",
    text: "Discord, WhatsApp, Telegram, YouTube ja TikTok.",
  },
  {
    title: "Kuvaaja",
    text: "Kuvaamaan striimiäsi, suunnittelemaan sisältöä ja avustamaan sen kanssa.",
  },
];

const partners = [
  { name: "MonniRS", url: "https://kick.com/monnirs", sound: true },
  { name: "Nymfi", url: "https://www.twitch.tv/nymfi" },
  { name: "Jenemiliae", url: "https://kick.com/jenemiliae" },
  { name: "Kuhlmanvirallinen", url: "https://kick.com/kuhlmanvirallinen" },
  { name: "Nooralexa", url: "https://kick.com/nooralexa" },
  { name: "Fuzer", url: "https://www.twitch.tv/fuzer" },
  { name: "Paletsi", url: "https://kick.com/paletsi" },
];

const localServices = [
  {
    title: "Ruohonleikkuu",
    text: "Saatavilla vain oman ruohonleikkurin omistavalle.",
  },
  {
    title: "Ruoanlaiton opetus",
    text: "Perus kotiruoat, leivonta, oluen, siiderin ja viinin valmistus.",
  },
  {
    title: "Uintivalmennus",
    text: "Vapaauinti, perhosuinti, selkäuinti, rintauinti alkeet, käännökset ja hypyt.",
  },
  {
    title: "Ikkunanpesu",
    text: "Ikkunoiden puhdistus ja perussiistiminen.",
    video: "/ikkunanpesu.mp4",
  },
  {
    title: "Siivouspalvelut",
    text: "Imurointi, roskien vienti, keittiön siivous, kissan vessa tyhjennys ja täyttö.",
  },
  {
    title: "Kissan huolto",
    text: "Lomiutus, vesi, ruoka ja vessan huolto.",
  },
  {
    title: "Pihatyöt",
    text: "Maalaus, pienien puiden oksien leikkaus, risujen keruu, haravointi ja harjaus.",
  },
  {
    title: "AI-palvelut",
    text: "Nettisivujen luonti.",
  },
  {
    title: "Autopalvelut",
    text: "Auton pintapesu painepesurilla, imurointi sisältä ja pölyjen pyyhintä.",
  },
];

function mailLink(subject: string) {
  return `mailto:hannula.henriks@gmail.com?subject=${encodeURIComponent(
    subject
  )}`;
}

export default function Home() {
  const lahetAudio = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);
  const danceVideoRef = useRef<HTMLVideoElement>(null);

  const openPartner = async (url: string, sound?: boolean) => {
    if (sound && lahetAudio.current) {
      lahetAudio.current.currentTime = 0;

      try {
        await lahetAudio.current.play();
      } catch {}

      setTimeout(() => {
        window.open(url, "_blank");
      }, 700);

      return;
    }

    window.open(url, "_blank");
  };

  const startMusic = async () => {
    if (musicRef.current && danceVideoRef.current) {
      musicRef.current.currentTime = 0;
      danceVideoRef.current.currentTime = 0;

      try {
        await musicRef.current.play();
        await danceVideoRef.current.play();
      } catch {}
    }
  };

  const stopMusic = () => {
    musicRef.current?.pause();
    danceVideoRef.current?.pause();
  };

  return (
    <main className="min-h-screen bg-black font-sans text-white">
      <audio ref={lahetAudio} src="/lahet.mp3" preload="auto" />
      <audio ref={musicRef} src="/atcm.mp3" preload="auto" />

      {/* HERO */}

      <section className="min-h-screen overflow-hidden">
        <div className="grid min-h-screen md:grid-cols-3">
          <div className="relative overflow-hidden">
            <img
              src="/henkka.jpg"
              alt="Henrik Hannula"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
            <p className="mb-4 text-base uppercase tracking-[0.4em] text-zinc-500">
              Henrik Hannula
            </p>

            <h1 className="text-6xl font-black tracking-tight md:text-8xl">
              Henkan elämä.
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-9 text-zinc-300">
              Tuotannon osaamista, sisällöntuotantoa ja käytännön palveluita
              saman henkilöbrändin alla.
            </p>

            <div className="mt-12 grid w-full gap-4">
              <a
                href="#osaaminen"
                className="rounded-3xl border border-blue-400/30 bg-blue-950 p-8 transition duration-300 hover:scale-[1.02]"
              >
                <h2 className="text-3xl font-bold">Osaaminen</h2>

                <p className="mt-3 text-blue-100/80">
                  Tuotannon, laadunvalvonnan ja työnjohdon osaamista.
                </p>
              </a>

              <a
                href="#sisallontuottaja"
                className="rounded-3xl border border-green-400/30 bg-green-950 p-8 transition duration-300 hover:scale-[1.02]"
              >
                <h2 className="text-3xl font-bold text-green-300">
                  Sisällöntuottaja
                </h2>

                <p className="mt-3 text-green-100/80">
                  Flintti — Verified Kick & Twitch streamer.
                </p>
              </a>

              <a
                href="#projektit"
                className="rounded-3xl border border-orange-400/30 bg-orange-950 p-8 transition duration-300 hover:scale-[1.02]"
              >
                <h2 className="text-3xl font-bold text-orange-200">
                  Keikkatyöt & Projektit
                </h2>

                <p className="mt-3 text-orange-100/70">
                  Käytännön palveluita ja pieniä projekteja.
                </p>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="/prosessilaite.png"
              alt="Prosessilaite"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      {/* OSAAMINEN */}

      <section id="osaaminen" className="min-h-screen bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-base uppercase tracking-[0.35em] text-blue-400">
            01 / Osaaminen
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Tuotannon taidot.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {bestOfMe.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-blue-400/30 bg-blue-950 p-8"
              >
                <p className="text-blue-300">Erityisosaaminen</p>

                <h3 className="mt-4 text-3xl font-bold">{item}</h3>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {specialSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-blue-400/30 bg-blue-950 px-6 py-4 font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-4">
            {workExperience.map((job) => (
              <a
                key={`${job.role}-${job.company}-${job.time}`}
                href={job.url}
                target="_blank"
                className="rounded-3xl border border-blue-400/20 bg-blue-950 p-8 transition hover:scale-[1.01]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">{job.role}</h3>

                    <p className="mt-2 text-blue-300">{job.company}</p>
                  </div>

                  <div className="h-fit rounded-full bg-blue-500/20 px-5 py-3 text-blue-200">
                    {job.time}
                  </div>
                </div>

                <p className="mt-5 text-lg leading-8 text-zinc-300">
                  {job.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SISÄLLÖNTUOTTAJA */}

      <section
        id="sisallontuottaja"
        className="min-h-screen bg-black px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-base uppercase tracking-[0.35em] text-green-400">
            02 / Sisällöntuottaja
          </p>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1.2fr_1fr]">
            <div className="rounded-[2rem] border border-green-400/30 bg-zinc-950 p-8">
              <h3 className="text-2xl font-bold text-green-300">
                Musiikkivideo tulossa
              </h3>

              <div className="mt-6">
                <button
                  onClick={startMusic}
                  className="rounded-full bg-green-400 px-6 py-3 font-bold text-black"
                >
                  Käynnistä biisi
                </button>

                <button
                  onClick={stopMusic}
                  className="ml-4 rounded-full border border-green-400 px-6 py-3 font-bold text-green-300"
                >
                  Pysäytä
                </button>

                <video
                  ref={danceVideoRef}
                  loop
                  muted
                  playsInline
                  className="mt-6 h-[320px] w-full rounded-2xl object-cover"
                >
                  <source src="/flintdance.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="rounded-[2rem] border border-green-400/30 bg-green-950/40 p-10">
              <p className="uppercase tracking-[0.35em] text-green-300">
                Pääartikkeli
              </p>

              <h2 className="mt-4 text-5xl font-black md:text-7xl">
                Flintti
              </h2>

              <p className="mt-6 text-xl leading-9 text-green-100/80">
                Verified Kick & Twitch streamer. Keskimäärin noin 120 katsojaa
                ja yli 2000 seuraajaa.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://kick.com/flintti"
                  target="_blank"
                  className="rounded-full bg-green-400 px-8 py-4 text-lg font-bold text-black"
                >
                  Kick-kanava
                </a>

                <a
                  href={mailLink("Yhteistyö / Flintti")}
                  className="rounded-full border border-green-400 px-8 py-4 text-lg font-bold text-green-300"
                >
                  Yhteistyö
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-green-400/30 bg-zinc-950 p-8">
              <h3 className="text-2xl font-bold text-green-300">
                Vuoden 2024 klippi
              </h3>

              <video
                controls
                className="mt-6 w-full rounded-2xl"
                src="/vuoden-2024-clippi.mp4"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {creatorServices.map((service) => (
              <a
                key={service.title}
                href={mailLink(service.title)}
                className="rounded-3xl border border-green-400/20 bg-zinc-950 p-8 transition hover:scale-[1.01]"
              >
                <h3 className="text-2xl font-bold text-green-300">
                  {service.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-zinc-300">
                  {service.text}
                </p>
              </a>
            ))}

            <div className="rounded-3xl border border-green-400/20 bg-zinc-950 p-8">
              <h3 className="text-2xl font-bold text-green-300">
                Tutut yhteistyökumppanit
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {partners.map((partner) => (
                  <button
                    key={partner.name}
                    onClick={() => openPartner(partner.url, partner.sound)}
                    className="rounded-full border border-green-400/30 px-4 py-2 text-sm font-bold text-green-200 transition hover:bg-green-400 hover:text-black"
                  >
                    {partner.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PALVELUT */}

      <section id="projektit" className="min-h-screen bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-base uppercase tracking-[0.35em] text-orange-400">
            03 / Keikkatyöt & Projektit
          </p>

          <h2 className="mt-4 text-5xl font-black text-orange-200 md:text-7xl">
            Käytännön palvelut.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {localServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-orange-500/20 bg-orange-950 p-8"
              >
                <h3 className="text-2xl font-bold text-orange-200">
                  {service.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-orange-100/70">
                  {service.text}
                </p>

                {service.video && (
                  <video
                    controls
                    className="mt-6 w-full rounded-2xl"
                    src={service.video}
                  />
                )}

                <a
                  href={mailLink(service.title)}
                  className="mt-6 inline-block rounded-full bg-orange-400 px-6 py-3 font-bold text-black"
                >
                  Lähetä sähköposti
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PALAUTE */}

      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base uppercase tracking-[0.35em] text-zinc-500">
            04 / Palaute
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Palaute sivustosta.
          </h2>

          <p className="mt-6 text-xl leading-9 text-zinc-300">
            Kaikki palaute nettisivustosta, yhteistyöideoista tai
            kehitysehdotuksista on tervetullutta.
          </p>

          <a
            href={mailLink("Palaute nettisivustosta")}
            className="mt-10 inline-block rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
          >
            Lähetä palautetta
          </a>
        </div>
      </section>
    </main>
  );
}