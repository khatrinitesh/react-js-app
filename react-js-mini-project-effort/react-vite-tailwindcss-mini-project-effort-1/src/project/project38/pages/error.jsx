import React from "react";
import Banner from "../components/banner";
import { useNavigate } from "react-router-dom";

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className="content">
      <Banner
        title="Error"
        desc="Enim ut aliqua id eiusmod dolore sunt nulla deserunt. Reprehenderit voluptate dolor amet in aliquip. Id pariatur nisi non est reprehenderit. Ullamco est velit ut minim cillum ex deserunt aliquip eiusmod minim non qui. Ex velit in elit culpa consectetur incididunt. Excepteur labore quis irure in anim magna et aliquip. Eu Lorem aute duis ullamco exercitation officia anim magna irure sunt ut commodo minim fugiat. Velit velit amet nulla officia. Consectetur tempor qui elit incididunt magna aliqua ullamco ad irure nisi nulla anim culpa. Mollit exercitation ipsum sunt duis minim esse pariatur. Ad amet aliquip esse id quis officia velit fugiat laborum."
      />
      <button onClick={btnBack}>Go Back</button>
    </div>
  );
}
