# ZEGOCLOUD-VideoCallApp Project

This project is a simple video chat application built with React and Vite, using the ZegoCloud UIKit Prebuilt for video calls. The application allows users to enter a room ID and join a video call. It is designed to demonstrate how to integrate real-time communication features using ZegoCloud's SDK.


## Features

- **Real-time Video Chat**: Join a video room with a unique ID and communicate in real-time.
- **User-friendly Interface**: Simple and intuitive UI to enter room IDs and join calls.
- **Copy Link Functionality**: Easily share the video room link with others.
- **1-on-1 Call Mode**: Supports one-on-one video calls using ZegoCloud's prebuilt components.


## Live Demo

You can try out the live demo of the app [here](https://glittery-nougat-31ee8a.netlify.app/).

## Folder Structure

```
video-chat-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HomePage.jsx
│   │   └── VideoPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md


```


## GIF's

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/ZEGOCLOUD-VideoCallApp/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 



## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **React Router**: For client-side routing.
- **ZegoCloud UIKit Prebuilt**: For prebuilt video call functionalities.
- **Tailwind CSS**: For styling the components.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/ZEGOCLOUD-VideoCallApp.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## How to Use:

### Home Page:

- You will see an input field to enter your name and a "Join" button.
- Enter your desired name or room ID.

### Joining a Room:

- Click the "Join" button after entering the name.
- You will be navigated to the video room URL (e.g., `http://localhost:3000/room/yourname`).

### Video Room:

- The video call interface will be displayed.
- You can share the room link using the provided "Copy link" functionality.
- Start your one-on-one video call.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Router**: A collection of navigational components that compose declaratively with your application. Visit [React Router](https://reactrouter.com/) for more information.

- **ZegoCloud UIKit Prebuilt**: Provides prebuilt UI components for video call functionalities. Visit [ZegoCloud](docs.zegocloud.com/article/14935) for more information.

- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects. Visit [Vite](https://vitejs.dev/) for more information.

- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.



## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

