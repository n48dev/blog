/* This file is part of Anthony's Blog.
Copyright © 2024 - Anthony Buitrago

This blog is licensed under the GNU General Public License v3.0.
See the LICENSE file in the root of this project for details. */
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
    const themeLight = document.getElementById('themeLight');
    const themeDark = document.getElementById('themeDark');
    const themeAutomatic = document.getElementById('themeAutomatic');
    
    function setCSSVariable(variableName, newValue) {
        document.documentElement.style.setProperty(variableName, newValue);
    }
 
    function setLightTheme() {
        setCSSVariable('--background-color--main', '#f0f0f0');
        setCSSVariable('--background-color-primary', '#222');
        setCSSVariable('--background-color-secondary', '#f7f7f7');
        setCSSVariable('--font-color-primary', '#222');
        setCSSVariable('--font-color-secondary', '#eee');
    }

    function setDarkTheme() {
        setCSSVariable('--background-color--main', '#2e2e2e');
        setCSSVariable('--background-color-primary', '#f7f7f7');
        setCSSVariable('--background-color-secondary', '#222');
        setCSSVariable('--font-color-primary', '#eee');
        setCSSVariable('--font-color-secondary', '#222');
    }

    themeLight.addEventListener('click', () => {
        setLightTheme();
        localStorage.setItem('theme', 'light');
    });

    themeDark.addEventListener('click', () => {
        setDarkTheme();
        localStorage.setItem('theme', 'dark');
    });
    
    themeAutomatic.addEventListener('click', () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
        localStorage.removeItem('theme');
    });
    
    const mediaQueryTheme = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryTheme.addEventListener('change', () => {
        if (!localStorage.getItem('theme')) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setDarkTheme();
            } else {
                setLightTheme();
            }
        }
    })

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        setLightTheme();
    } else if (savedTheme === 'dark') {
        setDarkTheme();
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }
    
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
    });
    langES.addEventListener('click', () => {
        localStorage.setItem('lang', 'es');
    });
    langDE.addEventListener('click', () => {
        localStorage.setItem('lang', 'de');
    });
    
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