const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header selectors 
const header = document.querySelector("header"); 
const navLinks = document.querySelectorAll ("nav a"); 
const cta = document.querySelector(".cta");
const ctaHeader = cta.querySelector("h1");
const ctaImage = document.querySelector("#cta-img"); 

// main content selectors 
const mainContent = document.querySelector(".main-content"); 
const midImage = document.querySelector("#middle-img"); 

//contact selectors 
const contact = document.querySelector(".contact"); 

//footer selectors 
const footer = document.querySelector("footer");

// Updating HTML with JSON data 

// nav section 
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product"; 
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";

// const navLinks = document.querySelectorAll('nav a');
// let count = 1
// navLinks.forEach(element => {
//   element.textContent = siteContent.nav[`nav-item-${count.toString()}`];
//   count++;
// });

// CTA section
document.querySelector("h1").innerHTML="DOM<br> Is<br> Awesome";
document.querySelector("button").innerHTML="Get Started"; 

ctaImage.src = 'img/header-img.png'; 
ctaImage.setAttribute('alt', 'Another image of a code snippet');

// main content section 
console.log(mainContent);
const topContent = mainContent.querySelector(".top-content"); 
const bottomContent = mainContent.querySelector(".bottom-content"); 

// top content section 
const firstTextContent = topContent.querySelector(".text-content:nth-of-type(1)")
const featuresHeader = firstTextContent.querySelector("h4");
featuresHeader.textContent = "Features";
const featuresContent = firstTextContent.querySelector("p");
featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const secondTextContent = topContent.querySelector(".text-content:nth-of-type(2)")
const aboutHeader = secondTextContent.querySelector("h4");
aboutHeader.textContent = "About";
const aboutContent = secondTextContent.querySelector("p");
aboutContent.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// middle image section
midImage.src = "img/mid-page-accent.jpg"; 

//bottom content section 
const firstBottomText = bottomContent.querySelector(".text-content:nth-of-type(1)")
const servicesHeader = firstBottomText.querySelector("h4")
servicesHeader.textContent = "Services"
const servicesContent = firstBottomText.querySelector("p"); 
servicesContent.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const secondBottomText = bottomContent.querySelector(".text-content:nth-of-type(2)")
const productHeader = secondBottomText.querySelector("h4")
productHeader.textContent = "Product"
const productContent = secondBottomText.querySelector("p"); 
productContent.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const thirdBottomText = bottomContent.querySelector(".text-content:nth-of-type(3)")
const visionHeader = thirdBottomText.querySelector("h4")
visionHeader.textContent = "Vision"
const visionContent = thirdBottomText.querySelector("p"); 
visionContent.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// contact section 
const contactHeader = contact.querySelector("h4"); 
contactHeader.textContent = "Contact"; 
const firstPara = contact.querySelector("p:nth-of-type(1)")
firstPara.innerHTML = "123 Way 456 Street" + "<br/>" + "Somewhere,USA"
const midPara = contact.querySelector("p:nth-of-type(2)")
midPara.textContent = "1 (888) 888-8888"
const lastPara = contact.querySelector("p:nth-of-type(3)")
lastPara.textContent = "sales@greatidea.io"

// footer section 
const footerText = footer.querySelector("p"); 
footerText.textContent = "Copyright Great Idea! 2018"

