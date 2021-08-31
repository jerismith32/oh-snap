import React from 'react';
//Import coverImage
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
return (
    <section className="my-5">
        {/* This will return an h1 heading in the my-5 section, saying "Who am I?" */}
        <h1 id="about">Who am I?</h1>
        {/* This will return an an image in the section my-5*/}
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}
export default About;