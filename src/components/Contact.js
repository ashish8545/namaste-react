const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="font-bold p-4 m-4">Contact Us</h1>
      <form className="p-4 m-4">
        <input
          className="border border-gray-200  p-2 m-2"
          type="text"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-200  p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-gray-200 bg-gray-100 rounded-lg p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
