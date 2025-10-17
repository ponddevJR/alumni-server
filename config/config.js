import "dotenv/config";
import nodemailler from "nodemailer";
import SftpClient from "ssh2-sftp-client";
export const envConfig = {
  port: Number(process.env.PORT) || 8800,
  jwt_secret: process.env.JWT_SECRET,
  mail_server: process.env.MAIL_SERVER,
  mail_port: process.env.MAIL_PORT,
  mail_user: process.env.MAIL_USER,
  mail_pass: process.env.MAIL_PASS,
  cloudinary_url: process.env.CLOUDINARY_URL,
  upload_preset: process.env.UPLOAD_PRESET,
};

export const transporter = nodemailler.createTransport({
  host: envConfig.mail_server,
  port: envConfig.mail_port,
  auth: {
    user: envConfig.mail_user,
    pass: envConfig.mail_pass,
  },
});

export const sftpConfig = async () => {
  const sftp = new SftpClient();

  await sftp.connect({
    host: process.env.SFTP_HOST,
    port: process.env.SFTP_PORT,
    username: process.env.SFTP_USER,
    password: process.env.SFTP_PASS,
  });

  return sftp;
};
