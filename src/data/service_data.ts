const projectItemsList = [
    {
        projectID: 0,
        projectName: 'My portfolio',
        imageUrl: 'https://i.ibb.co/PMqTGzH/Screenshot-2024-07-01-at-16-40-41-SUNUJA.webp',
        githubUrl: 'https://github.com/sanuja-gayantha/React-portfolio',
        demoUrl: 'https://sanuja-dev.netlify.app/',
        desc2: 'This is my portfolio website created using React. It is fully mobile-responsive.',
        techStack: ['React', 'Typescript', 'Tailwindcss', 'CSS3', 'Vite', 'EmailJS'
        ],
        bgColor:'#c9d77e',
        textColor:'#170004',
        demoUrlStatus:true,
        gitHubUrlStatus:true
    },

    {
        projectID: 1,
        projectName: 'Snacks brand',
        imageUrl: 'https://i.ibb.co/Tt9KRvZ/Snacks-brand.webp',
        githubUrl: 'https://github.com/sanuja-gayantha/Snacks-brand',
        demoUrl: 'https://snacks-brand.netlify.app/',
        desc1: 'Did you know that the fortune cookie 🍪, often associated with Chinese cuisine, actually originated in California, not in China?',
        desc2: 'This is a small business website that sells snacks and cookies 🍪. customers can order their favorite flavors online.',
        techStack: ['Angular', 'Typescript', 'Tailwindcss', 'CSS3'],
        bgColor:'#3c6b55',
        textColor:'#fff8ee',
        demoUrlStatus:true,
        gitHubUrlStatus:true
    },

    {
        projectID: 3,
        projectName: 'Scooters',
        imageUrl: 'https://i.ibb.co/2SG65rt/screencapture-electric-scooters-netlify-app-2024-05-31-12-09-10.webp',
        githubUrl: 'https://github.com/sanuja-gayantha/Electric-scooters',
        demoUrl: 'https://electric-scooters.netlify.app/',
        desc1: 'Did you know that the first patent for an electric bicycle, a precursor to modern electric scooters, was filed in the late 19th century by Hosea W. Libbey? 🛴',
        desc2: 'This digital storefront showcases an extensive range of cutting-edge electric scooters 🛴, along with an assortment of top-tier accessories meticulously curated for an enhanced riding experience.',
        techStack: ['Angular', 'Typescript', 'Tailwindcss'

        ],
        bgColor:'#b1aaff',
        textColor:'#170004',
        demoUrlStatus:true,
        gitHubUrlStatus:true
    },
    {
        projectID: 2,
        projectName: 'EShop',
        imageUrl: 'https://i.ibb.co/LQGkdFB/Screenshot-2023-12-30-at-00-33-26-ESHOP.webp',
        githubUrl: 'https://github.com/sanuja-gayantha/Ecommerce-fashion',
        demoUrl: 'https://eshop-ecommerce-fashion.netlify.app/',
        desc1: 'Did you know? The first online retail transaction occurred in 1994 when a Sting CD was sold on NetMarket, marking the inception of ecommerce in the fashion industry.',
        desc2: 'This fashion ecommerce website 🛍️ provides a seamless shopping experience, allowing customers to effortlessly explore and buy a wide range of trendy products.',
        // techStack: ['React', 'Typescript', 'Tailwindcss', 'Vite', 'CSS3', 'Node.js', 'MongoDB', 'REST API', 'JWT'
        // ],
        techStack: ['Angular', 'Typescript', 'Tailwindcss', 'CSS'
    ],
        bgColor:'#f5f0ed',
        textColor:'#f52424',
        demoUrlStatus:true,
        gitHubUrlStatus:true
    },

    // {
    //     projectID: 4,
    //     projectName: 'Ip tracker',
    //     imageUrl: '',
    //     githubUrl: 'https://github.com/sanuja-gayantha/IP-tracker',
    //     demoUrl: 'https://any-ip-address-tracker.netlify.app/',
    //     desc1: 'Did you know that the concept of tracking IP addresses originated in the early 1970s with the development of the Transmission Control Protocol/Internet Protocol (TCP/IP), allowing for the identification and tracing of devices connected to the internet?',
    //     desc2: 'This is an IP address tracking app 🌍📌 that utilizes two separate APIs to track the location of a given IP address.',
    //     techStack: ['Angular', 'Typescript', 'Tailwindcss'
    //     ],
    //     bgColor:'#c9d77e',
    //     textColor:'#170004',
    //     demoUrlStatus:false
    // },


    {
        projectID: 5,
        projectName: 'Unsplash photo app',
        imageUrl:'https://i.ibb.co/Lksn4nF/screencapture-unsplash-photo-app-by-sanuja-netlify-app-2024-05-31-12-45-06-1.webp',
        githubUrl: 'https://github.com/sanuja-gayantha/unsplash-photo-app',
        demoUrl:'https://unsplash-photo-app-by-sanuja.netlify.app/',
        techStack: ['React', 'SCSS'
        ],
        desc2:'Users can search for their desired pictures from the web and then download them.',
        bgColor:'#2d203b',
        textColor:'#fbd2ff',
        demoUrlStatus:true,
        gitHubUrlStatus:true
    },

    {
        projectID: 7,
        projectName: 'Industry reporter ',
        imageUrl: 'https://i.ibb.co/SwZ97Pr/Screenshot-2024-07-01-at-16-54-20-Industry-Reporter.png',
        githubUrl: 'https://github.com/sanuja-gayantha/Industry-reporter',
        techStack: ['Python', 'Angular', 'Typescript', 'Tailwindcss', 'Node.js', 'Selenium', 'Google sheet Api', 'Google drive Api', 'sqlite3', 'JSON', 'requests', 'bs4', 'multithreading', 'Rotating Proxy', 'uuid'
        ],
        desc2:"This is a web scraping tool running on Google Cloud. It finds PDFs on any website, downloads them, uploads them to Google Drive, and updates a Google Sheet. It also has web dashboard.",
        bgColor:'#b1aaff',
        textColor:'#170004',
        demoUrlStatus:false,
        gitHubUrlStatus:true
    },

    {
        projectID: 6,
        projectName: 'Easybank landing page',
        imageUrl: 'https://i.ibb.co/sKKCc4k/255885301-f884a9a6-710a-4dbe-af2a-21387256a5ab.webp',
        githubUrl: 'https://github.com/sanuja-gayantha/Easybank-landing-page',
        techStack: ['HTML5', 'SCSS', 'Javascript'
        ],
        desc2:"This is a recreation of the landing page of EasyBank. Explore its user-friendly design and discover the seamless banking experience it offers.",
        bgColor:'#54457a',
        textColor:'#edebeb',
        demoUrlStatus:false,
        gitHubUrlStatus:true
    },

]

export default projectItemsList;