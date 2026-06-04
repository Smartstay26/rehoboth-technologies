import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaServer
} from "react-icons/fa";

export default function Services() {

  const services = [
    {
      icon:<FaCode />,
      title:"Software Development"
    },
    {
      icon:<FaCloud />,
      title:"Cloud Solutions"
    },
    {
      icon:<FaShieldAlt />,
      title:"Cyber Security"
    },
    {
      icon:<FaServer />,
      title:"ICT Infrastructure"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {services.map((item,index)=>(
            <div
              key={index}
              className="shadow p-6 rounded-lg text-center"
            >
              <div className="text-blue-700 text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}