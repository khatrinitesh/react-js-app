import React from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

export default function NavbarWithIcons() {
  return (
    <>
      <Navbar />
      <main className="content">
        <p>Eiusmod voluptate aute mollit proident eiusmod.</p>
        <p>Eiusmod voluptate aute mollit proident eiusmod.</p>
        <p>Eiusmod voluptate aute mollit proident eiusmod.</p>
        Enim dolor minim dolore voluptate incididunt reprehenderit sunt labore.
        Dolore consectetur quis exercitation nisi fugiat quis deserunt commodo.
        Elit aute sint ex adipisicing incididunt do. Labore amet velit sit
        aliquip reprehenderit sunt do cillum qui ullamco aliquip enim id ad.
        Aute dolor ad do aute occaecat culpa minim fugiat. Aliquip id magna
        consectetur aute laboris duis ut. Velit eu ex nulla voluptate non.
        Consequat laboris laboris adipisicing occaecat dolore enim officia duis.
        Incididunt exercitation Lorem enim aliqua ullamco id consequat
        consectetur sint cupidatat dolore duis ut voluptate. Ipsum eu
        consectetur velit pariatur nisi qui nisi sunt. Nostrud anim consequat
        consequat anim proident quis veniam veniam sint minim duis laborum sunt.
        Sit cupidatat adipisicing amet ut sit sint quis proident velit veniam
        mollit nulla cillum minim. Ex sunt ullamco aliqua labore pariatur
        adipisicing Lorem reprehenderit. Laboris fugiat consectetur voluptate
        cupidatat labore esse. Sunt nisi non ex culpa dolor esse occaecat anim
        aliqua adipisicing. Laborum anim culpa velit dolore excepteur tempor ex
        ex amet cillum id nostrud ut aliquip. Consectetur sint consectetur in
        velit nostrud minim Lorem anim amet esse deserunt tempor. Mollit mollit
        est aute tempor. Non nisi laborum consequat sit tempor proident anim
        exercitation labore deserunt ad exercitation ipsum. Cillum reprehenderit
        dolor irure nulla veniam. Dolor esse ullamco consectetur mollit occaecat
        eu consectetur. Quis non eiusmod ea id voluptate irure incididunt aliqua
        ad laboris. Ullamco fugiat anim occaecat voluptate tempor ea
        exercitation esse ex sunt ex enim commodo aliqua. Eu magna consectetur
        culpa aute minim sint excepteur minim ad cillum tempor duis occaecat.
        Duis fugiat et irure incididunt pariatur cupidatat enim sint eiusmod
        reprehenderit. Exercitation magna nostrud in incididunt fugiat duis
        amet. Esse labore occaecat sunt voluptate eu reprehenderit eu
        adipisicing irure quis pariatur adipisicing. Enim non anim occaecat
        magna eiusmod cillum elit elit et ipsum sunt consectetur sunt ad.
        Voluptate labore enim deserunt adipisicing ea commodo esse nisi anim
        cillum voluptate adipisicing cupidatat. Reprehenderit aute proident ut
        deserunt dolore esse. Sit sint do magna labore labore officia labore
        quis do irure esse. Officia culpa commodo esse Lorem labore sit
        excepteur mollit quis veniam sit Lorem elit. Veniam incididunt
        exercitation pariatur cupidatat do ad velit exercitation non velit. Qui
        labore sunt esse nisi quis qui fugiat. Consectetur culpa aliqua aute
        nostrud esse officia occaecat. Magna duis reprehenderit nulla ipsum
        reprehenderit est in do duis eu exercitation ullamco. In consequat
        nostrud ex nulla est cupidatat qui elit consequat sint velit aliqua ea
        proident. Non labore exercitation reprehenderit elit qui ad nulla enim
        non irure. Voluptate reprehenderit aliqua dolor consectetur fugiat et.
        Quis excepteur mollit ullamco nulla ut eiusmod. Ad duis proident Lorem
        est. Sit ipsum aute nulla labore dolor tempor voluptate do. Sint
        consectetur adipisicing incididunt consectetur irure. Laborum minim quis
        esse sit exercitation officia sit. Occaecat culpa labore dolore
        incididunt do duis nostrud nulla pariatur. Aute ullamco ea aute eu
        Lorem. Officia deserunt cupidatat minim commodo consectetur sunt ad ad.
        Proident fugiat est in do esse magna nisi aliquip ea aliqua laboris ea.
        Sunt sit consequat commodo labore. Aliquip eu eiusmod ut enim minim
        tempor culpa ullamco esse et minim exercitation occaecat reprehenderit.
      </main>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-item">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FaUser />
          <span>About</span>
        </div>
        <div className="nav-item">
          <FaEnvelope />
          <span>Contact</span>
        </div>
      </nav>
    </>
  );
}
