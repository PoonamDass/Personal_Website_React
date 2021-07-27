
const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/mvodbgdd" method="POST" className="container">
     

     
      <div className="row row1">
        <div className="col-sm-6">
            <label> Name</label>
            <input type="text" name="name" class="form-control" />
        </div>

        <div className="col-sm-6">
            <label> Email</label>
          <input type="text" name="_replyto" class="form-control" />
          </div>
    
      </div>

      <div className="col-md-12 text-area">
       
         <label>Message</label>
          <textarea
            name="message"
            className="form-control md-textarea"
            rows="3"
          ></textarea>
   
      </div>
    <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
};

export default ContactForm;
