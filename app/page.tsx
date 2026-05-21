"use client";

import { useEffect, useRef, useState } from "react";

const email = "jooseppimies69@gmail.com";
const displayEmail = "info@hannula.info";
const discordInvite = "https://discord.gg/FSnF4KFsT";
const formEndpoint =
  "https://curious-pigsty-897.forms.space/019e4c53-9bd7-7064-aa2f-589032f3be8f";

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

const bestOfMe = ["Työnjohto", "Laadunvalvonta", "Projektinhallinta"];

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
    text: "Tässä voisi olla sinun jäätelötuote.",
    video: "/outona.mp4",
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
    video: "/hiustenpesu.mp4",
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

export default function Home() {
  const lahetAudio = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);
  const danceVideoRef = useRef<HTMLVideoElement>(null);

  const [visits, setVisits] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState("");

  const [boxPosition, setBoxPosition] = useState({ x: 24, y: 24 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, boxX: 0, boxY: 0 });

  useEffect(() => {
    const currentVisits = Number(localStorage.getItem("portfolio-visits") || "0");
    const newVisits = currentVisits + 1;
    localStorage.setItem("portfolio-visits", String(newVisits));
    setVisits(newVisits);
  }, []);

  const openContact = (subject: string) => {
    setContactSubject(subject);
    setContactOpen(true);
    setContactStatus("");
  };

  const sendContact = async () => {
    if (!contactName || !contactEmail || !contactMessage) {
      setContactStatus("Täytä nimi, sähköposti ja viesti.");
      return;
    }

    setSending(true);
    setContactStatus("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: contactSubject,
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          visibleReceiver: displayEmail,
          realReceiver: email,
        }),
      });

      if (response.ok) {
        setContactStatus("Viesti lähetetty onnistuneesti!");
        setContactName("");
        setContactEmail("");
        setContactMessage("");

        setTimeout(() => {
          setContactOpen(false);
          setContactStatus("");
        }, 1400);
      } else {
        setContactStatus("Lähetys epäonnistui. Kokeile uudelleen.");
      }
    } catch {
      setContactStatus("Yhteysvirhe. Kokeile uudelleen.");
    } finally {
      setSending(false);
    }
  };

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      boxX: boxPosition.x,
      boxY: boxPosition.y,
    };
  };

  const onDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;

    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;

    setBoxPosition({
      x: Math.max(8, dragStart.current.boxX + dx),
      y: Math.max(8, dragStart.current.boxY + dy),
    });
  };

  const stopDrag = () => {
    setDragging(false);
  };

  const openPartner = async (url: string, sound?: boolean) => {
    if (sound && lahetAudio.current) {
      lahetAudio.current.currentTime = 0;

      try {
        await lahetAudio.current.play();
      } catch {}

      setTimeout(() => window.open(url, "_blank"), 700);
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
    <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
      <audio ref={lahetAudio} src="/lahet.mp3" preload="auto" />
      <audio ref={musicRef} src="/atcm.mp3" preload="auto" />

      <div className="fixed right-4 top-4 z-40 rounded-2xl border border-green-400/40 bg-black/80 px-5 py-3 text-right shadow-[0_0_30px_rgba(34,197,94,0.25)] backdrop-blur-md">
        <p className="text-xs uppercase tracking-[0.25em] text-green-400">
          Käynnit
        </p>
        <p className="text-2xl font-black text-green-300">{visits}</p>
      </div>

      {contactOpen && (
        <div
          className="fixed z-50 w-[calc(100%-2rem)] max-w-md rounded-3xl border border-green-400/40 bg-zinc-950/95 p-5 shadow-[0_0_40px_rgba(34,197,94,0.25)] backdrop-blur"
          style={{
            right: boxPosition.x,
            bottom: boxPosition.y,
          }}
          onPointerMove={onDrag}
          onPointerUp={stopDrag}
          onPointerLeave={stopDrag}
        >
          <div
            onPointerDown={startDrag}
            className="cursor-move rounded-2xl border border-zinc-800 bg-black/60 p-3"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                  Yhteydenotto
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  {contactSubject}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Vastaanottaja: {displayEmail}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Vedä tästä palkista siirtääksesi laatikkoa.
                </p>
              </div>

              <button
                onClick={() => setContactOpen(false)}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
              >
                X
              </button>
            </div>
          </div>

          <input
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Nimi"
            className="mt-5 w-full rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-green-400"
          />

          <input
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            type="email"
            placeholder="Sähköpostiosoite"
            className="mt-4 w-full rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-green-400"
          />

          <textarea
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            placeholder="Kirjoita viesti tähän..."
            className="mt-4 min-h-32 w-full rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-green-400"
          />

          {contactStatus && (
            <p className="mt-3 text-sm text-green-300">{contactStatus}</p>
          )}

          <button
            onClick={sendContact}
            disabled={sending}
            className="mt-4 w-full rounded-full bg-green-400 px-6 py-4 font-bold text-black transition hover:scale-[1.02] disabled:opacity-60"
          >
            {sending ? "Lähetetään..." : "Lähetä viesti"}
          </button>
        </div>
      )}

      <section className="min-h-screen overflow-hidden">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-3">
          <div className="relative min-h-[45vh] overflow-hidden lg:min-h-screen">
            <img
              src="/henkka.jpg"
              alt="Henrik Hannula"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-14 text-center sm:px-8 lg:min-h-screen">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500 sm:text-base">
              Henrik Hannula
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Henkan elämä.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              Tuotannon osaamista, sisällöntuotantoa ja käytännön palveluita
              saman henkilöbrändin alla.
            </p>

            <p className="mt-4 text-green-300">{displayEmail}</p>

            <div className="mt-10 grid w-full max-w-xl gap-4">
              <a
                href="#osaaminen"
                className="rounded-3xl border border-blue-400/30 bg-blue-950 p-6 transition duration-300 hover:scale-[1.02] sm:p-8"
              >
                <h2 className="text-2xl font-bold sm:text-3xl">Osaaminen</h2>
                <p className="mt-3 text-sm text-blue-100/80 sm:text-base">
                  Tuotannon, laadunvalvonnan ja työnjohdon osaamista.
                </p>
              </a>

              <a
                href="#sisallontuottaja"
                className="rounded-3xl border border-green-400/30 bg-green-950 p-6 transition duration-300 hover:scale-[1.02] sm:p-8"
              >
                <h2 className="text-2xl font-bold text-green-300 sm:text-3xl">
                  Sisällöntuottaja
                </h2>
                <p className="mt-3 text-sm text-green-100/80 sm:text-base">
                  Flintti — Verified Kick & Twitch streamer.
                </p>
              </a>

              <a
                href="#projektit"
                className="rounded-3xl border border-orange-400/30 bg-orange-950 p-6 transition duration-300 hover:scale-[1.02] sm:p-8"
              >
                <h2 className="text-2xl font-bold text-orange-200 sm:text-3xl">
                  Keikkatyöt & Projektit
                </h2>
                <p className="mt-3 text-sm text-orange-100/70 sm:text-base">
                  Käytännön palveluita ja pieniä projekteja.
                </p>
              </a>
            </div>
          </div>

          <div className="relative min-h-[45vh] overflow-hidden lg:min-h-screen">
            <img
              src="/prosessilaite.png"
              alt="Prosessilaite"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      <section id="osaaminen" className="bg-black px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400 sm:text-base">
            01 / Osaaminen
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl md:text-7xl">
            Tuotannon taidot.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {bestOfMe.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-blue-400/30 bg-blue-950 p-6 sm:p-8"
              >
                <p className="text-blue-300">Erityisosaaminen</p>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{item}</h3>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {specialSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-blue-400/30 bg-blue-950 px-5 py-3 text-sm font-semibold sm:px-6 sm:py-4 sm:text-base"
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
                className="rounded-3xl border border-blue-400/20 bg-blue-950 p-6 transition hover:scale-[1.01] sm:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {job.role}
                    </h3>
                    <p className="mt-2 text-blue-300">{job.company}</p>
                  </div>

                  <div className="h-fit w-fit rounded-full bg-blue-500/20 px-5 py-3 text-blue-200">
                    {job.time}
                  </div>
                </div>

                <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
                  {job.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sisallontuottaja"
        className="bg-black px-5 py-20 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-green-400 sm:text-base">
            02 / Sisällöntuottaja
          </p>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1.2fr_1fr]">
            <div className="rounded-[2rem] border border-green-400/30 bg-zinc-950 p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-green-300">
                Musiikkivideo tulossa
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={startMusic}
                  className="rounded-full bg-green-400 px-5 py-3 font-bold text-black"
                >
                  Käynnistä biisi
                </button>

                <button
                  onClick={stopMusic}
                  className="rounded-full border border-green-400 px-5 py-3 font-bold text-green-300"
                >
                  Pysäytä
                </button>
              </div>

              <video
                ref={danceVideoRef}
                loop
                muted
                playsInline
                preload="metadata"
                className="mt-6 aspect-video w-full rounded-2xl object-cover"
              >
                <source src="/flintdance.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="rounded-[2rem] border border-green-400/30 bg-green-950/40 p-6 sm:p-10">
              <p className="uppercase tracking-[0.35em] text-green-300">
                Pääartikkeli
              </p>

              <h2 className="mt-4 text-5xl font-black sm:text-6xl md:text-7xl">
                Flintti
              </h2>

              <p className="mt-6 text-base leading-8 text-green-100/80 sm:text-xl sm:leading-9">
                Verified Kick & Twitch streamer. Keskimäärin noin 120 katsojaa
                ja yli 2000 seuraajaa.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://kick.com/flintti"
                  target="_blank"
                  className="rounded-full bg-green-400 px-7 py-4 font-bold text-black"
                >
                  Kick-kanava
                </a>

                <button
                  onClick={() => openContact("Yhteistyö / Flintti")}
                  className="rounded-full border border-green-400 px-7 py-4 font-bold text-green-300"
                >
                  Yhteistyö
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-green-400/30 bg-zinc-950 p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-green-300">
                Vuoden 2025 klippi
              </h3>

              <video
                controls
                preload="metadata"
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                className="mt-6 aspect-video w-full rounded-2xl object-cover"
                src="/Nelio.mp4"
              />

              <h3 className="mt-10 text-2xl font-bold text-green-300">
                Vuoden 2024 klippi
              </h3>

              <video
                controls
                preload="metadata"
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                className="mt-6 aspect-video w-full rounded-2xl object-cover"
                src="/vuoden-2024-clippi.mp4"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creatorServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-green-400/20 bg-zinc-950 p-6 transition hover:scale-[1.01] sm:p-8"
              >
                <button
                  onClick={() => openContact(service.title)}
                  className="text-left text-2xl font-bold text-green-300 hover:underline"
                >
                  {service.title}
                </button>

                <p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">
                  {service.text}
                </p>

                {service.video && (
                  <video
                    controls
                    preload="metadata"
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    className="mt-6 aspect-video w-full rounded-2xl object-cover"
                    src={service.video}
                  />
                )}
              </div>
            ))}

            <a
              href={discordInvite}
              target="_blank"
              className="rounded-3xl border border-indigo-400/30 bg-indigo-950 p-6 transition hover:scale-[1.01] sm:p-8"
            >
              <h3 className="text-2xl font-bold text-indigo-300">
                Liity Discordiin
              </h3>

              <p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">
                Tule mukaan yhteisöön, keskustele, seuraa sisältöä ja pysy
                mukana tulevissa projekteissa.
              </p>

              <div className="mt-6 inline-block rounded-full bg-indigo-400 px-6 py-3 font-bold text-black">
                Avaa Discord
              </div>
            </a>

            <div className="rounded-3xl border border-green-400/20 bg-zinc-950 p-6 sm:p-8">
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

      <section id="projektit" className="bg-black px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 sm:text-base">
            03 / Keikkatyöt & Projektit
          </p>

          <h2 className="mt-4 text-4xl font-black text-orange-200 sm:text-5xl md:text-7xl">
            Käytännön palvelut.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-orange-500/20 bg-orange-950 p-6 sm:p-8"
              >
                <h3 className="text-2xl font-bold text-orange-200">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-orange-100/70 sm:text-lg">
                  {service.text}
                </p>

                {service.video && (
                  <video
                    controls
                    preload="metadata"
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    className="mt-6 aspect-video w-full rounded-2xl object-cover"
                    src={service.video}
                  />
                )}

                <button
                  onClick={() => openContact(service.title)}
                  className="mt-6 inline-block rounded-full bg-orange-400 px-6 py-3 font-bold text-black"
                >
                  Lähetä sähköposti
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 sm:text-base">
            04 / Palaute
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Palaute sivustosta.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            Kaikki palaute nettisivustosta, yhteistyöideoista tai
            kehitysehdotuksista on tervetullutta.
          </p>

          <button
            onClick={() => openContact("Palaute nettisivustosta")}
            className="mt-10 inline-block rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
          >
            Lähetä palautetta
          </button>
        </div>
      </section>
    </main>
  );
}