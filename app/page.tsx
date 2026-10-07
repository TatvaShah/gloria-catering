import Image from "next/image";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import {
  business,
  emailAddress,
  gallery,
  highlights,
  instagramUrl,
  offerings,
  reels,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <section className="hero wrap" id="top">
          <div className="hero-copy">
            <p className="kicker">{business.area}</p>
            <h1>Beautiful moments start with a beautiful table.</h1>
            <p className="lede">
              At Gloria Catering, we turn your table into a stunning centerpiece with delicious
              food, fresh fruit, charcuterie, desserts, and elegant details.
            </p>
            <p className="lede">Elegant flavors. Beautiful moments.</p>
            <div className="actions">
              <a className="button" href="#book">
                Plan a table
              </a>
              <a className="ghost" href={instagramUrl} target="_blank" rel="noopener noreferrer">
                {business.handle}
              </a>
            </div>
          </div>
          <figure className="hero-frame">
            <Image
              src="/media/hero.jpg"
              alt="Fruit platter with strawberries, pineapple, melon, and chocolate dipped strawberries, finished with a flower."
              width={1080}
              height={1440}
              priority
              sizes="(min-width: 720px) 46vw, 100vw"
            />
            <figcaption className="hero-note">
              Fresh, elegant, and made with love. {business.followers} followers on Instagram.
            </figcaption>
          </figure>
        </section>

        <section className="section wrap" id="offerings">
          <p className="section-index">01</p>
          <h2>What arrives on the table</h2>
          <p className="lede">
            Finger foods, charcuterie boards and cups, fruit platters, and desserts. Each one is
            prepared for the gathering in front of you.
          </p>
          <div className="offer-list">
            <article className="offer">
              <Image
                src={offerings[0].src}
                alt={offerings[0].alt}
                width={offerings[0].width}
                height={offerings[0].height}
                sizes="(min-width: 720px) 34vw, 100vw"
              />
              <div>
                <h3>Finger foods</h3>
                <p>
                  A beautiful selection of savory finger foods, freshly prepared and perfect for
                  any celebration.
                </p>
                <p>
                  <a href={offerings[0].href}>See this platter on Instagram</a>
                </p>
              </div>
            </article>
            <article className="offer">
              <Image
                src={offerings[1].src}
                alt={offerings[1].alt}
                width={offerings[1].width}
                height={offerings[1].height}
                sizes="(min-width: 720px) 34vw, 100vw"
              />
              <div>
                <h3>Charcuterie boards and cups</h3>
                <p>
                  Thoughtfully arranged with delicious flavors, fresh ingredients, and elegant
                  presentation. Perfect for parties, gatherings, celebrations, and special moments.
                </p>
                <p>
                  <a href={offerings[1].href}>See this board on Instagram</a>
                </p>
              </div>
            </article>
            <article className="offer">
              <Image
                src={offerings[2].src}
                alt={offerings[2].alt}
                width={offerings[2].width}
                height={offerings[2].height}
                sizes="(min-width: 720px) 34vw, 100vw"
              />
              <div>
                <h3>Fruit platters</h3>
                <p>
                  Fresh, colourful, and made for celebrating. Custom fruit platters, the perfect
                  touch for a special event.
                </p>
                <p>
                  <a href={offerings[2].href}>See this platter on Instagram</a>
                </p>
              </div>
            </article>
            <article className="offer">
              <Image
                src={offerings[3].src}
                alt={offerings[3].alt}
                width={offerings[3].width}
                height={offerings[3].height}
                sizes="(min-width: 720px) 34vw, 100vw"
              />
              <div>
                <h3>Desserts</h3>
                <p>
                  Small birthday, big love. Sweet tables for celebrations, including a Halloween
                  birthday filled with delicious bites and beautiful details.
                </p>
                <p>
                  <a href={offerings[3].href}>See this table on Instagram</a>
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section wrap" id="gatherings">
          <p className="section-index">02</p>
          <h2>Celebrations and corporate tables</h2>
          <div className="gather">
            <article className="card">
              <Image
                src="/media/celebration.jpg"
                alt="Styled celebration table with flowers, a dessert stand, and platters of food."
                width={1080}
                height={1920}
                sizes="(min-width: 720px) 50vw, 100vw"
              />
              <div>
                <h3>Celebrations</h3>
                <p>
                  Creating beautiful moments, one table at a time. Thoughtfully prepared,
                  beautifully styled, and made with love for a very special celebration.
                </p>
                <p>Birthdays, themed parties, and the kind of table guests remember.</p>
              </div>
            </article>
            <article className="card">
              <Image
                src="/media/corporate.jpg"
                alt="Catering table set for an Air Canada gathering, with boards, fruit, and folded napkins."
                width={1080}
                height={1440}
                sizes="(min-width: 720px) 50vw, 100vw"
              />
              <div>
                <h3>Corporate catering</h3>
                <p>
                  A recent table for Air Canada at Toronto Pearson Airport. Gloria also prepares
                  gift boxes for employee appreciation, client gifts, office celebrations, and
                  special occasions.
                </p>
                <p>
                  <a href="https://www.instagram.com/p/DduDoZTmDpz/">See the Pearson table</a>
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section wrap">
          <p className="pull">
            Fresh, elegant, and made with love.
            <span>In their words, from Instagram.</span>
          </p>
        </section>

        <section className="section wrap" id="gallery">
          <p className="section-index">03</p>
          <h2>From recent tables</h2>
          <div className="gallery">
            {gallery.map((photo) => (
              <figure key={photo.src}>
                <a href={photo.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 980px) 30vw, (min-width: 720px) 46vw, 100vw"
                  />
                </a>
                <figcaption>
                  {photo.caption}. <a href={photo.href}>Open the post</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section wrap" id="reels">
          <p className="section-index">04</p>
          <h2>Reels from the kitchen</h2>
          <p className="lede">
            These are Gloria’s own Instagram reels, saved here so they play on the page. Press
            play. Sound from the original posts stays on Instagram.
          </p>
          <div className="reels">
            {reels.map((reel) => (
              <figure className="reel" key={reel.src}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={reel.poster}
                  width={reel.width}
                  height={reel.height}
                  aria-label={reel.title}
                >
                  <source src={reel.src} type="video/mp4" />
                </video>
                <figcaption>
                  {reel.caption} <a href={reel.href}>Watch on Instagram</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section wrap" id="book">
          <div className="book">
            <div className="prose">
              <p className="section-index">05</p>
              <h2>DM us to book your event.</h2>
              <p>
                Gloria takes orders by Instagram message and by email at{" "}
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.
              </p>
              <p>
                Build a note with the occasion, the date, the guest count, and the trays you want.
                Copy it into a direct message, or send the same note by email.
              </p>
              <p>
                Their Instagram highlights are named Menu, Charcuterie, Finger foods, Fruit platter,
                and Reviews. Open one there for the details they keep on the profile.
              </p>
              <ul className="highlights">
                {highlights.map((highlight) => (
                  <li key={highlight.href}>
                    <a href={highlight.href} target="_blank" rel="noopener noreferrer">
                      {highlight.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p>
                {business.followers} followers and {business.posts} posts on{" "}
                <a href={instagramUrl}>{business.handle}</a>.
              </p>
            </div>
            <div className="panel">
              <h2>Tell us about the table</h2>
              <p>The message updates as you fill this in.</p>
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <strong>{business.name}</strong>
          <p>
            Finger foods, charcuterie boards and cups, fruit platters, and desserts. Serving{" "}
            {business.area}, Ontario.
          </p>
          <p>
            <a href={instagramUrl}>{business.handle}</a>
            {" · "}
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </p>
          <p className="credit">
            Website by <a href="https://www.claudaura.ca">ClaudAura</a>
          </p>
        </div>
      </footer>
    </>
  );
}
