# Email Sender Application

A Node.js application that allows users to send emails using Nodemailer and Express. This app supports CORS and is configurable via environment variables.

## Features

- Send emails using Nodemailer
- Configurable CORS support
- Environment variable configuration for sensitive data
- Error handling and validation for required fields

## Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)
- A Gmail account for sending emails

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/aniketraut16/mail-sender.git
   cd mail-sender

   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

```env
SENDER_EMAIL=your-email@gmail.com
EMAIL_PASS=your-email-password
ALLOWED_ORIGINS=http://example1.com,http://example2.com
```

If you want to allow all origins, set `ALLOWED_ORIGINS` to `all`:

```env
ALLOWED_ORIGINS=all
```

## Usage

1. Start the server:

   ```sh
   npm start
   ```

2. The server will run on `http://localhost:5050`.

3. Send a POST request to `http://localhost:5050/sendMail` with the following JSON body:
   ```json
   {
     "receiverMail": "example@domain.com",
     "subject": "Welcome to Our Service",
     "body": "<h1>Welcome!</h1><p>Thank you for signing up for our service. We are excited to have you on board. If you have any questions, feel free to reach out to us at any time.</p><p>Best regards,<br>The Team</p>"
   }
   ```

## Example Request

Here is an example using `curl` to send a POST request:

```sh
curl -X POST http://localhost:5050/sendMail \
     -H "Content-Type: application/json" \
     -d '{
           "receiverMail": "example@domain.com",
           "subject": "Welcome to Our Service",
           "body": "<h1>Welcome!</h1><p>Thank you for signing up for our service. We are excited to have you on board. If you have any questions, feel free to reach out to us at any time.</p><p>Best regards,<br>The Team</p>"
         }'
```

## Environment Variables

- `SENDER_EMAIL`: The email address used to send emails.
- `EMAIL_PASS`: The password for the sender's email account.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)

```
