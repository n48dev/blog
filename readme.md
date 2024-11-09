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

## Project structure

```
assets/
  ├─ images/
  │   ├─ me/
  │   ├─ favicon/
  │   ├─ ParkSelegerMoor/
  │   └─ COPYRIGHT_IMAGES.md
  ├─ styles/
  │   └─ main.css
  └─ scripts/
      └─ main.js
en/
  ├─ index.html
  ├─ articles.html
  └─ aboutme.html
es/
  ├─ index.html
  ├─ articles.html
  └─ aboutme.html
de/
  ├─ index.html
  ├─ articles.html
  └─ aboutme.html
.gitignore
LICENSE.md
README.md
index.html
```

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

`localhost:8000/en/index.html`

## Licenses

- The **code** and **written content** in this repository are licensed under the **GNU General Public License v3.0 (GPL-3.0)**. **This does not include photos.**
- All **photos** located in the `assets/images/` directory (including its subdirectories) are protected by copyright and are not included under the GPL-3.0 license.
  - **Copyright © 2024 - Anthony Buitrago. All rights reserved.**
  - These photos are not covered by the GPL-3.0 license. See the `assets/images/COPYRIGHT_IMAGES.md` file for more details.

## Contact

If you have any questions, suggestions, or just want to get in touch with me, you can do so through:

- **Email**: n48dev@gmail.com
- **LinkedIn**: [in/n48dev](https://www.linkedin.com/in/n48dev/)

## Acknowledgements

Thanks to everyone who has supported and motivated me to keep learning and exploring. Special thanks to the open-source community for providing the tools and resources to build this blog.