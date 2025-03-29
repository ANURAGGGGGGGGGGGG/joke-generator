# 😄 Joke Generator Web App

A React-based application that generates random jokes using the [JokeAPI](https://sv443.net/jokeapi/v2/). Perfect for quick laughs and learning API integration with React!

![Demo Screenshot](./screenshot.png) *Add screenshot later*

## Features
- 🎭 Fetches random jokes from various categories
- ⚡ Real-time joke display
- 🎨 Simple and clean UI
- 🔄 One-click joke regeneration
- 🌐 Responsive design

## Installation
1. Clone the repository:
```bash
git clone https://github.com/ANURAGGGGGGGGGGGG/joke-generator.git
```
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm start
```

## Usage
1. Click the "Click to generate a joke" button

2. View the joke setup (question/statement)

3. See the punchline/delivery appear below

4. Click again for a new random joke

## Technologies Used

- ⚛️ React (v18+)

- 🌐 JokeAPI v2

- 💅 CSS Modules

- 🚀 Create-React-App

## Code Structure
// Component Structure:
- useState() for managing joke state
- fetch() API for getting jokes
- Separate CSS module for styling
- Error handling for API calls
- Clean component organization

## API Response Handling
The component displays:
- `setup`: The joke premise/question

- `delivery`: The punchline/answer

## Acknowledgments

- [JokeAPI](https://v2.jokeapi.dev/) by [Sven Fehler](https://github.com/Sv443)
- React documentation
- create-react-app boilerplate

