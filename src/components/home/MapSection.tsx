const MapSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary-glow uppercase tracking-wider mb-2">Find Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Location</h2>
        </div>
        <div className="rounded-xl overflow-hidden card-shadow max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d79.6350767!3d10.7619261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQzLjAiTiA3OcKwMzgnMDYuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dolphin School Location"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
