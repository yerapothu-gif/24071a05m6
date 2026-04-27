import { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({ name: "", email: "", phone: "", message: "" });
  const [complaint, setComplaint] = useState({ subject: "", description: "" });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact:", contact);
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint:", complaint);
  };

  return (
    <div>
      <section>
        <h2>Contact Us</h2>
        <form onSubmit={handleContactSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>

      <section>
        <h2>File a Complaint</h2>
        <form onSubmit={handleComplaintSubmit}>
          <div>
            <label>Subject</label>
            <input
              type="text"
              value={complaint.subject}
              onChange={(e) => setComplaint({ ...complaint, subject: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={complaint.description}
              onChange={(e) => setComplaint({ ...complaint, description: e.target.value })}
              required
            />
          </div>
          <button type="submit">Submit Complaint</button>
        </form>
      </section>
    </div>
  );
}
export default Contact;
