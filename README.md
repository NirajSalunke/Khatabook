![image](https://github.com/user-attachments/assets/902c71f1-af7e-4a3a-b195-b0a39adee671)


# Khatabook

Khatabook is a full-stack application that helps you create and manage daily "khatas" or financial records. With this project, you can create, edit, delete, and view daily financial entries.

This is my first full-stack project built using Node.js, Express.js, and EJS.

## Features

- **Create Khata**: Add a new financial record for the day.
- **View Khata**: View all created khatas with their respective dates.
- **Edit Khata**: Update the details of any existing khata.
- **Delete Khata**: Remove a khata when it's no longer needed.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Styling**: TailwindCSS

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NirajSalunke/Khatabook.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Khatabook
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the app.

## Project Structure

```plaintext
Khatabook/
│
├── public/            # Static files (CSS, images)
├── routes/            # Express routes
├── views/             # EJS templates
├── app.js             # Main entry point
└── package.json       # Project metadata and dependencies
```

## Usage

1. **Create a Khata**: Go to the `/create` route and enter your khata details.
2. **View All Khatas**: The home page (`/`) shows all your created khatas with options to edit or delete.
3. **Edit a Khata**: Click the edit button next to a khata to update it.
4. **Delete a Khata**: Click the delete button to remove a khata.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or feedback!
