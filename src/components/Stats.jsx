export default function Stats() {
  const stats = [
    {
      number: "50+",
      title: "Projects Completed",
      description: "Successfully delivered technology solutions."
    },
    {
      number: "100+",
      title: "Satisfied Clients",
      description: "Trusted by businesses and organizations."
    },
    {
      number: "24/7",
      title: "Technical Support",
      description: "Reliable support whenever you need it."
    },
    {
      number: "5+",
      title: "Years Experience",
      description: "Providing innovative ICT solutions."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Rehoboth Technologies?
          </h2>

          <p className="mt-4 text-gray-600">
            Delivering innovative technology solutions that drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-5xl font-bold text-blue-700 mb-3">
                {item.number}
              </h3>

              <h4 className="text-xl font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}