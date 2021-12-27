import { Button } from "components";
import React from "react";
import { Link } from "react-router-dom";
import "styles/pages/about.scss";

const About = () => {
  return (
    <div className="about__Container">
      <div className="about__Text">
        <h1>About the Company</h1>
        <div className="paragraph__Wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, sed est quae asperiores quis tempore aliquid veritatis
            maiores eligendi. Dolorem sit, a neque enim harum optio rem esse
            nam, accusamus excepturi officia saepe fugit sapiente quaerat ex
            ipsam corrupti aliquid at ea voluptatem omnis numquam doloremque
            dicta. Ipsam, voluptatibus totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            fugiat, necessitatibus voluptatibus non ipsam saepe magni nobis
            veritatis facilis inventore dignissimos adipisci eligendi ratione
            officia quaerat dolores omnis laudantium culpa, ducimus quo,
            suscipit quos. Illo laboriosam ex pariatur quas distinctio libero
            aut vitae explicabo commodi cupiditate similique inventore illum,
            nihil, ad provident id natus! At omnis quos enim aspernatur illo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, voluptatum.
          </p>
        </div>
        <div className="button__Area">
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
