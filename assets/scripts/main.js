function configMenu() {
    const configButton = document.getElementById('configButton');
    const configMenu = document.getElementById('configMenu');
    
    /* ConfigButton show */
    configButton.addEventListener('click', () => {
        configMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!configMenu.contains(event.target) && !configButton.contains(event.target)) {
            configMenu.classList.remove('show');
        }
    });

    /* Handle light/dark/automatic theme */
    const themeAutomatic = document.getElementById('themeAutomatic');
    const themeLight = document.getElementById('themeLight');
    const themeDark = document.getElementById('themeDark');
    
    const container = document.getElementById('container');
    const mainTitle = document.getElementById('mainTitle');
    const divider = document.querySelectorAll('.divider');
    const eachMainArticles = document.querySelectorAll('.eachMainArticles');
    const blogArticles = document.querySelectorAll('.blogArticles');
    const contactInfoP = document.getElementById('contactInfoP');
    const contactInfoLink = document.querySelectorAll('.contactInfoLink');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        container.classList.remove('dark-mode');
        mainTitle.classList.remove('dark-mode');
        configButton.classList.remove('dark-mode');
        if (divider) {
            toggleDividerDarkMode(false);
        }
        if (eachMainArticles) {
            toggleEachMainArticlesDarkMode(false);
        }
        if (blogArticles) {
            toggleBlogArticlesDarkMode(false);
        }
        if (contactInfoP) {
            contactInfoP.classList.remove('dark-mode');
        }
        if (contactInfoLink) {
            toggleContactInfoLinkDarkMode(false);
        }
    } else if (savedTheme === 'dark') {
        container.classList.add('dark-mode');
        mainTitle.classList.add('dark-mode');
        configButton.classList.add('dark-mode');
        if (divider) {
            toggleDividerDarkMode(true);
        }
        if (eachMainArticles) {
            toggleEachMainArticlesDarkMode(true);
        }
        if (blogArticles) {
            toggleBlogArticlesDarkMode(true);
        }
        if (contactInfoP) {
            contactInfoP.classList.add('dark-mode');
        }
        if (contactInfoLink) {
            toggleContactInfoLinkDarkMode(true);
        }
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            container.classList.add('dark-mode');
            mainTitle.classList.add('dark-mode');
            configButton.classList.add('dark-mode');
            if (divider) {
                toggleDividerDarkMode(true);
            }
            if (eachMainArticles) {
                toggleEachMainArticlesDarkMode(true);
            }
            if (blogArticles) {
                toggleBlogArticlesDarkMode(true);
            }
            if (contactInfoP) {
                contactInfoP.classList.add('dark-mode');
            }
            if (contactInfoLink) {
                toggleContactInfoLinkDarkMode(true);
            }
        } else {
            container.classList.remove('dark-mode');
            mainTitle.classList.remove('dark-mode');
            configButton.classList.remove('dark-mode');
            if (divider) {
                toggleDividerDarkMode(false);
            }
            if (eachMainArticles) {
                toggleEachMainArticlesDarkMode(false);
            }
            if (blogArticles) {
                toggleBlogArticlesDarkMode(false);
            }
            if (contactInfoP) {
                contactInfoP.classList.remove('dark-mode');
            }
            if (contactInfoLink) {
                toggleContactInfoLinkDarkMode(false);
            }
        }
    };
    
    themeAutomatic.addEventListener('click', () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            container.classList.add('dark-mode');
            mainTitle.classList.add('dark-mode');
            configButton.classList.add('dark-mode');
            if (divider) {
                toggleDividerDarkMode(true);
            }
            if (eachMainArticles) {
                toggleEachMainArticlesDarkMode(true);
            }
            if (blogArticles) {
                toggleBlogArticlesDarkMode(true);
            }
            if (contactInfoP) {
                contactInfoP.classList.add('dark-mode');
            }
            if (contactInfoLink) {
                toggleContactInfoLinkDarkMode(true);
            }
        } else {
            container.classList.remove('dark-mode');
            mainTitle.classList.remove('dark-mode');
            configButton.classList.remove('dark-mode');
            if (divider) {
                toggleDividerDarkMode(false);
            }
            if (eachMainArticles) {
                toggleEachMainArticlesDarkMode(false);
            }
            if (blogArticles) {
                toggleBlogArticlesDarkMode(false);
            }
            if (contactInfoP) {
                contactInfoP.classList.remove('dark-mode');
            }
            if (contactInfoLink) {
                toggleContactInfoLinkDarkMode(false);
            }
        }
        localStorage.removeItem('theme');
    });
    themeLight.addEventListener('click', () => {
        container.classList.remove('dark-mode');
        mainTitle.classList.remove('dark-mode');
        configButton.classList.remove('dark-mode');
        if (divider) {
            toggleDividerDarkMode(false);
        }
        if (eachMainArticles) {
            toggleEachMainArticlesDarkMode(false);
        }
        if (blogArticles) {
            toggleBlogArticlesDarkMode(false);
        }
        if (contactInfoP) {
            contactInfoP.classList.remove('dark-mode');
        }
        if (contactInfoLink) {
            toggleContactInfoLinkDarkMode(false);
        }
        localStorage.setItem('theme', 'light');
    });
    themeDark.addEventListener('click', () => {
        container.classList.add('dark-mode');
        mainTitle.classList.add('dark-mode');
        configButton.classList.add('dark-mode');
        if (divider) {
            toggleDividerDarkMode(true);
        }
        if (eachMainArticles) {
            toggleEachMainArticlesDarkMode(true);
        }
        if (blogArticles) {
            toggleBlogArticlesDarkMode(true);
        }
        if (contactInfoP) {
            contactInfoP.classList.add('dark-mode');
        }
        if (contactInfoLink) {
            toggleContactInfoLinkDarkMode(true);
        }
        localStorage.setItem('theme', 'dark');
    });

    /* Get automatic theme */
    const mediaQueryTheme = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryTheme.addEventListener('change', () => {
        if (!localStorage.getItem('theme')) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                container.classList.add('dark-mode');
                mainTitle.classList.add('dark-mode');
                configButton.classList.add('dark-mode');
                if (divider) {
                    toggleDividerDarkMode(true);
                }
                if (eachMainArticles) {
                    toggleEachMainArticlesDarkMode(true);
                }
                if (blogArticles) {
                    toggleBlogArticlesDarkMode(true);
                }
                if (contactInfoP) {
                    contactInfoP.classList.add('dark-mode');
                }
                if (contactInfoLink) {
                    toggleContactInfoLinkDarkMode(true);
                }
            } else {
                container.classList.remove('dark-mode');
                mainTitle.classList.remove('dark-mode');
                configButton.classList.remove('dark-mode');
                if (divider) {
                    toggleDividerDarkMode(false);
                }
                if (eachMainArticles) {
                    toggleEachMainArticlesDarkMode(false);
                }
                if (blogArticles) {
                    toggleBlogArticlesDarkMode(false);
                }
                if (contactInfoP) {
                    contactInfoP.classList.remove('dark-mode');
                }
                if (contactInfoLink) {
                    toggleContactInfoLinkDarkMode(false);
                }
            }
        };
    });

    function toggleDividerDarkMode(add) {
        divider.forEach(divider => {
            if (add) {
                divider.classList.add('dark-mode');
            } else {
                divider.classList.remove('dark-mode');
            }
        });
    };

    function toggleEachMainArticlesDarkMode(add) {
        eachMainArticles.forEach(eachMainArticles => {
            if (add) {
                eachMainArticles.classList.add('dark-mode');
            } else {
                eachMainArticles.classList.remove('dark-mode');
            }
        });
    };

    function toggleBlogArticlesDarkMode(add) {
        blogArticles.forEach(blogArticles => {
            if (add) {
                blogArticles.classList.add('dark-mode');
            } else {
                blogArticles.classList.remove('dark-mode');
            }
        });
    };

    function toggleContactInfoLinkDarkMode(add) {
        contactInfoLink.forEach(contactInfoLink => {
            if (add) {
                contactInfoLink.classList.add('dark-mode');
            } else {
                contactInfoLink.classList.remove('dark-mode');
            }
        });
    };

    /* Language settings  */
    const langEN = document.getElementById('langEN');
    const langES = document.getElementById('langES');
    const langDE = document.getElementById('langDE');
    const savedLang = localStorage.getItem('lang');

    const userLang = navigator.language || navigator.userLanguage;
    const currentPage = window.location.pathname.split("/").pop();
    const completeCurrentPage = window.location.pathname.split("/");

    langEN.addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
    })
    langES.addEventListener('click', () => {
        localStorage.setItem('lang', 'es');
    })
    langDE.addEventListener('click', () => {
        localStorage.setItem('lang', 'de');
    })
    
    if (savedLang === 'en') {
        if (currentPage === "index.html" && !completeCurrentPage.includes('en')) {
            window.location.href = `/blog/en/index.html`;
        } else if (currentPage === "articles.html" && !completeCurrentPage.includes('en')) {
            window.location.href = `/blog/en/articles.html`;
        } else if (currentPage === "aboutme.html" && !completeCurrentPage.includes('en')) {
            window.location.href = `/blog/en/aboutme.html`;
        }
    } else if (savedLang === 'es') {
        if (currentPage === "index.html" && !completeCurrentPage.includes('es')) {
            window.location.href = `/blog/es/index.html`;
        } else if (currentPage === "articles.html" && !completeCurrentPage.includes('es')) {
            window.location.href = `/blog/es/articles.html`;
        } else if (currentPage === "aboutme.html" && !completeCurrentPage.includes('es')) {
            window.location.href = `/blog/es/aboutme.html`;
        }
    } else if (savedLang === 'de') {
        if (currentPage === "index.html" && !completeCurrentPage.includes('de')) {
            window.location.href = `/blog/de/index.html`;
        } else if (currentPage === "articles.html" && !completeCurrentPage.includes('de')) {
            window.location.href = `/blog/de/articles.html`;
        } else if (currentPage === "aboutme.html" && !completeCurrentPage.includes('de')) {
            window.location.href = `/blog/de/aboutme.html`;
        }
    } else {
        let langDirectory;
        if (userLang.startsWith("es")) {
            langDirectory = "/es/";
            localStorage.setItem('lang', 'es');
        } else if (userLang.startsWith("de")) {
            langDirectory = "/de/";
            localStorage.setItem('lang', 'de');
        } else {
            langDirectory = "/en/";
            localStorage.setItem('lang', 'en');
        }

        if (currentPage === "index.html") {
            window.location.href = `/blog${langDirectory}index.html`;
        } else if (currentPage === "articles.html") {
            window.location.href = `/blog${langDirectory}articles.html`;
        } else if (currentPage === "aboutme.html") {
            window.location.href = `/blog${langDirectory}aboutme.html`;
        }
    }
};

document.addEventListener("DOMContentLoaded", configMenu);