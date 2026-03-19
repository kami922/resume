import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kamran",
    lastName: "Haq",
    initials: "KH", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by doodh patti'
        },
        {
            emoji: '🌎',
            text: 'based in Pakistan'
        },
        {
            emoji: "💼",
            text: "Student at University of Education"
        },
        {
            emoji: "📧",
            text: "kamranulhaq2002@gmail.com"
        }
    ],
    socials: [
     
        {
            link: "https://www.instagram.com/kamranulhaq2002/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/kami922",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kamran-ul-haq/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Full-stack developer and DevOps engineer with experience across multiple tech stacks including Ruby on Rails, Django, Laravel, and Python microservices. Completed three internships and an associate engineer role, specializing in backend development, Docker containerization, and AWS deployments. Currently studying Information Technology at University of Education and looking for new opportunities to contribute and grow in software development and DevOps.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'Linux', 'Ci/Cd', 'Django','FastApi', 'Docker'],
            exposedTo: ['nodejs', 'python','AWS']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Multi-Vendor E-commerce Platform",
            live: "/case-study/multi-vendor-ecommerce", // Link to case study
            source: "https://github.com/kami922/Multi-Vendor-eCommerce-MERN-App", // GitHub repository
            image: mock5,
            caseStudy: true // Flag to indicate this has a case study
        },
        {
            title: "Enterprise Social Media Management Platform",
            live: "/case-study/nutz", // Link to case study
            source: "", // Private company project - no public repository
            image: mock2,
            caseStudy: true // Flag to indicate this has a case study
        },
        {
            title: "WemoFit - Fitness Platform DevOps Migration",
            live: "/case-study/wemofit", // Link to case study
            source: "https://acme.wemofit.io/", // Production deployment
            image: mock3,
            caseStudy: true // Flag to indicate this has a case study
        },
        {
            title: "GoReSym: Reconstructing Go Function Signatures",
            live: "/blog/goresym-function-signature-reconstruction",
            source: "",
            image: mock1,
            caseStudy: false,
            contentType: "blog"
        },
        {
            title: "How I Built GoReSym's -strings Feature",
            live: "/blog/goresym-strings-feature",
            source: "",
            image: mock4,
            caseStudy: false,
            contentType: "blog"
        }
    ]
}