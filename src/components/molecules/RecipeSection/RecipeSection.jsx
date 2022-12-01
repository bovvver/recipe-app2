import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Wrapper, Recipe } from "./RecipeSection.styles";

const RecipeSection = () => {
  return (
    <Wrapper>
      <SectionTitle title="Recipe" />
      <Recipe>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
        lobortis erat. Nam semper auctor volutpat. Duis ac lacus non ante
        vehicula maximus in vitae libero. Nunc commodo rhoncus eleifend. Donec
        tortor augue, tempus sit amet sem nec, dapibus convallis purus. Praesent
        ornare suscipit metus. Duis quis orci vel mi fringilla dapibus. Donec
        sit amet euismod urna. Nulla at lectus vulputate odio convallis
        bibendum. Suspendisse vitae justo viverra, sagittis turpis in, mattis
        enim. Pellentesque in dui tincidunt turpis dapibus auctor. Nunc est
        orci, volutpat ac velit vitae, fermentum pharetra dolor. Nullam tempor
        felis est. Fusce luctus risus et dolor tempus, vitae rhoncus metus
        varius. Phasellus ligula orci, vulputate ac venenatis vitae, euismod et
        dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nulla id justo metus. Quisque sit amet diam in sapien iaculis vehicula
        quis eu nulla. Suspendisse ut aliquet nisi. Aenean ullamcorper leo ante,
        in sagittis ligula consequat ac. Vestibulum ac leo sed odio condimentum
        maximus. Vivamus urna nibh, aliquam a odio eu, tempor lacinia augue.
        Aliquam ut commodo libero, ac maximus magna. Nulla elit tortor, finibus
        eu justo et, aliquet mattis neque. Mauris blandit ultricies ultricies.
        Quisque gravida, odio ut consectetur condimentum, arcu risus feugiat
        massa.
      </Recipe>
    </Wrapper>
  );
};

export default RecipeSection;
