# SmartFilesConverter

A modern web application for converting files between different formats. This application supports a variety of document, image, and audio formats.

## Project Structure

This repository contains a full-stack file converter web application with separate deployment options:

- `/deployment/github` - Files for deployment on GitHub Pages/GitHub repository
- `/deployment/wordpress` - Files for WordPress plugin deployment

## Features

- Convert files to PDF, DOCX, XLSX, JPG, PNG, MP3 and more
- Batch conversion of multiple files at once
- Fast and efficient conversion engine
- Secure file handling with automatic deletion after processing
- Responsive design works on desktop, tablet, and mobile

## Technologies Used

- React for the frontend UI
- Express for the API backend
- TypeScript for type safety
- TailwindCSS and ShadCN UI for styling
- Zod for validation
- Multer for file uploads
- Archiver for bundling downloads

## Deployment Options

### GitHub Deployment

For deploying as a standalone application:

1. Navigate to the `/deployment/github` directory
2. Follow the instructions in the GitHub deployment [README.md](/deployment/github/README.md)

This option is best for:
- Hosting on GitHub Pages
- Deploying to traditional web hosting
- Using as a standalone application

### WordPress Plugin Deployment

For integrating into a WordPress website:

1. Navigate to the `/deployment/wordpress` directory
2. Follow the instructions in the WordPress plugin [README.md](/deployment/wordpress/README.md)

This option is best for:
- Adding file conversion functionality to an existing WordPress site
- Integrating with WordPress themes and plugins
- Using WordPress user authentication and permissions

## Development

To work on this project:

1. Clone the repository
```
git clone https://github.com/yourusername/smartfilesconverter.git
cd smartfilesconverter
```

2. Install dependencies
```
npm install
```

3. Create necessary directories
```
mkdir uploads
mkdir converted_files
```

4. Start the development server
```
npm run dev
```

## License

MIT License

## Author

[Your Name]