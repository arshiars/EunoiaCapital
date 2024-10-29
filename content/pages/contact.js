// pages/contact.js

export default function ContactForm() {
  return (
    <form name="contact-form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
