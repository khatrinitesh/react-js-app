import React, { useState } from "react";

import Banner from "../components/banner";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    // Toggle the isActive state when the button is clicked
    setIsActive(!isActive);
  };

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="content">
      <Banner title="Home" desc="Lorem Ipsum" />
      <button
        className={isActive ? "btn btn-success" : "btn btn-primary"}
        onClick={handleClick}
      >
        My Button
      </button>
      <button className="btn"></button>
      <button
        onClick={toggleText}
        className={isTextVisible ? "btn btn-success" : "btn btn-primary"}
      >
        {isTextVisible ? "hide" : "show"}
      </button>
      {isTextVisible ? <p>This is some text to toggle.</p> : null}
      <p>
        Excepteur magna commodo sunt cupidatat voluptate reprehenderit
        consectetur ea nulla.
      </p>
      <p>
        Excepteur magna commodo sunt cupidatat voluptate reprehenderit
        consectetur ea nulla.
      </p>
      <p>
        Excepteur magna commodo sunt cupidatat voluptate reprehenderit
        consectetur ea nulla.
      </p>
      <p>
        Excepteur magna commodo sunt cupidatat voluptate reprehenderit
        consectetur ea nulla.
      </p>
      <p>
        Excepteur magna commodo sunt cupidatat voluptate reprehenderit
        consectetur ea nulla.
      </p>
      <p>
        Nulla sunt fugiat culpa elit nisi elit. In consequat ullamco proident
        minim enim aliqua est velit velit reprehenderit est occaecat. Mollit
        consequat irure sit deserunt pariatur Lorem incididunt. Occaecat officia
        dolor ut consectetur minim exercitation sint amet culpa labore nisi
        cillum veniam. Voluptate aute ipsum pariatur non fugiat adipisicing
        tempor laborum voluptate commodo. Ut consequat aliqua elit dolore
        ullamco. Velit dolore id sit velit esse labore eu nisi consequat non.
        Amet aliquip non nulla commodo nulla eiusmod id commodo occaecat commodo
        labore magna consectetur. Exercitation irure aliquip consectetur ea
        dolore sit incididunt reprehenderit ex ullamco ipsum nisi magna anim.
        Irure amet ut commodo qui. Amet officia ullamco duis labore tempor. Ut
        occaecat amet reprehenderit cillum aliquip labore incididunt nisi non
        officia deserunt duis. Est reprehenderit sunt consequat est aliquip
        reprehenderit pariatur id laborum sunt incididunt. In dolore commodo
        exercitation ex ex anim culpa. Anim culpa ipsum est excepteur in aliqua
        ipsum et pariatur quis velit. Enim aliquip ullamco enim irure elit.
        Eiusmod culpa aute est ea labore eu. Amet incididunt id elit laborum
        duis nostrud aute et. Consectetur dolore ex culpa fugiat nisi pariatur
        consequat esse sint sit aute sunt irure est. Adipisicing elit
        adipisicing pariatur cupidatat laboris do velit ullamco ullamco sit ad
        dolor nisi. Ex adipisicing mollit reprehenderit culpa ad in. Id dolor
        dolor amet duis eiusmod cupidatat laborum velit Lorem dolore. Sit nulla
        dolore amet excepteur pariatur velit veniam tempor ex cillum ea proident
        proident voluptate. Laborum tempor do eiusmod sit id culpa. Nisi
        excepteur sunt ipsum eiusmod. Laboris proident enim ex anim magna
        aliqua. Incididunt enim laborum mollit nisi nisi veniam sunt ea laborum
        non anim. Excepteur dolor esse reprehenderit laborum est velit eiusmod
        deserunt minim do ipsum. Anim tempor esse tempor qui et tempor
        reprehenderit et labore nulla anim sunt. Do ea elit labore dolore
        laboris occaecat. Dolor commodo do elit ex cillum incididunt aliqua
        aliqua. Ut ea velit tempor ea anim velit consequat occaecat ipsum Lorem
        amet do. Culpa ea Lorem ipsum cupidatat veniam laboris irure ad cillum.
        Ut do aliquip eu reprehenderit Lorem labore dolore cupidatat Lorem
        pariatur ipsum aliquip nisi nisi. Voluptate elit sit commodo esse sint
        commodo sit cupidatat fugiat. Proident in culpa nulla reprehenderit
        fugiat irure excepteur anim amet excepteur incididunt ea incididunt.
        Duis ea non do veniam non Lorem. Ad minim eiusmod proident exercitation
        excepteur aute enim. Nisi ad aliquip ad anim in ad ad sint commodo
        dolore ex tempor pariatur. Sit irure culpa sint fugiat. Ex id ea aliqua
        sunt reprehenderit laboris. Tempor ea nulla occaecat ea officia quis
        exercitation eiusmod magna est mollit anim velit cupidatat. Ut aliquip
        non incididunt in ut amet. Velit cupidatat non laborum nostrud aliquip
        cupidatat minim excepteur. Excepteur ut deserunt dolore amet consequat
        nisi nostrud officia nulla tempor excepteur. Sunt id est ullamco
        adipisicing pariatur esse excepteur voluptate pariatur ex pariatur nulla
        ut. Veniam et quis deserunt occaecat quis occaecat duis culpa proident
        consequat commodo amet. Adipisicing esse proident velit anim in
        reprehenderit et incididunt.
      </p>
    </div>
  );
}
