import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CustomScrollbarComp = () => {
  return (
    <>
      <CustomScrollbar />
    </>
  );
};

export default CustomScrollbarComp;

const CustomScrollbar = () => {
  const [thumbPosition, setThumbPosition] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Reference to the content container for scroll events
  const contentRef = React.useRef();

  useEffect(() => {
    // Calculate thumb size based on content height and container height
    const contentHeight = contentRef.current.scrollHeight;
    const containerHeight = contentRef.current.clientHeight;
    const newThumbHeight = (containerHeight / contentHeight) * containerHeight;
    setThumbHeight(newThumbHeight);

    // Add scroll event listener to update the thumb position
    const handleScroll = () => {
      const newScrollTop = contentRef.current.scrollTop;
      setScrollTop(newScrollTop);

      const thumbPosition = (newScrollTop / contentHeight) * containerHeight;
      setThumbPosition(thumbPosition);
    };

    contentRef.current.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener
    return () => {
      contentRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContainer>
      <Content ref={contentRef}>
        {/* Your content goes here */}
        <p>Scroll down to see the custom scrollbar in action!</p>
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        Irure amet veniam sint voluptate magna Lorem ex adipisicing ea quis et
        eiusmod minim aliquip. Dolor incididunt eiusmod laboris id ullamco
        eiusmod ex. Est est nostrud excepteur proident nisi qui est exercitation
        est pariatur cupidatat aliquip magna enim. Nostrud ullamco id nulla
        cupidatat anim aliquip enim ipsum. Nisi consequat commodo ad id dolor
        exercitation labore esse. Fugiat deserunt voluptate voluptate aliqua
        culpa nulla. Veniam anim esse tempor occaecat elit. Officia mollit non
        enim proident anim ex commodo aliquip proident velit. Elit irure
        consectetur sunt anim aliquip nisi anim anim amet sint do consequat elit
        incididunt. Est occaecat sunt sunt anim deserunt ea ullamco. Elit
        laboris veniam nisi ea nostrud dolore quis. Tempor dolor adipisicing
        proident elit est et. Consequat consectetur magna ullamco do consequat
        excepteur. Laborum Lorem ad reprehenderit anim id sint elit consequat.
        Qui sint quis mollit sunt nulla aliqua eu id quis quis cillum veniam
        tempor. Fugiat ex non anim ullamco officia aliqua exercitation aute aute
        dolore consequat dolore. Aliquip tempor ea in laboris Lorem in velit
        duis reprehenderit aute duis ut. Cillum ex eu id laboris aliquip
        voluptate cupidatat sit reprehenderit cupidatat veniam laboris deserunt
        ad. Sit aliquip occaecat mollit officia irure minim. Aliqua deserunt sit
        nostrud et consectetur elit non in laborum nisi. Ea in ipsum laboris
        esse id excepteur. Laborum eiusmod adipisicing cupidatat aliquip officia
        esse velit Lorem sit occaecat voluptate sunt consectetur non. Magna
        tempor est dolor velit. Ea pariatur incididunt eu adipisicing. Excepteur
        occaecat do esse excepteur mollit quis excepteur aliqua pariatur. Dolor
        sit dolor amet ex deserunt qui officia do qui labore exercitation. Enim
        non culpa do cupidatat ullamco nisi. Duis aliquip esse cillum ea est
        aute ea. Aute minim exercitation minim magna officia laboris. Sunt
        nostrud esse fugiat elit nulla aliquip nisi et est. Laborum in deserunt
        est nulla qui nostrud adipisicing duis commodo enim nulla tempor
        exercitation. Aliqua id ipsum tempor officia magna veniam sunt occaecat
        nisi nostrud exercitation tempor nulla labore. Et proident veniam
        adipisicing labore adipisicing do sit amet occaecat. Dolore esse anim
        veniam elit consectetur sunt deserunt. Sint esse veniam culpa culpa sit
        incididunt cillum magna non dolor ut. Adipisicing qui ad dolore
        voluptate laborum eu duis tempor mollit excepteur aute anim. Proident ea
        magna incididunt enim eu nisi culpa aliqua magna elit tempor eiusmod
        nostrud ad. Exercitation aute proident ullamco Lorem laborum dolore
        aliqua irure laboris Lorem incididunt officia sunt. Et cupidatat commodo
        do fugiat irure do. Do id fugiat pariatur minim. Adipisicing nulla
        consectetur quis aliquip cupidatat ea officia incididunt reprehenderit.
        Aliquip sit do dolor occaecat voluptate excepteur. Fugiat mollit sunt
        amet ipsum in amet. Nostrud et aute in sunt ex fugiat eiusmod commodo
        consectetur laboris nulla aliqua. Adipisicing Lorem dolore est cupidatat
        ut id sunt. Ullamco est nisi reprehenderit reprehenderit do nostrud
        culpa esse laborum eu enim. Sit sunt ad sint ullamco excepteur qui
        tempor tempor mollit commodo cupidatat nisi cillum culpa. Lorem nulla
        cillum mollit est nisi ut reprehenderit. Do eu aliquip mollit excepteur
        ullamco voluptate ea eiusmod ex et ipsum ut id cupidatat. Reprehenderit
        amet veniam duis dolore ad laboris excepteur minim veniam enim quis
        voluptate eiusmod sunt. In ex ut cupidatat excepteur adipisicing aute
        fugiat nulla officia ad. Id mollit mollit cillum veniam nisi
        exercitation proident.
        {/* Additional content */}
      </Content>

      <Scrollbar>
        <Thumb
          style={{ top: thumbPosition, height: thumbHeight }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Scrollbar>
    </ScrollContainer>
  );
};

// Styled components for the custom scrollbar
const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: 2000px; /* Simulating a long content */
  padding: 20px;
  background-color: #f0f0f0;
  overflow-y: scroll;
  padding-right: 15px; /* To make space for the scrollbar */
`;

const Scrollbar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 100%;
  background-color: #d1d1d1;
  border-radius: 8px;
  pointer-events: none; /* To make sure it doesn't interfere with the scroll */
`;

const Thumb = styled(motion.div)`
  position: absolute;
  width: 100%;
  background-color: #007bff;
  border-radius: 8px;
  cursor: pointer;
`;
