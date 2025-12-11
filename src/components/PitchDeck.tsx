console.log("🔥 PitchDeck React mounted");
import childBench from "./images/child-bench.jpg";
import collageRight from "./images/collage-right.jpg";
import collageLeft from "./images/collage_left.jpg";
import collageWalls from "./images/collage-walls.jpg";
import shower from "./images/shower.jpg";
import tvSet from "./images/tv_set.jpg";
import destroyYou from "./images/i-may-destroy-you.jpg";
import babyReindeer from "./images/baby-reindeer.jpg";
import fleabag from "./images/fleabag.jpg";
import seoul from "./images/seoul.jpg";
import mauroImg from "./images/mauro.jpg";
import elenaImg from "./images/elena.jpg";
import jimmyImg from "./images/jimmy.jpg";
import abstractImg from "./images/abstract_skeletal.jpg";
import nanpuBridge from "./images/nanpu_bridge.jpg";
import waterskiChampion from "./images/waterski_champion.jpg";
import waterskiPyramid from "./images/waterski_pyramid.jpg";
import waterskiTeam from "./images/waterski_team.jpg";
import barefooter from "./images/Barefooter.jpg";
import childhoodDock from "./images/childhood-dock.jpg";
import valentinoVid from "./images/secuencia_valentino.mp4";
import lvVid from "./images/LV_INSTAGRAM_.mp4";


import { useEffect, useRef, useState } from "react";
import "../styles/pitch-deck.css";

export default function PitchDeck() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      setScrollProgress(progress);

      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isVisible) return;

        const img = section.querySelector(".parallax-image") as
          | HTMLElement
          | null;
        if (img) {
          const speed = 0.3;
          const yPos = -(rect.top * speed);
          img.style.transform = `translateY(${yPos}px) scale(1.1)`;
        }

        const fadeElements = section.querySelectorAll(
          ".fade-content"
        ) as NodeListOf<HTMLElement>;
        fadeElements.forEach((content) => {
          const isFastFade = content.classList.contains("left-text-box");
          const fadeSpeed = isFastFade ? 0.5 : 1;
          const fadeProgress = Math.max(
            0,
            Math.min(
              1,
              ((window.innerHeight - rect.top) / window.innerHeight) *
                (1 / fadeSpeed)
            )
          );

          content.style.opacity = `${fadeProgress}`;
          if (content.classList.contains("left-text-box")) {
            content.style.transform = `translateX(${
              (1 - fadeProgress) * 100
            }px)`;
          } else {
            content.style.transform = `translateY(${
              (1 - fadeProgress) * 40
            }px)`;
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pitch-deck">
      {/* Progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Top nav */}
      <nav className="deck-nav">
        <div className="nav-title">OK! WHO DO I DO NEXT?</div>
        <div className="nav-creator">Created by Nicola Scarlino</div>
      </nav>

{/* 1. Hero – childhood bench */}
<section
  ref={(el) => (sectionsRef.current[0] = el)}
  className="section hero-section full-screen hero-fixed-layout"
>
  <div className="parallax-container">
   <div
  className="parallax-image"
  style={{ backgroundImage: `url(${childBench})` }}
/>
  </div>

  <div className="hero-title-block">
    Ok !<br />
    Who do I<br />
    do next ?
  </div>

<div className="hero-tagline-block">
  <p className="hero-subtitle">
    WHAT'S AN
    <br />
    IDENTITY BUILT
    <br />
    ON TRAUMA?
  </p>
  <p className="hero-credit">Created by Nicola Scarlino</p>
</div>

</section>

      {/* 2. Quote – dock (Collage right.jpg) */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="section quote-section full-screen"
      >
        <div className="parallax-container">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${collageRight})` }}
          />
        </div>
        <div className="quote-content fade-content">
          <blockquote className="poetic-quote">
            Some men are dead to shame. Some live through it.
          </blockquote>
        </div>
      </section>

      {/* 3. Dual collage wall */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="section spacer-section full-screen dual-image-section"
      >
        <div
          className="dual-image-left"
          style={{ backgroundImage: `url(${collageLeft})` }}
        />
        <div
          className="dual-image-right"
          style={{ backgroundImage: `url(${collageWalls})` }}
        />
        <div className="left-text-box fade-content">
          <p className="left-quote">
            You can fuck with it all you want,
            <br />
            you still won&apos;t know who you are.
          </p>
        </div>
      </section>

      {/* 4. Shower hook */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="section shower-section full-screen"
      >
        <div className="parallax-container">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${shower})` }}
          />
        </div>
          <div className="text-block bottom-left">
            <p className="emotional-hook">
              This is not about sex.
              <br />
              <br />
              It&apos;s about the part of him
              that was let down – and won&apos;t let go.
            </p>
          </div>
      </section>

      {/* 5. Concept – full-screen with tv_set.jpg */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="section concept-section full-screen"
      >
        <div className="parallax-container">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${tvSet})` }}
          />
        </div>
        <div className="concept-content fade-content">
          <h2 className="section-title">The Concept</h2>
          <p className="concept-lead">
            Mauro builds perfect worlds for a living – flawless sets, total
            control. Beneath the surface, he is spiralling. Survival looks
            like: overachieve, seduce, collapse, repeat. Campaign after
            campaign, celebrity after celebrity, he creates beauty that is not
            his. He builds the illusion, but the shame bleeds through.
          </p>
          <p className="concept-body">
            The series blends psychological realism with stylised delirium.
            Campaigns, sex, therapy, music, medicine – they are not just
            storylines, they are triggers. One by one they force him to
            confront a terrifying question:
            <span className="concept-question">
              {" "}
              How much of me is just repetition?
            </span>
          </p>
        </div>
      </section>

      {/* 6. Tonal comparisons */}
      <section
        ref={(el) => (sectionsRef.current[5] = el)}
        className="section comps-section"
      >
        <div className="comps-content fade-content">
          <h2 className="section-title">Tonal Comparisons</h2>
          <div className="comps-grid">
           <div className="comp-item">
  <div
    className="comp-image"
    style={{ backgroundImage: `url(${destroyYou})` }}
  />
  <h3 className="comp-title">I MAY DESTROY YOU</h3>
  <p className="comp-meta">12 episodes · ~£8–10M season · 2020</p>
  <p className="comp-desc">
    Sexual trauma as nonlinear narrative. Healing, consent and identity questioned without moralising.
  </p>
</div>

<div className="comp-item">
  <div
    className="comp-image"
    style={{ backgroundImage: `url(${babyReindeer})` }}
  />
  <h3 className="comp-title">BABY REINDEER</h3>
  <p className="comp-meta">7 episodes · ~£6–8M season · 2024</p>
  <p className="comp-desc">
    Deeply personal. A confessional into shame, self-destruction and the need to be seen.
  </p>
</div>

<div className="comp-item">
  <div
    className="comp-image"
    style={{ backgroundImage: `url(${fleabag})` }}
  />
  <h3 className="comp-title">FLEABAG</h3>
  <p className="comp-meta">6 episodes/season · ~£5–7M · 2016–2019</p>
  <p className="comp-desc">
    Darkly funny, visceral, raw, witty, unfiltered.
  </p>
</div>

          </div>
        </div>
      </section>

      {/* 7. Characters – Seoul underlaying whole section */}
      <section
        ref={(el) => (sectionsRef.current[6] = el)}
        className="section characters-section full-screen"
      >
        <div className="parallax-container">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${seoul})` }}
          />
        </div>
        <div className="characters-content fade-content">
          <h2 className="section-title">Characters</h2>
          {/* Mauro */}
          <div className="character-card character-card-full">
            <div
              className="character-image"
              style={{ backgroundImage: `url(${mauroImg})` }}
            />
            <h3 className="character-name">Mauro (33)</h3>
            <p className="character-age">Sharp. Guarded. Boyish. Cracked.</p>
            <p className="character-desc">
              Mauro grew up in Florida&apos;s 1990s barefoot waterski scene – a
              violent, smile-or-drown kind of world. Today he is a high-end
              production designer working globally, immersed in the rhythm of
              fashion and music: fast, transactional, disposable. There is no
              time to process, only the next brief, the next name, the next set
              – until one memory, buried for 25 years, hits hard enough to break
              the cycle.
            </p>
            <p className="character-body">
              For the first time he has to ask:
              <br />
              <strong>Who do I become next?</strong>
            </p>
          </div>
          {/* Elena & Jimmy */}
          <div className="characters-grid-two">
            <div className="character-card">
              <div
                className="character-image"
                style={{ backgroundImage: `url(${elenaImg})` }}
              />
              <h3 className="character-name">Elena (30 then / 64 now)</h3>
              <p className="character-cara">Mauro&apos;s mother</p>
              <p className="character-age">
                Opinionated, pressuring, rigid, brilliant.
              </p>
              <p className="character-desc">
                Elena was once an elite barefoot waterski champion, a master of
                pressure and control. For years Mauro thought her manic highs
                were the source of his damage. In truth she was the perfect
                cover. While everyone watched her unravel, he was being raped.
              </p>
            </div>
            <div className="character-card">
              <div
                className="character-image"
                style={{ backgroundImage: `url(${jimmyImg})` }}
              />
              <h3 className="character-name">Jimmy (28)</h3>
              <p className="character-cara">Mauro&apos;s lover</p>
              <p className="character-age">Queer. Fluid. Unrooted.</p>
              <p className="character-age2">
                Triggering in all the right ways.
              </p>
              <p className="character-desc">
                Jimmy moves on instinct – charming, magnetic, sometimes
                reckless. To Mauro he feels like freedom. But staying close to
                him means nothing stays buried. He does not label what they are;
                he just keeps pushing until Mauro has no choice but to reveal
                himself.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* 8. Immaterial forces – full-screen with abstract_skeletal.jpg */}
<section
  ref={(el) => (sectionsRef.current[7] = el)}
  className="section forces-section full-screen"
>
  <div className="parallax-container">
    <div
      className="parallax-image"
      style={{
        backgroundImage: `url(${abstractImg})`,
      }}
    />
  </div>

  <div className="forces-overlay fade-content">
    <h2 className="section-title forces-title">Immaterial Forces</h2>
    <p className="forces-kicker">
    </p>

    <div className="forces-columns">
      {/* 01 */}
      <div className="force-column">
        <h3 className="force-title">Fashion &amp; Music Gigs</h3>
        <p className="force-cara">Spectacular. Devouring. Addictive.</p>
        <p className="force-desc">
          They are not just settings – they are belief systems. For Mauro they
          offer framework and status, but they also erase him. He is an artist
          without a self, creating for others, selling illusion (quite often just lipsticks) delivering
          vision that is never his own.
        </p>
      </div>

      {/* 02 */}
      <div className="force-column">
        <h3 className="force-title">Sex Encounters</h3>
        <p className="force-cara">Revealing. Explorative. Kink.</p>
        <p className="force-desc">
          Mauro does not have sex to connect; he does it to feel something real
          – or someone real. It looks like discovery, but it is a loop, a failed
          attempt at defining himself by pleasing someone else.
        </p>
      </div>

      {/* 03 */}
      <div className="force-column">
        <h3 className="force-title">The Memory</h3>
        <p className="force-cara">Buried. Repressed. Infectious.</p>
        <p className="force-desc">
          Mauro ignores what happened when he was seven, but his body does not.
          It plays out in sex, in shame, in work. When the memory returns 25
          years later, it dismantles everything he thought was true and pushes
          an already fractured soul to the edge of depersonalisation.
        </p>
      </div>
    </div>
  </div>
</section>


{/* 9. Season / Episode Breakdown */}
<section
  className="section season-section"
  ref={(el) => (sectionsRef.current[8] = el)}
>
  {/* Background image */}
  <div className="parallax-container">
    <div
      className="parallax-image"
      style={{
        backgroundImage: `url(${nanpuBridge})`,
      }}
    />
  </div>

  <div className="season-content fade-content">
    <h2 className="section-title">Season & Episode Breakdown</h2>


<div className="budget-table">
  <table className="season-episodes-table">
    <thead>
      <tr>
        <th className="act-col" />
        <th>#</th>
        <th>Title</th>
        <th>Short Synopsis</th>
        <th>Tone / Format</th>
      </tr>
    </thead>
    <tbody>
      {/* ACT I – episodes 1–3 */}
      <tr>
        <td rowSpan={3} className="act-label">
          <div className="act-text">
            <span>ACT I  </span>
            <span>DENIAL</span><br />
            <span className="act-tagline">Performance as survival.</span>
          </div>
          <div className="act-brace" />
        </td>
        <td>1</td>
        <td>Distraction</td>
        <td>A glossy emotional setup hides abuse under infidelity tropes.</td>
        <td>Fake Rom-Com / Trauma Trap</td>
      </tr>
      {/* …keep the rest of your rows exactly as they are… */}
    </tbody>
  </table>
</div>

  </div>
</section>



      {/* 10. Development Strategy – waterski_team.jpg */}
      <section className="section dev-section">
        <h2 className="section-title">Development Strategy</h2>
        <div className="dev-layout">
          <div
            className="dev-image"
            style={{ backgroundImage: `url(${waterskiChampion})` }}
          />
          <div className="dev-columns">
            <div className="dev-block">
              <h3>Where We Are</h3>
              <ul>
                <li>4 of 8 episodes already written in Final Draft.</li>
                <li>
                  Season world, arcs and structure are locked emotionally and
                  formally.
                </li>
                <li>
                  Pitch materials: deck, themes, comps and tone are ready.
                </li>
              </ul>
            </div>
            <div className="dev-block">
              <h3>What’s Next</h3>
              <ul>
                <li>
                  Finish the remaining 4 scripts and polish the season bible.
                </li>
                <li>
                  Open the material to a writers’ room while protecting the core
                  voice.
                </li>
                <li>
                  Secure an animation partner for the shroom/psychedelic
                  episode.
                </li>
                <li>
                  Finalize a visual lookbook for production and
                  marketing.
                </li>
              </ul>
            </div>
            <div className="dev-block">
              <h3>What We’re Looking For</h3>
              <ul>
                <li>
                  A lead producing partner to package and pitch with the
                  creator.
                </li>
                <li>
                  An EP / co-showrunner aligned with auteur,
                  psychologically-driven work.
                </li>
                <li>
                  Early conversations with platforms around strategy &
                  festival roll-out.
                </li>
                <li>
                  Room to grow form while keeping the emotional architecture
                  intact.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* Fullscreen Barefooter Image Section */}
<section className="fullscreen-section">
  <div 
    className="fullscreen-bg"
    style={{
      backgroundImage: `url(${barefooter})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
    }}
  />
</section>

      {/* 11. Distribution & Marketability – waterski_champion.jpg */}
      <section className="section dev-section">
        <h2 className="section-title">Distribution &amp; Marketability</h2>
        <div className="dev-layout">
          <div
            className="dev-image"
            style={{
              backgroundImage: `url(${waterskiPyramid})`,
            }}
          />
          <div className="dev-columns">
            {/* Global Emotional Resonance */}
            <div className="dev-block">
              <h3>Global Emotional Resonance</h3>
              <ul>
                <li>1 in 5 adults are CSA survivors (WHO/CDC, 2024).</li>
                <li>Identity &amp; recovery arcs resonate across the 3Gs.</li>
                <li>Speaks to a silenced audience with precision, not pity.</li>
                <li>Targets Gen Z / Millennial audiences craving truth.</li>
              </ul>
            </div>

            {/* Stylistic Flexibility */}
            <div className="dev-block">
              <h3>Stylistic Flexibility</h3>
              <br />
              <ul>
                <li>EP format shifts: POV, animation, surreal realism.</li>
                <li>Visually distinctive — each episode its own universe.</li>
                <li>Raw, poetic, doesn’t flinch — but offers catharsis.</li>
                <li> High replay &amp; discussion value for digital audiences. </li>
              </ul>
            </div>
            {/* Cross-Platform Integration */}
            <div className="dev-block">
              <h3>Cross-Platform Integration</h3>
              <ul>
                <li>Built into fashion, music, influencer culture.</li>
                <li>Ideal for campaign tie-ins &amp; festival positioning.</li>
                <li>Meta-celebrities drive press, virality, and fandom.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
{/* IMAGE BREAK – Waterski Team */}
<section className="image-break">
  <div className="parallax-container">
    <div
      className="parallax-image"
      style={{
        backgroundImage: `url(${waterskiTeam})`,
      }}
    />
  </div>
</section>

{/* 12. Budget & Financing – LV_INSTAGRAM_.mp4 as background */}
<section
  className="budget-hero"
  ref={(el) => (sectionsRef.current[9] = el)}
>
  {/* VIDÉO DE FOND */}
<video
  className="budget-hero-video"
  src={lvVid}
  autoPlay
  muted
  loop
  playsInline
/>


  {/* OVERLAY VERRE DÉPOLI */}
  <div className="budget-hero-overlay">
    <div className="budget-hero-content">
      {/* IMPORTANT : PAS de "fade-content" ici */}

      <h2 className="section-title">Budget &amp; Financing</h2>

      {/* 4 QUADRANTS EN 2 × 2 */}
      <div className="budget-grid">
        {/* 1. Budget Range (Est.) */}
        <div className="budget-table">
          <p className="budget-subtitle">Budget Range (Est.)</p>
          <table>
            <tbody>
              <tr>
                <td>Target €10.6–11.5M — Season 1</td>
              </tr>
              <tr>
                <td>Hybrid live-action + animation (Episode 5)</td>
              </tr>
              <tr>
                <td>Location planning key</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Production Timeline */}
        <div className="budget-table">
          <p className="budget-subtitle">Production Timeline</p>
          <table>
            <tbody>
              <tr>
                <td>Pilot script available</td>
              </tr>
              <tr>
                <td>60% written</td>
              </tr>
              <tr>
                <td>6–8 months from greenlight to production-ready</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Production Model */}
        <div className="budget-table">
          <p className="budget-subtitle">Production Model</p>
          <table>
            <tbody>
              <tr>
                <td>Boutique core crew + high-end creative partners</td>
              </tr>
              <tr>
                <td>
                  Lean, agile and artist-driven — built for prestige, not overspend
                </td>
              </tr>
              <tr>
                <td>
                  Open to collaboration on casting, rollout and visual tone
                  adjustments
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. Financing Strategy */}
        <div className="budget-table">
          <p className="budget-subtitle">Financing Strategy</p>
          <table>
            <tbody>
              <tr>
                <td>Secure HBO as lead financier and broadcaster</td>
              </tr>
              <tr>
                <td>
                  Co-production ready — open to EU support (CNC, regional funds)
                </td>
              </tr>
              <tr>
                <td>
                  Organic partnerships with fashion / beauty / music brands
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TABLEAU EN DESSOUS */}
      <div className="budget-structure">
        <div className="budget-table">
          <p className="budget-subtitle">
            Production Structure — Set-Piece vs Bottle Episodes
          </p>
          <table>
            <thead>
              <tr>
                <th>Episode</th>
                <th>Format / Type</th>
                <th>Key Cost Drivers</th>
                <th>Budget Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 — Distraction</td>
                <td>Bottle + Location Drama</td>
                <td>Paris interiors, Florida inserts</td>
                <td>Low–Mid</td>
              </tr>
              <tr>
                <td>2 — High Function</td>
                <td>Multi-location Set-piece</td>
                <td>Nightlife / music venues / fashion backstage</td>
                <td>Mid–High</td>
              </tr>
              <tr>
                <td>3 — Rock Bottom</td>
                <td>Intercut Set-piece</td>
                <td>Flashback structures, multi-timelines</td>
                <td>High</td>
              </tr>
              <tr>
                <td>4 — Trigger</td>
                <td>Bottle + Surreal Inserts</td>
                <td>Mauro’s loft, dream imagery</td>
                <td>Mid</td>
              </tr>
              <tr>
                <td>5 — Cortisol</td>
                <td>Hybrid (Live Action + Animation)</td>
                <td>Lanzarote landscapes + animated sequences</td>
                <td>Very High</td>
              </tr>
              <tr>
                <td>6 — Dopamine</td>
                <td>Bottle Episode</td>
                <td>EMDR therapy scenes + minimal locations</td>
                <td>Mid</td>
              </tr>
              <tr>
                <td>7 — Scarring</td>
                <td>Confrontation Set-piece</td>
                <td>Rooftop, police precinct, stylised city inserts</td>
                <td>Mid</td>
              </tr>
              <tr>
                <td>8 — Wounded Healer</td>
                <td>Final Bottle Resolution</td>
                <td>Therapy space, contained emotional arc</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>


{/* 13. Creator Control & IP – full-screen video background */}
<section
  className="section ip-section full-screen"
  ref={(el) => (sectionsRef.current[10] = el)}
>
  <div className="parallax-container">
    <video
      className="ip-bg-video"
      src={valentinoVid}
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="ip-overlay fade-content">
      <h2 className="section-title">Creator Control &amp; IP</h2>

      <div className="ip-quadrants">
        <div className="ip-quadrant ip-top-left">
          <h3>Creator-Led Vision</h3>
          <p>
            Conceived and written by <strong>Nicola Scarlino</strong>.
          </p>
          <p>
            A singular voice — ensuring tonal coherence, emotional truth and
            visual boldness from script to screen.
          </p>
        </div>

        <div className="ip-quadrant ip-top-right">
          <h3>Original IP, Fully Owned</h3>
          <p>
            <strong>All rights retained by the creator.</strong>
          </p>
          <p>
            100% original material — no adaptation constraints. Built for
            scalability across seasons, formats and markets.
          </p>
        </div>

        <div className="ip-quadrant ip-bottom-left">
          <h3>Platform-First Partnership</h3>
          <p>
            Designed for a network that champions bold, author-driven
            storytelling.
          </p>
          <p>
            Encourages narrative risk-taking, cross-genre fluidity, and genuine
            creative authorship.
          </p>
        </div>

        <div className="ip-quadrant ip-bottom-right">
          <h3>Creative Flexibility</h3>
          <p>
            Open to collaboration on casting, structure and rollout —{" "}
            <strong>without compromising the emotional architecture.</strong>
          </p>
          <p>Style can evolve. Substance remains sharp.</p>
        </div>
      </div>
    </div>
  </div> 
</section>

   
{/* 14. Closing Statement */}
<section
  ref={(el) => (sectionsRef.current[11] = el)}
  className="section closing-statement"   // ← enlève full-screen
>

  {/* BACKGROUND IMAGE */}
  <div className="parallax-container">
    <div
      className="parallax-image"
      style={{
        // IMPORTANT: use the SAME path as your hero image
        backgroundImage: `url(${childhoodDock})`,
      }}
    />
  </div>

  {/* TEXT OVERLAY */}
  <div className="closing-overlay">
    <div className="closing-text-box">
      <p>I didn’t write this series to heal.</p>
      <p>I wrote it because I couldn’t ignore it anymore.</p>
      <p>
        When I was a kid, something happened that I buried so deep it shaped my
        whole life without me knowing.
      </p>
      <p>
        At 35, it came back. Not as a flashback — as a fracture. Quiet, violent,
        undeniable.
      </p>
      <p>
        Suddenly, everything made sense. The hunger to be seen. The bulimia. The
        obsession with getting it right. The sex. The work. The disconnection.
        The charm. The collapse.
      </p>
      <p>It wasn’t ambition — it was survival.</p>
      <p>
        I always say I survived twice. Once when I was a child. Once when I
        remembered. The second time nearly killed me.
      </p>
      <p>
        I don’t want applause. I want to show what it feels like when your
        identity is built on something you never asked for.
      </p>
      <p>
        When the thing that hurt you most… also made you who you are. And you
        can’t tell if that’s tragic or beautiful.
      </p>
      <p>
        This show doesn’t try to fix that question. It just dares to sit in it —
        and look.
      </p>
    </div>
  </div>
</section>



      {/* 15. Final Punchline Slide */}
      <section
        ref={(el) => (sectionsRef.current[12] = el)}
        className="section closing-section full-screen"
      >
        <div className="parallax-container">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${childBench})` }}
          />
        </div>
        <div className="closing-content fade-content">
          <h1 className="closing-text">OK, so who do I do next?</h1>
          <p className="hero-subline">YOU, BABE.</p>
        </div>
        
      </section>
    </div>
  );
}
