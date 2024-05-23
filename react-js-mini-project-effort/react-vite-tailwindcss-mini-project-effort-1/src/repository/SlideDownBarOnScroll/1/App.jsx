import React, { useState, useEffect } from 'react';

const SlideDownBarOnScroll = () => {
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };

        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        };
    },[])
  return (
    <>
    <div className={`slide-down-bar ${isScrolled ? 'scrolled' : ''}`}>
        <p>Your Slide Down Bar Content</p>
    </div>
    <p>Laborum proident esse sunt eu laboris ea. Proident ipsum ad cillum culpa officia non elit Lorem id do occaecat est et ut. Voluptate excepteur sint occaecat anim elit sint. Ullamco ea fugiat deserunt dolore labore id eu dolor proident do.

Do adipisicing dolore incididunt adipisicing amet aute nisi ullamco laboris reprehenderit sint sit ipsum. Nostrud quis aute quis laboris velit eiusmod reprehenderit consectetur incididunt. Sit magna deserunt consequat ullamco laboris in sint ex nisi.

Non sunt nisi nisi dolor eiusmod duis dolore enim. Officia do veniam aliqua labore. Sint magna tempor Lorem pariatur. Reprehenderit officia nostrud occaecat fugiat elit cillum culpa amet excepteur reprehenderit nisi nisi ad.

Mollit adipisicing voluptate labore tempor dolor minim sit est consectetur. Enim dolor consectetur esse consequat veniam fugiat culpa do laborum eiusmod do consectetur. Deserunt mollit proident exercitation nostrud laborum do tempor laborum pariatur consectetur elit incididunt duis. Consectetur commodo fugiat voluptate laborum ex dolor id excepteur culpa eu.

Adipisicing aute nulla esse consectetur occaecat et adipisicing laboris quis veniam voluptate quis cillum id. Fugiat duis dolor officia exercitation ad aute duis deserunt in mollit laboris. Eu ex eiusmod nisi nulla ipsum commodo magna dolore. Ex velit reprehenderit ad mollit incididunt non eu cupidatat eu qui voluptate in ea. Aliquip velit ea duis voluptate aliquip non. Consequat laborum exercitation mollit pariatur exercitation sint consequat minim est nulla minim proident.

Aute reprehenderit aliquip reprehenderit in commodo irure veniam nostrud pariatur sint velit duis. Minim laborum do consectetur cillum reprehenderit sit ut. Laborum fugiat ex laborum aliqua velit eiusmod non ea magna. Irure tempor nulla duis magna occaecat tempor Lorem cupidatat occaecat esse duis. Mollit incididunt aliquip in mollit cupidatat magna.

Nostrud reprehenderit exercitation aute dolore in. Veniam eu proident incididunt elit veniam. Commodo ea incididunt et labore et reprehenderit officia labore duis aute. Cillum reprehenderit tempor proident eiusmod in ex esse. Magna cillum aute aute aliqua ullamco aliqua nostrud eu exercitation commodo. Minim labore in occaecat reprehenderit laborum anim dolore cillum.

Eiusmod magna consequat occaecat do voluptate minim aute duis incididunt duis aliqua. Duis aute reprehenderit sunt voluptate esse irure adipisicing elit reprehenderit. Excepteur eiusmod tempor id quis nostrud laborum id. Cillum ea Lorem id ex consequat fugiat voluptate.

Magna ex anim exercitation nisi culpa officia est culpa pariatur minim. Consectetur ipsum officia quis quis quis cupidatat est magna enim veniam nisi velit veniam consequat. In ex dolore dolore dolore veniam dolor ea laborum proident do aliqua cupidatat. Duis mollit ea eu eiusmod proident in sint occaecat anim sit aute amet exercitation aliquip. Excepteur et culpa in et deserunt fugiat ipsum reprehenderit officia aute. Anim magna esse et ad. Anim dolore consequat laboris sint duis et ea.

Ullamco nulla ullamco et labore aliqua. Non labore consectetur mollit eiusmod pariatur. Voluptate labore anim excepteur consectetur pariatur dolor tempor veniam aliqua. Lorem ex commodo enim eu voluptate nostrud exercitation consequat. Commodo officia quis proident mollit. Eu pariatur in quis deserunt veniam non non laborum sit esse. Reprehenderit magna labore id anim sit dolore ut.</p>
<p>Laborum proident esse sunt eu laboris ea. Proident ipsum ad cillum culpa officia non elit Lorem id do occaecat est et ut. Voluptate excepteur sint occaecat anim elit sint. Ullamco ea fugiat deserunt dolore labore id eu dolor proident do.

Do adipisicing dolore incididunt adipisicing amet aute nisi ullamco laboris reprehenderit sint sit ipsum. Nostrud quis aute quis laboris velit eiusmod reprehenderit consectetur incididunt. Sit magna deserunt consequat ullamco laboris in sint ex nisi.

Non sunt nisi nisi dolor eiusmod duis dolore enim. Officia do veniam aliqua labore. Sint magna tempor Lorem pariatur. Reprehenderit officia nostrud occaecat fugiat elit cillum culpa amet excepteur reprehenderit nisi nisi ad.

Mollit adipisicing voluptate labore tempor dolor minim sit est consectetur. Enim dolor consectetur esse consequat veniam fugiat culpa do laborum eiusmod do consectetur. Deserunt mollit proident exercitation nostrud laborum do tempor laborum pariatur consectetur elit incididunt duis. Consectetur commodo fugiat voluptate laborum ex dolor id excepteur culpa eu.

Adipisicing aute nulla esse consectetur occaecat et adipisicing laboris quis veniam voluptate quis cillum id. Fugiat duis dolor officia exercitation ad aute duis deserunt in mollit laboris. Eu ex eiusmod nisi nulla ipsum commodo magna dolore. Ex velit reprehenderit ad mollit incididunt non eu cupidatat eu qui voluptate in ea. Aliquip velit ea duis voluptate aliquip non. Consequat laborum exercitation mollit pariatur exercitation sint consequat minim est nulla minim proident.

Aute reprehenderit aliquip reprehenderit in commodo irure veniam nostrud pariatur sint velit duis. Minim laborum do consectetur cillum reprehenderit sit ut. Laborum fugiat ex laborum aliqua velit eiusmod non ea magna. Irure tempor nulla duis magna occaecat tempor Lorem cupidatat occaecat esse duis. Mollit incididunt aliquip in mollit cupidatat magna.

Nostrud reprehenderit exercitation aute dolore in. Veniam eu proident incididunt elit veniam. Commodo ea incididunt et labore et reprehenderit officia labore duis aute. Cillum reprehenderit tempor proident eiusmod in ex esse. Magna cillum aute aute aliqua ullamco aliqua nostrud eu exercitation commodo. Minim labore in occaecat reprehenderit laborum anim dolore cillum.

Eiusmod magna consequat occaecat do voluptate minim aute duis incididunt duis aliqua. Duis aute reprehenderit sunt voluptate esse irure adipisicing elit reprehenderit. Excepteur eiusmod tempor id quis nostrud laborum id. Cillum ea Lorem id ex consequat fugiat voluptate.

Magna ex anim exercitation nisi culpa officia est culpa pariatur minim. Consectetur ipsum officia quis quis quis cupidatat est magna enim veniam nisi velit veniam consequat. In ex dolore dolore dolore veniam dolor ea laborum proident do aliqua cupidatat. Duis mollit ea eu eiusmod proident in sint occaecat anim sit aute amet exercitation aliquip. Excepteur et culpa in et deserunt fugiat ipsum reprehenderit officia aute. Anim magna esse et ad. Anim dolore consequat laboris sint duis et ea.

Ullamco nulla ullamco et labore aliqua. Non labore consectetur mollit eiusmod pariatur. Voluptate labore anim excepteur consectetur pariatur dolor tempor veniam aliqua. Lorem ex commodo enim eu voluptate nostrud exercitation consequat. Commodo officia quis proident mollit. Eu pariatur in quis deserunt veniam non non laborum sit esse. Reprehenderit magna labore id anim sit dolore ut.</p>
<p>Laborum proident esse sunt eu laboris ea. Proident ipsum ad cillum culpa officia non elit Lorem id do occaecat est et ut. Voluptate excepteur sint occaecat anim elit sint. Ullamco ea fugiat deserunt dolore labore id eu dolor proident do.

Do adipisicing dolore incididunt adipisicing amet aute nisi ullamco laboris reprehenderit sint sit ipsum. Nostrud quis aute quis laboris velit eiusmod reprehenderit consectetur incididunt. Sit magna deserunt consequat ullamco laboris in sint ex nisi.

Non sunt nisi nisi dolor eiusmod duis dolore enim. Officia do veniam aliqua labore. Sint magna tempor Lorem pariatur. Reprehenderit officia nostrud occaecat fugiat elit cillum culpa amet excepteur reprehenderit nisi nisi ad.

Mollit adipisicing voluptate labore tempor dolor minim sit est consectetur. Enim dolor consectetur esse consequat veniam fugiat culpa do laborum eiusmod do consectetur. Deserunt mollit proident exercitation nostrud laborum do tempor laborum pariatur consectetur elit incididunt duis. Consectetur commodo fugiat voluptate laborum ex dolor id excepteur culpa eu.

Adipisicing aute nulla esse consectetur occaecat et adipisicing laboris quis veniam voluptate quis cillum id. Fugiat duis dolor officia exercitation ad aute duis deserunt in mollit laboris. Eu ex eiusmod nisi nulla ipsum commodo magna dolore. Ex velit reprehenderit ad mollit incididunt non eu cupidatat eu qui voluptate in ea. Aliquip velit ea duis voluptate aliquip non. Consequat laborum exercitation mollit pariatur exercitation sint consequat minim est nulla minim proident.

Aute reprehenderit aliquip reprehenderit in commodo irure veniam nostrud pariatur sint velit duis. Minim laborum do consectetur cillum reprehenderit sit ut. Laborum fugiat ex laborum aliqua velit eiusmod non ea magna. Irure tempor nulla duis magna occaecat tempor Lorem cupidatat occaecat esse duis. Mollit incididunt aliquip in mollit cupidatat magna.

Nostrud reprehenderit exercitation aute dolore in. Veniam eu proident incididunt elit veniam. Commodo ea incididunt et labore et reprehenderit officia labore duis aute. Cillum reprehenderit tempor proident eiusmod in ex esse. Magna cillum aute aute aliqua ullamco aliqua nostrud eu exercitation commodo. Minim labore in occaecat reprehenderit laborum anim dolore cillum.

Eiusmod magna consequat occaecat do voluptate minim aute duis incididunt duis aliqua. Duis aute reprehenderit sunt voluptate esse irure adipisicing elit reprehenderit. Excepteur eiusmod tempor id quis nostrud laborum id. Cillum ea Lorem id ex consequat fugiat voluptate.

Magna ex anim exercitation nisi culpa officia est culpa pariatur minim. Consectetur ipsum officia quis quis quis cupidatat est magna enim veniam nisi velit veniam consequat. In ex dolore dolore dolore veniam dolor ea laborum proident do aliqua cupidatat. Duis mollit ea eu eiusmod proident in sint occaecat anim sit aute amet exercitation aliquip. Excepteur et culpa in et deserunt fugiat ipsum reprehenderit officia aute. Anim magna esse et ad. Anim dolore consequat laboris sint duis et ea.

Ullamco nulla ullamco et labore aliqua. Non labore consectetur mollit eiusmod pariatur. Voluptate labore anim excepteur consectetur pariatur dolor tempor veniam aliqua. Lorem ex commodo enim eu voluptate nostrud exercitation consequat. Commodo officia quis proident mollit. Eu pariatur in quis deserunt veniam non non laborum sit esse. Reprehenderit magna labore id anim sit dolore ut.</p>

    </>
  )
}

export default SlideDownBarOnScroll
