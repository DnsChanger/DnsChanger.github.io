import language from '../language.json' with { type: 'json' };

const previewPictures = document.querySelectorAll('#previewPicture');
console.log(previewPictures);
const languageSelectIcon = document.querySelector('#languageSelectIcon');
const languageSelectText = document.querySelector('#languageSelectText');
// Button
const languageButton = document.querySelector('#languageButton');

// Elements for change language
const appDescription = document.querySelector('#appDescription');
const downloadPlatformTitle = document.querySelector('#downloadPlatformTitle');
const homeNav = document.querySelector('#homeNav');
const featureNav = document.querySelector('#featureNav');
const contributorsNav = document.querySelector('#contributorsNav');
const questionsNav = document.querySelector('#questionsNav');
const windowsPlatform = document.querySelector('#windowsPlatform');
const linuxPlatform = document.querySelector('#linuxPlatform');
const cmdPlatform = document.querySelector('#cmdPlatform');
const macPlatform = document.querySelector('#macPlatform');
const dontForgotStar = document.querySelector('#dontForgotStar');
const titlePopularServices = document.querySelector('#titlePopularServices');
const cloudflareDNS = document.querySelector('#cloudflareDNS');
const Online403DNS = document.querySelector('#Online403DNS');
const shecanDNS = document.querySelector('#shecanDNS');
const electroDNS = document.querySelector('#electroDNS');

const titleFeatures = document.querySelector('#titleFeatures');
const featureTitleOne = document.querySelector('#featureTitleOne');
const featureDescriptionOne = document.querySelector('#featureDescriptionOne');
const featureTitleTwo = document.querySelector('#featureTitleTwo');
const featureDescriptionTwo = document.querySelector('#featureDescriptionTwo');
const featureTitleThree = document.querySelector('#featureTitleThree');
const featureDescriptionThree = document.querySelector('#featureDescriptionThree');
const featureTitleFour = document.querySelector('#featureTitleFour');
const featureDescriptionFour = document.querySelector('#featureDescriptionFour');
const featureTitleFive = document.querySelector('#featureTitleFive');
const featureDescriptionFive = document.querySelector('#featureDescriptionFive');
const featureTitleSix = document.querySelector('#featureTitleSix');
const featureDescriptionSix = document.querySelector('#featureDescriptionSix');

const contributorsTitle = document.querySelector('#contributorsTitle');
const contributorsDescription = document.querySelector('#contributorsDescription');
const questionsTitle = document.querySelector('#questionsTitle');
const questionsDescription = document.querySelector('#questionsDescription');
const footerText = document.querySelector('#footerText');


let persianLanguage = true;

languageButton.addEventListener('click', () => {
    if (persianLanguage)
        setLanguageToEnglish();
    else
        setLanguageToPersian();
    persianLanguage = !persianLanguage;
});

let counter = 0;
console.log(previewPictures.length);

setInterval(async () => {
    // Show Next Image        
    if (!(counter > previewPictures.length - 1))
        previewPictures[counter].classList.remove('opacity-0');
    new Promise(async (resolve) => {
        if (counter >= previewPictures.length) {
            previewPictures.forEach(i => {
                i.classList.add('opacity-0');
            });
            previewPictures[0].classList.remove('opacity-0');
            resolve(counter = 0);
        } else
            resolve(counter++);
    });
}, 6000);


function setLanguageToPersian() {
    document.body.classList.remove("font-[Rubik-Regular]");
    document.body.classList.add("font-[peyda]");

    languageSelectText.innerHTML = "English";
    languageSelectIcon.src = "../public/assets/images/united-states-flag-icon.svg";

    appDescription.textContent = language.fa.appDescription;
    downloadPlatformTitle.textContent = language.fa.downloadTitle;

    homeNav.textContent = language.fa.navbar.home;
    featureNav.textContent = language.fa.navbar.features;
    questionsNav.textContent = language.fa.navbar.questions;
    contributorsNav.textContent = language.fa.navbar.contributors;

    windowsPlatform.textContent = language.fa.platforms.windows;
    linuxPlatform.textContent = language.fa.platforms.linux;
    macPlatform.textContent = language.fa.platforms.mac;
    cmdPlatform.textContent = language.fa.platforms.cmd;

    dontForgotStar.textContent = language.fa.dontForgotStar;
    titlePopularServices.textContent = language.fa.popularDNS.title;
    electroDNS.textContent = language.fa.popularDNS.electro;
    shecanDNS.textContent = language.fa.popularDNS.shecan;
    cloudflareDNS.textContent = language.fa.popularDNS.cloudflare;
    Online403DNS.textContent = language.fa.popularDNS.Online403;

    titleFeatures.textContent = language.fa.featuresSection.title;
    featureTitleOne.textContent = language.fa.featuresSection.featureOne.title;
    featureDescriptionOne.textContent = language.fa.featuresSection.featureOne.description;

    featureTitleTwo.textContent = language.fa.featuresSection.featureTwo.title;
    featureDescriptionTwo.textContent = language.fa.featuresSection.featureTwo.description;

    featureTitleThree.textContent = language.fa.featuresSection.featureThree.title;
    featureDescriptionThree.textContent = language.fa.featuresSection.featureThree.description;

    featureTitleFour.textContent = language.fa.featuresSection.featureFour.title;
    featureDescriptionFour.textContent = language.fa.featuresSection.featureFour.description;

    featureTitleFive.textContent = language.fa.featuresSection.featureFive.title;
    featureDescriptionFive.textContent = language.fa.featuresSection.featureFive.description;

    featureTitleSix.textContent = language.fa.featuresSection.featureSix.title;
    featureDescriptionSix.textContent = language.fa.featuresSection.featureSix.description;

    contributorsTitle.textContent = language.fa.contributorsSection.title;
    contributorsDescription.textContent = language.fa.contributorsSection.description;

    questionsTitle.textContent = language.fa.questionSection.title;
    questionsDescription.textContent = language.fa.questionSection.description;

    footerText.textContent = language.fa.footerText;
}

function setLanguageToEnglish() {
    document.body.classList.add("font-[Rubik-Regular]");
    document.body.classList.remove("font-[peyda]");

    languageSelectText.innerHTML = "Persian";
    languageSelectIcon.src = "../public/assets/images/iran-flag-icon.svg";

    appDescription.textContent = language.en.appDescription;
    downloadPlatformTitle.textContent = language.en.downloadTitle;

    homeNav.textContent = language.en.navbar.home;
    featureNav.textContent = language.en.navbar.features;
    questionsNav.textContent = language.en.navbar.questions;
    contributorsNav.textContent = language.en.navbar.contributors;

    windowsPlatform.textContent = language.en.platforms.windows;
    linuxPlatform.textContent = language.en.platforms.linux;
    macPlatform.textContent = language.en.platforms.mac;
    cmdPlatform.textContent = language.en.platforms.cmd;

    dontForgotStar.textContent = language.en.dontForgotStar;
    titlePopularServices.textContent = language.en.popularDNS.title;
    electroDNS.textContent = language.en.popularDNS.electro;
    shecanDNS.textContent = language.en.popularDNS.shecan;
    cloudflareDNS.textContent = language.en.popularDNS.cloudflare;
    Online403DNS.textContent = language.en.popularDNS.Online403;

    titleFeatures.textContent = language.en.featuresSection.title;
    featureTitleOne.textContent = language.en.featuresSection.featureOne.title;
    featureDescriptionOne.textContent = language.en.featuresSection.featureOne.description;

    featureTitleTwo.textContent = language.en.featuresSection.featureTwo.title;
    featureDescriptionTwo.textContent = language.en.featuresSection.featureTwo.description;

    featureTitleThree.textContent = language.en.featuresSection.featureThree.title;
    featureDescriptionThree.textContent = language.en.featuresSection.featureThree.description;

    featureTitleFour.textContent = language.en.featuresSection.featureFour.title;
    featureDescriptionFour.textContent = language.en.featuresSection.featureFour.description;

    featureTitleFive.textContent = language.en.featuresSection.featureFive.title;
    featureDescriptionFive.textContent = language.en.featuresSection.featureFive.description;

    featureTitleSix.textContent = language.en.featuresSection.featureSix.title;
    featureDescriptionSix.textContent = language.en.featuresSection.featureSix.description;

    contributorsTitle.textContent = language.en.contributorsSection.title;
    contributorsDescription.textContent = language.en.contributorsSection.description;

    questionsTitle.textContent = language.en.questionSection.title;
    questionsDescription.textContent = language.en.questionSection.description;

    footerText.textContent = language.en.footerText;
}