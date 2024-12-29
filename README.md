# File Transfer App

A simple React application that allows users to upload files and generate a QR code for downloading the uploaded files. The app provides a user-friendly interface for selecting files, tracking upload progress, and generating a QR code for easy access to the uploaded files.

## Features

- Select multiple files for upload
- Display selected file details
- Simulate file upload with progress tracking
- Generate a QR code for downloading the uploaded files

## Technologies Used

- React
- JavaScript (ES6)
- HTML/CSS

## Installation

To run the File Transfer App locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/yourusername/file-transfer-app.git
   ```
2. **Navigate to the project directory:**
```
cd file-transfer-app
```
3. **Install dependencies:**

If you are using npm:
```
npm install
```
Or if you are using Yarn:
   ```
yarn install
   ```
4. **Start the development server:**
```
npm start
```
Or with Yarn:
```
yarn start
```
5. **Open your browser and navigate to:**

http://localhost:3000
## Usage

- Click on the "Choose Files" button to select one or more files from your device.
- Once files are selected, they will be displayed in a list.
- Click on a file in the list to select it for upload.
- Click the "Upload" button to start the upload process. The progress will be displayed.
- Once the upload is complete, a QR code will be generated. You can scan this QR code to download the uploaded files.

# Code Overview
The main component of the application is FileTransferApp, which manages the state of the application using React hooks. The key functionalities include:

- **File Selection**: Users can select files using an input element.
- **File Upload Simulation**: The upload process is simulated with a progress bar.
- **QR Code Generation**: A QR code is generated using an external API based on the download URL.
# Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments
- **React** - A JavaScript library for building user interfaces.
- **QR Code Generator API** - Used for generating QR codes.
