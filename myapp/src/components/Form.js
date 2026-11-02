function Form() {
  return (
    <div>
      <h2>Contact Us</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <br /><br />

        <input type="email" placeholder="Your Email" />
        <br /><br />

        <textarea placeholder="Your Message" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;