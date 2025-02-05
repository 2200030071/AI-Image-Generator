# AI Image Generator

This is a simple AI Image Generator built using React that utilizes OpenAI's API to generate images based on user input.

## Features
- Users can input a description of the image they want to generate.
- The application fetches an AI-generated image from OpenAI's API.
- The generated image is displayed dynamically on the page.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the project:
   ```sh
   npm start
   ```

## Usage
1. Enter a description of the image you want in the text input field.
2. Click the **Generate** button to fetch the AI-generated image.
3. The generated image will be displayed in the app.

## File Structure
```
📂 src
 ┣ 📂 components
 ┃ ┗ 📜 ImageGen.js
 ┣ 📂 Asserts
 ┃ ┗ 📜 default_image.svg
 ┣ 📜 App.js
 ┣ 📜 index.js
 ┣ 📜 ImageGen.css
```

## API Configuration
Make sure to replace `YOUR API KEY` in `ImageGen.js` with your actual OpenAI API key:
```js
Authorization: "Bearer YOUR API KEY",
```

## Notes
- Ensure you have a valid OpenAI API key to generate images.
- The default image is displayed if no image is generated.
- The image size is set to `512x512` in the API request.

## License
This project is open-source and free to use under the MIT License.
