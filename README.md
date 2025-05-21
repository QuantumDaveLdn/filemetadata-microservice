# My Backend Development Journey

With the completion of this File Metadata Microservice project, I've now finished the entire "Back End Development and APIs" certification from freeCodeCamp. This project marks the culmination of my journey into server-side development - a significant milestone in my growth as a developer.

## Growth Through Building

This certification has transformed my understanding of how web applications work behind the scenes. While building five microservice projects (including this File Metadata service), I've gained practical experience with:

- Creating RESTful APIs that handle different HTTP methods
- Parsing request bodies and form data
- Managing file uploads and processing
- Building flexible backend systems using Express.js
- Implementing proper error handling for robust applications

The hands-on nature of these projects has solidified my understanding in ways that theoretical learning never could. Each challenge pushed me to apply concepts immediately, making the knowledge more concrete and practical.

<img width="1225" alt="Screenshot 2025-05-21 at 19 46 38" src="https://github.com/user-attachments/assets/0058bf41-05b1-4009-9689-2a4aa98f758e" />

![20250521_1953_Happy Pixel Certificates_remix_01jvt303ajem4rdn9jaq5xg2hc](https://github.com/user-attachments/assets/75fad155-fe19-4f5f-b99b-f0b1d1f83f92)

Link for the certification: https://www.freecodecamp.org/certification/QuantumDaveLdn/back-end-development-and-apis

## The Path Forward

Completing both the JavaScript Algorithms and Data Structures certification and now the Backend Development certification represents over 600 hours of focused learning. These accomplishments are fueling my confidence as I continue working toward my goal of becoming an AI engineer within the next 8 months.

My immediate next steps include:

1. Integrating these backend skills with my frontend knowledge to build full-stack applications
2. Deepening my understanding of Node.js ecosystems and database integration
3. Learning Python and related AI/ML libraries to bridge toward AI engineering
4. Building projects that incorporate both web development and AI components

The practical experience of creating working APIs and microservices has been invaluable. Each project, including this File Metadata service, represents not just technical skills but also problem-solving abilities that will serve me well as I transition toward AI development.

There's a special satisfaction in building systems that actually work - seeing users interact with something you've created from scratch. This journey through backend development has reinforced my belief that learning by building is truly the most effective approach.

---

# File Metadata Microservice

A RESTful API that allows users to upload files and receive metadata about those files, such as name, type, and size.

## Project Background

This project is part of the freeCodeCamp "Back End Development and APIs" certification. It builds on skills acquired in previous sections:

* Managing Packages with NPM (✓ COMPLETED)
* Basic Node and Express (✓ COMPLETED)
* MongoDB and Mongoose (✓ COMPLETED)
* Backend APIs and Microservices Projects (✓ COMPLETED)

## Features

This API provides the following endpoint:

- `POST /api/fileanalyse` - Uploads a file and returns metadata
  - Request: Form data with a file field named "upfile"
  - Response: `{ name: String, type: String, size: Number }`

## Example Response

### Uploading a file:
```json
{
  "name": "example.jpg",
  "type": "image/jpeg",
  "size": 95866
}
```

## Technologies Used

- Node.js
- Express.js
- Multer (for file upload handling)
- HTML/CSS (for the front-end interface)

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your port:
   ```
   PORT=3000
   ```
4. Start the server:
   ```
   npm start
   ```
5. Visit `http://localhost:3000` in your browser to access the user interface

## Project Structure

- `index.js` - The main application file with the server configuration and API endpoint
- `views/index.html` - The front-end interface for uploading files
- `public/style.css` - Styling for the front-end interface
- `uploads/` - Directory where uploaded files are temporarily stored

## Skills Acquired

* File upload handling with Multer
* Form data processing
* Express route handling
* File metadata extraction
* HTTP method implementation (POST)
* JSON response formatting
* User interface design for file uploads
* Error handling for file uploads

*This project demonstrates practical backend development skills for handling file uploads and processing metadata, which could be expanded with additional features like image processing, file storage integration, or file type validation.*
