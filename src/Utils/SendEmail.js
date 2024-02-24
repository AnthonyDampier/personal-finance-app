import { Resend } from "resend";

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
console.log(resend);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'dampieranthony2@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong> from your application!</p>'
});

export default resend;

