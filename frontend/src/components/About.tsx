export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            About Trouthstem
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Trouthstem is a platform dedicated to fostering authentic connections and meaningful
              conversations. We believe in the power of truth, transparency, and genuine human interaction
              in an increasingly digital world.
            </p>
            
            <p>
              Our mission is to create a space where ideas can flourish, where diverse perspectives are
              welcomed, and where every voice has the opportunity to be heard. We're building more than
              just a platform—we're cultivating a community rooted in respect, curiosity, and growth.
            </p>
            
            <p>
              Whether you're here to share your story, learn from others, or simply explore new ideas,
              Trouthstem provides the tools and environment to make those connections meaningful and lasting.
              Join us in building a more connected, understanding world.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">Authentic</h3>
              <p className="text-foreground/70">
                Real conversations with real people
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">Transparent</h3>
              <p className="text-foreground/70">
                Open and honest communication
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">Community</h3>
              <p className="text-foreground/70">
                Building connections that matter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
