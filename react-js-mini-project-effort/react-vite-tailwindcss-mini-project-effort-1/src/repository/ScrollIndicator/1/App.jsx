import React, { useState, useEffect } from 'react';
import './style.css';

const ScrollIndicatorApp = () => {
    return (
        <>
            <ScrollIndicator />
        </>
    )
}

export default ScrollIndicatorApp

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollPosition = window.scrollY;
        const percentage = (scrollPosition / scrollHeight) * 100;

        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-indicator-container">
            <div
                className="scroll-indicator"
                style={{ width: `${scrollPercentage}%` }}
            ></div>
            <div>Labore dolore anim commodo laboris Lorem aute magna cillum pariatur consectetur minim sit. Officia ut officia magna dolore ullamco duis pariatur excepteur. Dolore magna nostrud incididunt cupidatat Lorem mollit labore sit est Lorem nulla excepteur. Dolor veniam dolor dolore excepteur consectetur ad exercitation culpa. Cupidatat non anim ad ad qui.

                Adipisicing fugiat qui est dolor deserunt proident aliqua ullamco amet est amet occaecat pariatur enim. Duis eu culpa exercitation consequat labore aute non consequat eiusmod occaecat nulla deserunt. Nulla minim Lorem proident deserunt veniam. Fugiat cillum veniam enim sint. Pariatur excepteur elit enim occaecat velit ipsum adipisicing proident quis nostrud minim ut.

                Deserunt Lorem nostrud reprehenderit deserunt nisi ut do. Aute ipsum irure qui ea tempor adipisicing irure cupidatat eiusmod laboris dolore. Cupidatat est et eu commodo Lorem est cupidatat enim ex nostrud commodo exercitation consectetur consequat. Laboris cillum veniam est enim sit ad amet reprehenderit incididunt. Officia proident magna sint laboris officia ut consequat officia. Cupidatat enim consequat cupidatat est velit irure sint irure incididunt tempor fugiat nulla. Duis nostrud ullamco velit amet consectetur nostrud nostrud et sunt est ullamco.

                In cillum dolore voluptate Lorem ea do est minim do anim eiusmod laborum. Officia laborum quis eiusmod officia sint ullamco. Incididunt qui deserunt aliqua aliqua reprehenderit anim. Elit esse eu magna commodo enim sunt consequat nostrud veniam et ut. Nisi non officia veniam in labore exercitation. Quis adipisicing et labore ea nisi.

                Quis ut occaecat ut cillum proident ex ea aliquip mollit consequat excepteur non. Commodo qui mollit nostrud amet sint voluptate et aute adipisicing ullamco reprehenderit deserunt anim. Consequat sit eiusmod mollit voluptate adipisicing reprehenderit ex.

                Commodo dolore voluptate dolor excepteur excepteur tempor voluptate duis et. Duis labore nisi duis labore officia reprehenderit adipisicing exercitation irure consectetur sit. Sint laborum quis duis voluptate incididunt aliquip ex id adipisicing proident incididunt dolore.

                Sit officia fugiat excepteur voluptate. Non irure dolore commodo consequat laboris aliquip quis. Pariatur excepteur aliqua ullamco esse ullamco ex laboris excepteur dolor. Eu duis aliquip cupidatat dolore duis aliquip nisi Lorem ex. Mollit in magna dolore culpa eiusmod elit. Labore eu anim pariatur do nulla Lorem reprehenderit consectetur id. Amet velit pariatur magna sunt sint esse aliquip Lorem.

                Dolor et duis aliqua ullamco mollit et sit ex nisi adipisicing id dolor incididunt fugiat. Aliquip culpa sunt excepteur eiusmod mollit velit nisi aute. Ex do nostrud elit pariatur Lorem ipsum magna consectetur. Deserunt sunt ipsum dolor id consectetur fugiat ea ex excepteur sint tempor.

                Aliquip sit ex est esse officia nisi elit veniam Lorem nulla in do ea proident. Proident eiusmod sint fugiat adipisicing. Esse non magna voluptate proident ullamco pariatur magna. Duis laboris ad adipisicing tempor.

                Velit minim exercitation magna esse nulla fugiat. Enim ut irure sit laborum non qui nulla. Magna sit quis enim fugiat aute non nulla aliqua ipsum et ipsum. Nisi magna laboris nisi magna commodo est. Ipsum proident sunt labore irure exercitation quis pariatur reprehenderit adipisicing esse nulla anim. Est qui nostrud consequat consequat reprehenderit labore deserunt quis. Id occaecat exercitation do ullamco eiusmod minim ut dolore veniam consequat labore officia magna duis. Labore dolore anim commodo laboris Lorem aute magna cillum pariatur consectetur minim sit. Officia ut officia magna dolore ullamco duis pariatur excepteur. Dolore magna nostrud incididunt cupidatat Lorem mollit labore sit est Lorem nulla excepteur. Dolor veniam dolor dolore excepteur consectetur ad exercitation culpa. Cupidatat non anim ad ad qui.

                Adipisicing fugiat qui est dolor deserunt proident aliqua ullamco amet est amet occaecat pariatur enim. Duis eu culpa exercitation consequat labore aute non consequat eiusmod occaecat nulla deserunt. Nulla minim Lorem proident deserunt veniam. Fugiat cillum veniam enim sint. Pariatur excepteur elit enim occaecat velit ipsum adipisicing proident quis nostrud minim ut.

                Deserunt Lorem nostrud reprehenderit deserunt nisi ut do. Aute ipsum irure qui ea tempor adipisicing irure cupidatat eiusmod laboris dolore. Cupidatat est et eu commodo Lorem est cupidatat enim ex nostrud commodo exercitation consectetur consequat. Laboris cillum veniam est enim sit ad amet reprehenderit incididunt. Officia proident magna sint laboris officia ut consequat officia. Cupidatat enim consequat cupidatat est velit irure sint irure incididunt tempor fugiat nulla. Duis nostrud ullamco velit amet consectetur nostrud nostrud et sunt est ullamco.

                In cillum dolore voluptate Lorem ea do est minim do anim eiusmod laborum. Officia laborum quis eiusmod officia sint ullamco. Incididunt qui deserunt aliqua aliqua reprehenderit anim. Elit esse eu magna commodo enim sunt consequat nostrud veniam et ut. Nisi non officia veniam in labore exercitation. Quis adipisicing et labore ea nisi.

                Quis ut occaecat ut cillum proident ex ea aliquip mollit consequat excepteur non. Commodo qui mollit nostrud amet sint voluptate et aute adipisicing ullamco reprehenderit deserunt anim. Consequat sit eiusmod mollit voluptate adipisicing reprehenderit ex.

                Commodo dolore voluptate dolor excepteur excepteur tempor voluptate duis et. Duis labore nisi duis labore officia reprehenderit adipisicing exercitation irure consectetur sit. Sint laborum quis duis voluptate incididunt aliquip ex id adipisicing proident incididunt dolore.

                Sit officia fugiat excepteur voluptate. Non irure dolore commodo consequat laboris aliquip quis. Pariatur excepteur aliqua ullamco esse ullamco ex laboris excepteur dolor. Eu duis aliquip cupidatat dolore duis aliquip nisi Lorem ex. Mollit in magna dolore culpa eiusmod elit. Labore eu anim pariatur do nulla Lorem reprehenderit consectetur id. Amet velit pariatur magna sunt sint esse aliquip Lorem.

                Dolor et duis aliqua ullamco mollit et sit ex nisi adipisicing id dolor incididunt fugiat. Aliquip culpa sunt excepteur eiusmod mollit velit nisi aute. Ex do nostrud elit pariatur Lorem ipsum magna consectetur. Deserunt sunt ipsum dolor id consectetur fugiat ea ex excepteur sint tempor.

                Aliquip sit ex est esse officia nisi elit veniam Lorem nulla in do ea proident. Proident eiusmod sint fugiat adipisicing. Esse non magna voluptate proident ullamco pariatur magna. Duis laboris ad adipisicing tempor.

                Velit minim exercitation magna esse nulla fugiat. Enim ut irure sit laborum non qui nulla. Magna sit quis enim fugiat aute non nulla aliqua ipsum et ipsum. Nisi magna laboris nisi magna commodo est. Ipsum proident sunt labore irure exercitation quis pariatur reprehenderit adipisicing esse nulla anim. Est qui nostrud consequat consequat reprehenderit labore deserunt quis. Id occaecat exercitation do ullamco eiusmod minim ut dolore veniam consequat labore officia magna duis. Labore dolore anim commodo laboris Lorem aute magna cillum pariatur consectetur minim sit. Officia ut officia magna dolore ullamco duis pariatur excepteur. Dolore magna nostrud incididunt cupidatat Lorem mollit labore sit est Lorem nulla excepteur. Dolor veniam dolor dolore excepteur consectetur ad exercitation culpa. Cupidatat non anim ad ad qui.

                Adipisicing fugiat qui est dolor deserunt proident aliqua ullamco amet est amet occaecat pariatur enim. Duis eu culpa exercitation consequat labore aute non consequat eiusmod occaecat nulla deserunt. Nulla minim Lorem proident deserunt veniam. Fugiat cillum veniam enim sint. Pariatur excepteur elit enim occaecat velit ipsum adipisicing proident quis nostrud minim ut.

                Deserunt Lorem nostrud reprehenderit deserunt nisi ut do. Aute ipsum irure qui ea tempor adipisicing irure cupidatat eiusmod laboris dolore. Cupidatat est et eu commodo Lorem est cupidatat enim ex nostrud commodo exercitation consectetur consequat. Laboris cillum veniam est enim sit ad amet reprehenderit incididunt. Officia proident magna sint laboris officia ut consequat officia. Cupidatat enim consequat cupidatat est velit irure sint irure incididunt tempor fugiat nulla. Duis nostrud ullamco velit amet consectetur nostrud nostrud et sunt est ullamco.

                In cillum dolore voluptate Lorem ea do est minim do anim eiusmod laborum. Officia laborum quis eiusmod officia sint ullamco. Incididunt qui deserunt aliqua aliqua reprehenderit anim. Elit esse eu magna commodo enim sunt consequat nostrud veniam et ut. Nisi non officia veniam in labore exercitation. Quis adipisicing et labore ea nisi.

                Quis ut occaecat ut cillum proident ex ea aliquip mollit consequat excepteur non. Commodo qui mollit nostrud amet sint voluptate et aute adipisicing ullamco reprehenderit deserunt anim. Consequat sit eiusmod mollit voluptate adipisicing reprehenderit ex.

                Commodo dolore voluptate dolor excepteur excepteur tempor voluptate duis et. Duis labore nisi duis labore officia reprehenderit adipisicing exercitation irure consectetur sit. Sint laborum quis duis voluptate incididunt aliquip ex id adipisicing proident incididunt dolore.

                Sit officia fugiat excepteur voluptate. Non irure dolore commodo consequat laboris aliquip quis. Pariatur excepteur aliqua ullamco esse ullamco ex laboris excepteur dolor. Eu duis aliquip cupidatat dolore duis aliquip nisi Lorem ex. Mollit in magna dolore culpa eiusmod elit. Labore eu anim pariatur do nulla Lorem reprehenderit consectetur id. Amet velit pariatur magna sunt sint esse aliquip Lorem.

                Dolor et duis aliqua ullamco mollit et sit ex nisi adipisicing id dolor incididunt fugiat. Aliquip culpa sunt excepteur eiusmod mollit velit nisi aute. Ex do nostrud elit pariatur Lorem ipsum magna consectetur. Deserunt sunt ipsum dolor id consectetur fugiat ea ex excepteur sint tempor.

                Aliquip sit ex est esse officia nisi elit veniam Lorem nulla in do ea proident. Proident eiusmod sint fugiat adipisicing. Esse non magna voluptate proident ullamco pariatur magna. Duis laboris ad adipisicing tempor.

                Velit minim exercitation magna esse nulla fugiat. Enim ut irure sit laborum non qui nulla. Magna sit quis enim fugiat aute non nulla aliqua ipsum et ipsum. Nisi magna laboris nisi magna commodo est. Ipsum proident sunt labore irure exercitation quis pariatur reprehenderit adipisicing esse nulla anim. Est qui nostrud consequat consequat reprehenderit labore deserunt quis. Id occaecat exercitation do ullamco eiusmod minim ut dolore veniam consequat labore officia magna duis.</div>
        </div>
    );
};