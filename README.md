# Personal Blog

This is my personal blog where I will share aspects of my life, both personal and professional. Here, you will find posts about my travels, new skills and technologies I am learning, as well as articles on various topics that may interest me.

## Main features

- 📝 **Blog posts**: Insights into my personal and professional life.
- ✈️ **Travel and technology articles**: Covering various topics of interest.
- 📸 **Photography**: Showcases some of the photographs I've taken.
- 🎨 **Responsive design**: Adapted to different screen sizes and devices.
- 🌗 **Light/dark mode toggle**: Supports light and dark mode for a personalized user experience.
- 🌍 **Multilingual support**: Available in **English**, **Spanish**, and **German**.

## Technologies used

This blog is built using the following technologies:

- **HTML5**: For the structure of the page.
- **CSS3**: For design and style, including adaptability to different devices through responsive design techniques.
- **JavaScript**: For polyfills and functionalities.
- **GitHub Pages**: For hosting.

## Project structure

```
blog/
├── assets/
│   ├── images/
│   │   ├── me/
│   │   ├── favicon/
│   │   ├── ParkSelegerMoor/
│   │   └── COPYRIGHT_IMAGES.md
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       └── main.js
├── en/
│   ├── index.html
│   ├── articles.html
│   └── aboutme.html
├── es/
│   ├── index.html
│   ├── articles.html
│   └── aboutme.html
├── de/
│   ├── index.html
│   ├── articles.html
│   └── aboutme.html
├── .gitignore
├── LICENSE.md
├── README.md
└── index.html
```

## Explanation

- **assets/images/**: Stores various images used in the project, categorized into subfolders:
  - `me/`: Portrait photos.
  - `favicon/`: Browser icon.
  - `ParkSelegerMoor/`: A collection of images specific to that park.
  - `COPYRIGHT_IMAGES.md`: Documentation of image sources and licensing information.
- **assets/styles/main.css**: Contains the main styles for the website, including layout, typography, and responsive design.
- **assets/scripts/main.js**: Contains the core JavaScript logic for the site, handling interactivity and dynamic content.
- **en/**: Contains English versions of the website's pages:
  - `index.html`: English homepage.
  - `articles.html`: English articles page.
  - `aboutme.html`: English personal bio page.
- **es/**: Contains Spanish versions of the website's pages:
  - `index.html`: Spanish homepage.
  - `articles.html`: Spanish articles page.
  - `aboutme.html`: Spanish personal bio page.
- **de/**: Contains German versions of the website's pages:
  - `index.html`: German homepage.
  - `articles.html`: German articles page.
  - `aboutme.html`: German personal bio page.
- **.gitignore**: Specifies files and directories to be ignored by Git, such as temporary or system files.
- **LICENSE.md**: Specifies the terms under which the project is licensed (GNU General Public License v3.0). The images located in `assets/images/` have different license. Please refer to [COPYRIGHT_IMAGES.md](assets/images/COPYRIGHT_IMAGES.md) for details on image sources and specific licensing.
- **README.md**: Documentation file with details on features, installation, and usage.
- **index.html**: The main entry point for the website, used for language redirection.

## Installation and usage

If you want to clone this blog and run it locally on your machine, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/n48dev/blog.git
```

2. Start a simple local server. Use either the "Live Server" extension in VS Code or `http-server` to start a local server.

- **With VS Code's "Live Server"**:

If you're using VS Code, you can install the "Live Server" extension and simply click "Go Live" from the status bar to start the server.

- **With `http-server`**:

If you have Node.js installed, you can use the following command to install it globally:

```bash
npm install -g http-server
```

Then, start the server in the project directory with:

```bash
http-server -p 8000
```

3. Open the local server in your browser by going to:

`localhost:8000/`

## Licenses

- The **code** and **written content** in this repository are licensed under the **GNU General Public License v3.0 (GPL-3.0)**. **This does not include photos.**
- All **photos** located in the `assets/images/` directory (including its subdirectories) are protected by copyright and are not included under the GPL-3.0 license.
  - **Copyright © 2024 - Anthony Buitrago. All rights reserved.**
  - These photos are not covered by the GPL-3.0 license. See the `assets/images/COPYRIGHT_IMAGES.md` file for more details.

## Contact

If you have any questions, suggestions, or just want to get in touch with me, you can do so through:

- **Email**: contact@n48.dev
- **LinkedIn**: [in/n48dev](https://www.linkedin.com/in/n48dev/)

## Acknowledgements

Thanks to everyone who has supported and motivated me to keep learning and exploring. Special thanks to the open-source community for providing the tools and resources to build this blog.