export const AboutBlock2 = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            Our Values and Principles
          </h2>
          <div>
            <h3 className="mb-2 text-xl font-medium">Trust & Security</h3>
            <p className="text-muted-foreground">
              At ePay, protecting your money and personal data is our top
              priority. We use advanced encryption and security measures to
              ensure safe and reliable transactions every time.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly evolve our platform with modern technology to make
              payments faster, easier, and more accessible for everyone in the
              digital economy.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Customer First</h3>
            <p className="text-muted-foreground">
              Every feature we build is designed with our users in mind —
              ensuring a smooth, intuitive, and rewarding financial experience.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Integrity</h3>
            <p className="text-muted-foreground">
              We believe in transparency, honesty, and responsibility in every
              transaction, building long-term trust with our users and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
