import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Reservation from "../Components/Reservation";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />

        <section className="menuSection" id="menu">
          <div className="sectionHeading">
            <p className="sectionEyebrow">Fresh from our kitchen</p>
            <h2>Something delicious for everyone.</h2>
            <p>Big flavors, fresh ingredients, and a little something extra.</p>
          </div>
          <div className="foodGrid">
            <article className="foodCard">
              <div className="foodImageWrap">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85"
                  alt="Classic cheeseburger with lettuce and tomato"
                  loading="lazy"
                />
                <span className="foodTag">A classic</span>
              </div>
              <div className="foodCardCopy">
                <h3>The Big Akshat Burger</h3>
                <p>Juicy, stacked, and made to satisfy.</p>
              </div>
            </article>
            <article className="foodCard">
              <div className="foodImageWrap">
                <img
                  src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85"
                  alt="Toasted sandwich filled with fresh ingredients"
                  loading="lazy"
                />
                <span className="foodTag">Made fresh</span>
              </div>
              <div className="foodCardCopy">
                <h3>Golden Club Sandwich</h3>
                <p>Toasty, hearty layers in every bite.</p>
              </div>
            </article>
            <article className="foodCard">
              <div className="foodImageWrap">
                <img
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85"
                  alt="Fresh pasta topped with herbs and parmesan"
                  loading="lazy"
                />
                <span className="foodTag">House favorite</span>
              </div>
              <div className="foodCardCopy">
                <h3>Garden Pesto Pasta</h3>
                <p>Comforting pasta with bright, herby flavor.</p>
              </div>
            </article>
            <article className="foodCard">
              <div className="foodImageWrap">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
                  alt="Colorful garden salad with fresh vegetables"
                  loading="lazy"
                />
                <span className="foodTag">Fresh & bright</span>
              </div>
              <div className="foodCardCopy">
                <h3>Market Garden Bowl</h3>
                <p>Crisp greens, colorful veggies, plenty of crunch.</p>
              </div>
            </article>
            <article className="foodCard">
              <div className="foodImageWrap">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85"
                  alt="Freshly baked pizza topped with tomatoes and basil"
                  loading="lazy"
                />
                <span className="foodTag">Made for sharing</span>
              </div>
              <div className="foodCardCopy">
                <h3>Woodland Garden Pizza</h3>
                <p>Golden crust, rich tomato, and garden-fresh toppings.</p>
              </div>
            </article>
            <article className="foodCard">
              <div className="foodImageWrap">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0f78a0e2dd59?auto=format&fit=crop&w=800&q=85"
                  alt="Freshly glazed doughnuts for dessert"
                  loading="lazy"
                />
                <span className="foodTag">A sweet finish</span>
              </div>
              <div className="foodCardCopy">
                <h3>Something Sweet</h3>
                <p>Save a little room for a treat after your meal.</p>
              </div>
            </article>
          </div>
          <a className="menuMoreButton" href="#reservation">
            Come hungry
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="servicesSection" id="services">
          <div className="sectionHeading">
            <p className="sectionEyebrow">The Akshat experience</p>
            <h2>Made for the moments that matter.</h2>
          </div>
          <div className="serviceGrid">
            <article className="serviceCard">
              <span className="serviceNumber">01</span>
              <h3>Fresh, every day</h3>
              <p>Food prepared with care, using ingredients that let flavor shine.</p>
            </article>
            <article className="serviceCard">
              <span className="serviceNumber">02</span>
              <h3>A seat for everyone</h3>
              <p>Casual meals, catch-ups, and celebrations all feel at home here.</p>
            </article>
            <article className="serviceCard">
              <span className="serviceNumber">03</span>
              <h3>Here to welcome you</h3>
              <p>Relaxed hospitality and generous food make every visit a good one.</p>
            </article>
          </div>
        </section>

        <section className="teamSection" id="team">
          <div>
            <p className="sectionEyebrow">The people behind the table</p>
            <h2>We’ll save you a seat.</h2>
            <p>
              Come as you are, bring your favorite people, and let us take care
              of the good food.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85"
            alt="Warm and welcoming restaurant dining room"
            width="1000"
            height="667"
            loading="lazy"
          />
        </section>

        <Reservation />
      </main>
      <Footer />
    </>
  );
};

export default Home;