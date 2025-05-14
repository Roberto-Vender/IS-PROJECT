function Contact() {
  return (
    <section className="py-12 bg-white animate__animated animate__fadeIn animate__delay-1s">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          LMPC INTEGRATED FARM SCHOOL LOCATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side - Contact Information */}
          <div className="text-left">
            <h3 className="text-4xl font-bold mb-6 text-green-900">Contact Information</h3>
            <p className="mb-4 text-black">Contact information includes details for communication, like phone, website, email, and address.</p>
            <div className="mb-2">
            <img src="greenhouse.png" alt="Location Icon" className="inline-block w-6 h-6 mr-2" />
            <span className="text-black">LMPC Integrated FARM School</span>
            <p className="mb-2 text-black">📞 0931-849-5911</p>
            <p className="mb-2 text-black">🌿 LMPC Integrated Organic Farm School</p>
            <div className="mb-2">
            <img src="location1.png" alt="Location Icon" className="inline-block w-6 h-6 mr-2" />
            <span className="text-black">Lamac, Pinamungajan, Cebu</span>
            </div>
            </div>
            <p className="mb-2 text-black">✉️ jeromemabaso22@gmail.com</p>
            </div>

         
          <div className="shadow-lg rounded-lg overflow-hidden">
            <iframe
              title="Google Map - Satellite View"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.999876509418!2d123.6552399!3d10.2746775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a971e23a85e583%3A0xe8f9c7a8ed2f780c!2sLAMAC%20MULTIPURPOSE%20INTEGRATED%20FARM%20SCHOOL!5e0!3m2!1sen!2sph!4v1684345678901!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
