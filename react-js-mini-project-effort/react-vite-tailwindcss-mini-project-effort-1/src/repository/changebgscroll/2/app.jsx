import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import "./style.css";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./navbarstyles";

export default function Example() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo href="#">GeeksForGeeks</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="#">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Sign In</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
      <div className="content">
        <p>
          Esse adipisicing irure ullamco cillum magna veniam nulla sunt in.
          Commodo elit laborum officia occaecat laborum aute laboris. Proident
          aute nostrud mollit esse dolor. Tempor dolore minim et duis.
          Incididunt commodo consectetur id pariatur consectetur sit voluptate
          elit adipisicing Lorem aliquip mollit. Lorem consectetur do voluptate
          ea et mollit velit incididunt culpa exercitation do consectetur
          excepteur. Commodo id mollit veniam enim labore cillum ex est. Enim
          quis mollit mollit dolore. Sit sint anim consectetur tempor amet eu
          ipsum. Proident elit ea tempor in enim ea. Cupidatat reprehenderit
          Lorem do nulla nisi eu labore in. Quis consequat aute eu quis nulla
          sunt dolor anim consequat. Laboris nostrud amet proident elit
          cupidatat. Veniam non aliqua anim cupidatat deserunt labore amet
          dolore. Aliqua ea velit consequat amet cillum est. Voluptate
          exercitation commodo minim irure sunt excepteur elit consequat.
          Officia esse officia magna qui qui ex consequat velit fugiat ad amet.
          Esse qui duis eiusmod sunt magna dolore cillum. Veniam fugiat labore
          fugiat nulla tempor sunt. Mollit cupidatat enim sint sunt id. Nisi
          exercitation aliqua sit eiusmod sint. Cillum mollit consectetur esse
          amet consectetur exercitation cillum nulla. Ea laborum et labore non
          ut aliqua eu non occaecat. Non tempor sunt non dolor occaecat officia
          sunt voluptate velit ullamco Lorem irure ex magna. Incididunt
          adipisicing anim Lorem dolor esse. Excepteur enim anim deserunt
          cupidatat nisi labore minim. Dolore veniam minim sit velit et. Ad
          proident laborum excepteur velit ut. Incididunt eu irure eiusmod
          dolore aliquip ad fugiat magna labore aute sint velit exercitation.
          Cupidatat non Lorem irure et ipsum enim duis sit aliquip. Cillum
          veniam qui est fugiat laboris excepteur. Et fugiat nisi aliquip
          commodo ipsum mollit incididunt labore nisi. Quis anim duis mollit
          aliqua pariatur eiusmod minim sit aute non laborum dolor. Aliqua esse
          excepteur excepteur sint et. Quis est exercitation duis sint
          reprehenderit quis ipsum fugiat voluptate ut sint Lorem tempor sunt.
          Consectetur occaecat adipisicing proident aute aliqua anim. Eu fugiat
          sunt voluptate ad sunt id dolore irure sunt est ea labore consectetur.
          Anim occaecat commodo enim reprehenderit. Ad consequat proident velit
          aliquip aute consequat velit esse et et velit aute enim. Est proident
          cillum sint Lorem eiusmod deserunt pariatur elit Lorem nisi amet duis.
          Eu reprehenderit ex ad aute commodo adipisicing occaecat commodo
          proident reprehenderit velit eiusmod dolor velit. Irure quis laborum
          proident est magna. Ad ipsum consectetur commodo duis exercitation
          veniam.
        </p>
        <p>
            Esse adipisicing irure ullamco cillum magna veniam nulla sunt in.
            Commodo elit laborum officia occaecat laborum aute laboris. Proident
            aute nostrud mollit esse dolor. Tempor dolore minim et duis.
            Incididunt commodo consectetur id pariatur consectetur sit voluptate
            elit adipisicing Lorem aliquip mollit. Lorem consectetur do voluptate
            ea et mollit velit incididunt culpa exercitation do consectetur
            excepteur. Commodo id mollit veniam enim labore cillum ex est. Enim
            quis mollit mollit dolore. Sit sint anim consectetur tempor amet eu
            ipsum. Proident elit ea tempor in enim ea. Cupidatat reprehenderit
            Lorem do nulla nisi eu labore in. Quis consequat aute eu quis nulla
            sunt dolor anim consequat. Laboris nostrud amet proident elit
            cupidatat. Veniam non aliqua anim cupidatat deserunt labore amet
            dolore. Aliqua ea velit consequat amet cillum est. Voluptate
            exercitation commodo minim irure sunt excepteur elit consequat.
            Officia esse officia magna qui qui ex consequat velit fugiat ad amet.
            Esse qui duis eiusmod sunt magna dolore cillum. Veniam fugiat labore
            fugiat nulla tempor sunt. Mollit cupidatat enim sint sunt id. Nisi
            exercitation aliqua sit eiusmod sint. Cillum mollit consectetur esse
            amet consectetur exercitation cillum nulla. Ea laborum et labore non
            ut aliqua eu non occaecat. Non tempor sunt non dolor occaecat officia
            sunt voluptate velit ullamco Lorem irure ex magna. Incididunt
            adipisicing anim Lorem dolor esse. Excepteur enim anim deserunt
            cupidatat nisi labore minim. Dolore veniam minim sit velit et. Ad
            proident laborum excepteur velit ut. Incididunt eu irure eiusmod
            dolore aliquip ad fugiat magna labore aute sint velit exercitation.
            Cupidatat non Lorem irure et ipsum enim duis sit aliquip. Cillum
            veniam qui est fugiat laboris excepteur. Et fugiat nisi aliquip
            commodo ipsum mollit incididunt labore nisi. Quis anim duis mollit
            aliqua pariatur eiusmod minim sit aute non laborum dolor. Aliqua esse
            excepteur excepteur sint et. Quis est exercitation duis sint
            reprehenderit quis ipsum fugiat voluptate ut sint Lorem tempor sunt.
            Consectetur occaecat adipisicing proident aute aliqua anim. Eu fugiat
            sunt voluptate ad sunt id dolore irure sunt est ea labore consectetur.
            Anim occaecat commodo enim reprehenderit. Ad consequat proident velit
            aliquip aute consequat velit esse et et velit aute enim. Est proident
            cillum sint Lorem eiusmod deserunt pariatur elit Lorem nisi amet duis.
            Eu reprehenderit ex ad aute commodo adipisicing occaecat commodo
            proident reprehenderit velit eiusmod dolor velit. Irure quis laborum
            proident est magna. Ad ipsum consectetur commodo duis exercitation
            veniam.
        </p>
        <p>
            Esse adipisicing irure ullamco cillum magna veniam nulla sunt in.
            Commodo elit laborum officia occaecat laborum aute laboris. Proident
            aute nostrud mollit esse dolor. Tempor dolore minim et duis.
            Incididunt commodo consectetur id pariatur consectetur sit voluptate
            elit adipisicing Lorem aliquip mollit. Lorem consectetur do voluptate
            ea et mollit velit incididunt culpa exercitation do consectetur
            excepteur. Commodo id mollit veniam enim labore cillum ex est. Enim
            quis mollit mollit dolore. Sit sint anim consectetur tempor amet eu
            ipsum. Proident elit ea tempor in enim ea. Cupidatat reprehenderit
            Lorem do nulla nisi eu labore in. Quis consequat aute eu quis nulla
            sunt dolor anim consequat. Laboris nostrud amet proident elit
            cupidatat. Veniam non aliqua anim cupidatat deserunt labore amet
            dolore. Aliqua ea velit consequat amet cillum est. Voluptate
            exercitation commodo minim irure sunt excepteur elit consequat.
            Officia esse officia magna qui qui ex consequat velit fugiat ad amet.
            Esse qui duis eiusmod sunt magna dolore cillum. Veniam fugiat labore
            fugiat nulla tempor sunt. Mollit cupidatat enim sint sunt id. Nisi
            exercitation aliqua sit eiusmod sint. Cillum mollit consectetur esse
            amet consectetur exercitation cillum nulla. Ea laborum et labore non
            ut aliqua eu non occaecat. Non tempor sunt non dolor occaecat officia
            sunt voluptate velit ullamco Lorem irure ex magna. Incididunt
            adipisicing anim Lorem dolor esse. Excepteur enim anim deserunt
            cupidatat nisi labore minim. Dolore veniam minim sit velit et. Ad
            proident laborum excepteur velit ut. Incididunt eu irure eiusmod
            dolore aliquip ad fugiat magna labore aute sint velit exercitation.
            Cupidatat non Lorem irure et ipsum enim duis sit aliquip. Cillum
            veniam qui est fugiat laboris excepteur. Et fugiat nisi aliquip
            commodo ipsum mollit incididunt labore nisi. Quis anim duis mollit
            aliqua pariatur eiusmod minim sit aute non laborum dolor. Aliqua esse
            excepteur excepteur sint et. Quis est exercitation duis sint
            reprehenderit quis ipsum fugiat voluptate ut sint Lorem tempor sunt.
            Consectetur occaecat adipisicing proident aute aliqua anim. Eu fugiat
            sunt voluptate ad sunt id dolore irure sunt est ea labore consectetur.
            Anim occaecat commodo enim reprehenderit. Ad consequat proident velit
            aliquip aute consequat velit esse et et velit aute enim. Est proident
            cillum sint Lorem eiusmod deserunt pariatur elit Lorem nisi amet duis.
            Eu reprehenderit ex ad aute commodo adipisicing occaecat commodo
            proident reprehenderit velit eiusmod dolor velit. Irure quis laborum
            proident est magna. Ad ipsum consectetur commodo duis exercitation
            veniam.
        </p>
        <p>
            Esse adipisicing irure ullamco cillum magna veniam nulla sunt in.
            Commodo elit laborum officia occaecat laborum aute laboris. Proident
            aute nostrud mollit esse dolor. Tempor dolore minim et duis.
            Incididunt commodo consectetur id pariatur consectetur sit voluptate
            elit adipisicing Lorem aliquip mollit. Lorem consectetur do voluptate
            ea et mollit velit incididunt culpa exercitation do consectetur
            excepteur. Commodo id mollit veniam enim labore cillum ex est. Enim
            quis mollit mollit dolore. Sit sint anim consectetur tempor amet eu
            ipsum. Proident elit ea tempor in enim ea. Cupidatat reprehenderit
            Lorem do nulla nisi eu labore in. Quis consequat aute eu quis nulla
            sunt dolor anim consequat. Laboris nostrud amet proident elit
            cupidatat. Veniam non aliqua anim cupidatat deserunt labore amet
            dolore. Aliqua ea velit consequat amet cillum est. Voluptate
            exercitation commodo minim irure sunt excepteur elit consequat.
            Officia esse officia magna qui qui ex consequat velit fugiat ad amet.
            Esse qui duis eiusmod sunt magna dolore cillum. Veniam fugiat labore
            fugiat nulla tempor sunt. Mollit cupidatat enim sint sunt id. Nisi
            exercitation aliqua sit eiusmod sint. Cillum mollit consectetur esse
            amet consectetur exercitation cillum nulla. Ea laborum et labore non
            ut aliqua eu non occaecat. Non tempor sunt non dolor occaecat officia
            sunt voluptate velit ullamco Lorem irure ex magna. Incididunt
            adipisicing anim Lorem dolor esse. Excepteur enim anim deserunt
            cupidatat nisi labore minim. Dolore veniam minim sit velit et. Ad
            proident laborum excepteur velit ut. Incididunt eu irure eiusmod
            dolore aliquip ad fugiat magna labore aute sint velit exercitation.
            Cupidatat non Lorem irure et ipsum enim duis sit aliquip. Cillum
            veniam qui est fugiat laboris excepteur. Et fugiat nisi aliquip
            commodo ipsum mollit incididunt labore nisi. Quis anim duis mollit
            aliqua pariatur eiusmod minim sit aute non laborum dolor. Aliqua esse
            excepteur excepteur sint et. Quis est exercitation duis sint
            reprehenderit quis ipsum fugiat voluptate ut sint Lorem tempor sunt.
            Consectetur occaecat adipisicing proident aute aliqua anim. Eu fugiat
            sunt voluptate ad sunt id dolore irure sunt est ea labore consectetur.
            Anim occaecat commodo enim reprehenderit. Ad consequat proident velit
            aliquip aute consequat velit esse et et velit aute enim. Est proident
            cillum sint Lorem eiusmod deserunt pariatur elit Lorem nisi amet duis.
            Eu reprehenderit ex ad aute commodo adipisicing occaecat commodo
            proident reprehenderit velit eiusmod dolor velit. Irure quis laborum
            proident est magna. Ad ipsum consectetur commodo duis exercitation
            veniam.
        </p>
        <p>
            Esse adipisicing irure ullamco cillum magna veniam nulla sunt in.
            Commodo elit laborum officia occaecat laborum aute laboris. Proident
            aute nostrud mollit esse dolor. Tempor dolore minim et duis.
            Incididunt commodo consectetur id pariatur consectetur sit voluptate
            elit adipisicing Lorem aliquip mollit. Lorem consectetur do voluptate
            ea et mollit velit incididunt culpa exercitation do consectetur
            excepteur. Commodo id mollit veniam enim labore cillum ex est. Enim
            quis mollit mollit dolore. Sit sint anim consectetur tempor amet eu
            ipsum. Proident elit ea tempor in enim ea. Cupidatat reprehenderit
            Lorem do nulla nisi eu labore in. Quis consequat aute eu quis nulla
            sunt dolor anim consequat. Laboris nostrud amet proident elit
            cupidatat. Veniam non aliqua anim cupidatat deserunt labore amet
            dolore. Aliqua ea velit consequat amet cillum est. Voluptate
            exercitation commodo minim irure sunt excepteur elit consequat.
            Officia esse officia magna qui qui ex consequat velit fugiat ad amet.
            Esse qui duis eiusmod sunt magna dolore cillum. Veniam fugiat labore
            fugiat nulla tempor sunt. Mollit cupidatat enim sint sunt id. Nisi
            exercitation aliqua sit eiusmod sint. Cillum mollit consectetur esse
            amet consectetur exercitation cillum nulla. Ea laborum et labore non
            ut aliqua eu non occaecat. Non tempor sunt non dolor occaecat officia
            sunt voluptate velit ullamco Lorem irure ex magna. Incididunt
            adipisicing anim Lorem dolor esse. Excepteur enim anim deserunt
            cupidatat nisi labore minim. Dolore veniam minim sit velit et. Ad
            proident laborum excepteur velit ut. Incididunt eu irure eiusmod
            dolore aliquip ad fugiat magna labore aute sint velit exercitation.
            Cupidatat non Lorem irure et ipsum enim duis sit aliquip. Cillum
            veniam qui est fugiat laboris excepteur. Et fugiat nisi aliquip
            commodo ipsum mollit incididunt labore nisi. Quis anim duis mollit
            aliqua pariatur eiusmod minim sit aute non laborum dolor. Aliqua esse
            excepteur excepteur sint et. Quis est exercitation duis sint
            reprehenderit quis ipsum fugiat voluptate ut sint Lorem tempor sunt.
            Consectetur occaecat adipisicing proident aute aliqua anim. Eu fugiat
            sunt voluptate ad sunt id dolore irure sunt est ea labore consectetur.
            Anim occaecat commodo enim reprehenderit. Ad consequat proident velit
            aliquip aute consequat velit esse et et velit aute enim. Est proident
            cillum sint Lorem eiusmod deserunt pariatur elit Lorem nisi amet duis.
            Eu reprehenderit ex ad aute commodo adipisicing occaecat commodo
            proident reprehenderit velit eiusmod dolor velit. Irure quis laborum
            proident est magna. Ad ipsum consectetur commodo duis exercitation
            veniam.
        </p>
        <p>
            Esse adipisicing irure ullamco cillum magna veniam nulla sunt in.
            Commodo elit laborum officia occaecat laborum aute laboris. Proident
            aute nostrud mollit esse dolor. Tempor dolore minim et duis.
            Incididunt commodo consectetur id pariatur consectetur sit voluptate
            elit adipisicing Lorem aliquip mollit. Lorem consectetur do voluptate
            ea et mollit velit incididunt culpa exercitation do consectetur
            excepteur. Commodo id mollit veniam enim labore cillum ex est. Enim
            quis mollit mollit dolore. Sit sint anim consectetur tempor amet eu
            ipsum. Proident elit ea tempor in enim ea. Cupidatat reprehenderit
            Lorem do nulla nisi eu labore in. Quis consequat aute eu quis nulla
            sunt dolor anim consequat. Laboris nostrud amet proident elit
            cupidatat. Veniam non aliqua anim cupidatat deserunt labore amet
            dolore. Aliqua ea velit consequat amet cillum est. Voluptate
            exercitation commodo minim irure sunt excepteur elit consequat.
            Officia esse officia magna qui qui ex consequat velit fugiat ad amet.
            Esse qui duis eiusmod sunt magna dolore cillum. Veniam fugiat labore
            fugiat nulla tempor sunt. Mollit cupidatat enim sint sunt id. Nisi
            exercitation aliqua sit eiusmod sint. Cillum mollit consectetur esse
            amet consectetur exercitation cillum nulla. Ea laborum et labore non
            ut aliqua eu non occaecat. Non tempor sunt non dolor occaecat officia
            sunt voluptate velit ullamco Lorem irure ex magna. Incididunt
            adipisicing anim Lorem dolor esse. Excepteur enim anim deserunt
            cupidatat nisi labore minim. Dolore veniam minim sit velit et. Ad
            proident laborum excepteur velit ut. Incididunt eu irure eiusmod
            dolore aliquip ad fugiat magna labore aute sint velit exercitation.
            Cupidatat non Lorem irure et ipsum enim duis sit aliquip. Cillum
            veniam qui est fugiat laboris excepteur. Et fugiat nisi aliquip
            commodo ipsum mollit incididunt labore nisi. Quis anim duis mollit
            aliqua pariatur eiusmod minim sit aute non laborum dolor. Aliqua esse
            excepteur excepteur sint et. Quis est exercitation duis sint
            reprehenderit quis ipsum fugiat voluptate ut sint Lorem tempor sunt.
            Consectetur occaecat adipisicing proident aute aliqua anim. Eu fugiat
            sunt voluptate ad sunt id dolore irure sunt est ea labore consectetur.
            Anim occaecat commodo enim reprehenderit. Ad consequat proident velit
            aliquip aute consequat velit esse et et velit aute enim. Est proident
            cillum sint Lorem eiusmod deserunt pariatur elit Lorem nisi amet duis.
            Eu reprehenderit ex ad aute commodo adipisicing occaecat commodo
            proident reprehenderit velit eiusmod dolor velit. Irure quis laborum
            proident est magna. Ad ipsum consectetur commodo duis exercitation
            veniam.
        </p>
      </div>
    </>
  );
}
