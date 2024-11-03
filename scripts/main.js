document.addEventListener('DOMContentLoaded', () => {
    const configButton = document.getElementById('configButton');
    const configMenu = document.getElementById('configMenu');

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
    
    /* Despliegue del botón de configuración */
    configButton.addEventListener('click', () => {
        configMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!configMenu.contains(event.target) && !configButton.contains(event.target)) {
            configMenu.classList.remove('show');
        }
    });
    
    /* Cambios de tema claro/oscuro/automático */
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
});