"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LoveLetterPage() {
  const [opened, setOpened] = useState(false);

  const sections = [
    {
      text: `2abl ay haga ana 3awzek tfhamy eny msh asdy akteb el msg dh 3shan adghat 3leky aw ay haga msh lazeza aw awg3k ana bktb dh 3shan I miss u,  and because I believe in what we had and passed together in all our days and be sure that whatever you decide, htfdaly ahla w ahsan bnt shoftaha w htfdaly 3andy haga kbeeeer aweeeeeee w set el banat w (moon with 2 stars) but I truly hope we can find our way back to each other, slowly and kindly.”

Ana 2a3adt kteeeeer afkar f elly byhsal benna w a3taked ban 3lya dh f el 2 calls elly fato embareh w el nhrda w krart a2olek el kalam dh b koool hdooo2 w yarab tstaw3ebeh w tfhameeeh w tfhamy mno ghalawtek 3andy w eny habeb a2olo mn gher ay khena2 aw mshakel aw nekash yt3ebek tb3an.

ana 3aref eny zawedtaha awe el mra dh w fe akher khena2a dh bs wllahy wllahy mkansh abdan asdy eny aday2ek aw nwsal el elly ehna feeh dh aw eny awga3ek aw ahsesek enk lazem t3mly el haga.I just really cared, and in that moment, I didn’t know how to express it in a way that respected your space. I see now that the way I handled things might have made you feel like I didn’t trust or value your way of showing care, and I’m sorry for that. I only felt hurt from feeling not ur priorities and didn't imagine that anything could make you distant from me or not answer me. I was too angry and nervous w kont harfyan ghadban w enty mfhmtesh dh w eftakrteeh eny bamtalekek aw kdh w dh aked mkansh asdy w tabe3y en wa2t el gam3a tetsheghly shwya momken ykoon ana kan 3andy hasasya gamda mn dh shwya bs at least I thought that u may care little more because u know about this senstivity.`,
      img: "/us1.jpg",
    },
    {
      text: `Ana mday2 awe mn ehsas en ehna b3eeeeeeeeeeeeeeeeeeeeeeed aweee bgd w msh 3arf awsalek w en feh hagez kbeeer bennaa w elly yday2 w ygwa3 akter ehsas enk motkabela dh b el 3aks w kman 3awzah.It hurts to feel distant from you right now. I miss having you in my life, and it’s painful to feel like all the good between us has been forgotten.
Ehna mehtagen forsa kman nhawel hawelna kteer awe mgatsh 3la el mra dh ana ahwel mday2ekesh wla ahsesek dh tany w enty kman thawly takhdy  balek mn dh b tare2tek kol wahed b tare2to laken en ehna b3eed mhadesh 3arf haga 3an el tany wla ay haga.
ana bs mhs moftaked ehsas eny msh 3arf enty fen wla m3 meen wla el kalam dh khales ana 3andy aham mno bkteer.
z3lana , t3bana , kwisa , mama mda2yany , ali mday2ny z3lana , mn kza , ana gbt fe quiz drga helwa ana 3mlt progress kza ana gbt hdoom gdeda t3ala awreek kol dh bgd moftakedo , ur voice and ur face all the time on facetime , sharing with u kol haga mday2any zy ma 3andy kteer el nhrda khan2ny w msh 3arf a3ml dh ana mhtagek fe3lan mwgooda w ya sty ana el ghaltan w hahwel asalah bs enty kman hawly m3aya w hafzy kman eny mahsesh dh ehna el mfroood ghalyeeeeeeeeeeen awe 3and ba3d msh bnemshy qesset men ha2o eh laa meeen hyrta7 ezay w nsa3ed ba3d ana atnazel hetta w enty ttnazly hettaaa 3shan nwsal sawa.`,
      img: "/us2.jpg",
    },
    {
      text: `Finally it is ur decision law enty msh ht accept ay haga mn dh w hnfdal el edges dh w el miles dh w el mfrood eny at3awed eny m3rafsh ay haga 3anek khales faI’ll have to learn to let go, even though it will hurt me deeply  msh hasebek w ab3ed 3anek b soholo bs hyfdal ywg3ny`,
      img: "/us3.jpg",
    },
    {
      text: `bs bgd balash tare2et el broood w elyy msh fare2 m3aah dh w el ka2nek enty el akwa w ana elly msh ader ab3ed aw el t3ban aw kdh 3shan hya wehcha awe w btwga3 w kman balach el 2alba el fag2a dh elly tool el wa2t bb2a khayf mn ay mawkf mday2 mno awsalaha ana Youssef mtnseesh elly 3ando 3shan ytbst enty ttbsty hykoon wllahy aktar wahed mabsoot w hwa kman mhtagek gdn eftekrelo el helw kdh hawly m3 nafsek sda2eny htla2ely fe el 4 snen dool elly yshfa3ly w ykhaleky tstahmleny w nhawel sawa mn gded ehna bn3ady w nthamel 3shan el moshkela elly t3ady msh en ehna n3ady mn ba3d ana feh hagat kteeeeeeeer awe f hyaty m3rafsh kont h3adeha mn gherek ezay w elly gay bgd mynfa3sh mn gherek msh ha2dar w msh hynfa3.
You are the reason songs sound better and days feel brighter♥♥`,
      img: "/us4.jpg",
    },
  ];

  const carouselImages = [
    "/us6.jpg",
    "/us7.jpg",
    "/us8.jpg",
    "/us9.jpg",
    "/us10.jpg",
    "/us11.jpg",
    "/us12.jpg",
    "/us13.jpg",
    "/us14.jpg",
    "/us15.jpg",
    "/us16.jpg",
    "/us17.jpg",
  ];
    const songLink = "https://open.anghami.com/Wq9XJzFscXb"; 

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-900 via-purple-900 to-black text-white font-sans overflow-hidden scroll-smooth">
        {!opened ? (
          <div className="flex flex-col items-center">
            {/* Envelope */}
            <motion.div
              className="relative w-64 h-40 cursor-pointer"
              onClick={() => setOpened(true)}
            >
              {/* Envelope body */}
              <div className="absolute bottom-0 left-0 w-full h-3/4 bg-pink-400 rounded-b-xl shadow-xl"></div>

              {/* Envelope flap (triangle) */}
              <motion.div
                className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-r-[128px] border-b-[80px] border-l-transparent border-r-transparent border-b-pink-500 origin-top"
                animate={{ rotateX: opened ? 180 : 0 }}
                transition={{ duration: 1 }}
              ></motion.div>
            </motion.div>

            <p className="mt-6 text-lg italic text-pink-200">
              Click the envelope to open 💌
            </p>
          </div>
        ) : (
          <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-white font-sans">
            {/* Hero */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6">
              <motion.h1
                className="text-6xl font-bold mb-4 text-pink-700"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                For You ❤️
              </motion.h1>
              <motion.p
                className="text-lg max-w-2xl leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.9 }}
              >
                A little page I made for you — keep scrolling to see everything.
              </motion.p>
            </section>

            {/* Messages with images */}
            {sections.map((section, i) => (
              <section
                key={i}
                className={`min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <motion.div
                  className="md:w-1/2 bg-white/80 p-6 rounded-2xl shadow-xl text-gray-800"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-lg leading-relaxed whitespace-pre-line">
                    {section.text}
                  </p>
                </motion.div>

                <motion.img
                  src={section.img}
                  alt={`memory ${i + 1}`}
                  className="md:w-1/3 rounded-3xl shadow-2xl object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                />
              </section>
            ))}

            {/* Carousel Section */}
            <section className="px-6 py-16 bg-pink-50">
              <h2 className="text-3xl font-semibold text-center mb-8 text-pink-700">
                Some of Our Memories 💕
              </h2>
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl"
              >
                {carouselImages.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`carousel ${i}`}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </section>
            {/* Closing */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-t from-purple-200 via-pink-100 to-white">
              <motion.h3
                className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                You are the reason songs sound better and days feel brighter ♥♥
              </motion.h3>

              <a
                href={songLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-pink-700 transition"
              >
                Play Our Song 🎶
              </a>
            </section>

            {/* Video Section */}
            <section className="px-6 py-16 bg-white flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-semibold text-pink-700 mb-6">
                A Special Videos Just for Us 🎥
              </h2>
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl">
                <video
                  controls
                  className="w-full h-auto rounded-2xl"
                  poster="us8.jpg"
                >
                  <source src="/vid1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video
                  controls
                  className="w-full h-auto rounded-2xl my-6"
                  poster="us9.jpg"
                >
                  <source src="/vid2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            <footer className="py-6 text-center text-xs text-gray-500">
              Made with ❤️ by Youssef
            </footer>
          </div>
        )}
      </div>
    </>
  );
}
