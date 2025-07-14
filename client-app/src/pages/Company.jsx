import image from "../assets/favicon.png";
import { Link } from "react-router-dom";

function Company() {
  return (
    <div>
      <nav className="shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-4">
        <img src={image} alt="logo" className="h-8"/>JobBoard
      </Link>
        <ul className="flex space-x-4 ">
            <li><a href="/company#about">About</a></li>
            <li><a href="/company#work">Work</a></li>
            <li><a href="/company#policies">Policies</a></li>
            <li><a href="/company#careers">Careers</a></li>
            <li><a href="/company#contact">Contact Us</a></li>
        </ul>
          
      </nav>
      <div className="p-8 max-w-5xl mx-auto text-gray-800 leading-relaxed">
      {/* About */}
      <section id="about" className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">About</h2>
        <p>
          At <strong>JobBoard</strong>, we are revolutionizing the way talent meets opportunity. Founded with the mission to simplify the hiring process for both employers and job seekers, we are a dynamic recruitment-tech platform that empowers individuals and organizations to achieve their goals. Our platform bridges the gap between ambition and access by offering a streamlined, transparent, and efficient solution to job discovery and talent acquisition.
        </p>
        <p className="mt-4">
          With a user-first approach and an agile product mindset, we’ve built tools that are fast, intuitive, and impactful. Whether you're a job seeker looking for your dream job or a recruiter searching for the perfect fit, YourCompany is here to make it happen—better and faster than ever before.
        </p>
      </section>

      {/* What We Do */}
      <section id="work" className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">What We Do</h2>
        <p>
          YourCompany provides an end-to-end recruitment platform where job seekers and recruiters can connect meaningfully. Our offerings include:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li><strong>Smart Job Matching:</strong> Using intelligent algorithms and filters, we match candidates with the most suitable roles based on their experience, skills, and preferences.</li>
          <li><strong>Applicant Tracking System (ATS):</strong> Recruiters can manage their job listings, view applications, and communicate with candidates—all from one powerful dashboard.</li>
          <li><strong>Resume Tools:</strong> Job seekers can create, optimize, and track professional resumes tailored for different industries and roles.</li>
          <li><strong>Analytics & Insights:</strong> Employers get actionable data on job post performance, applicant trends, and hiring benchmarks.</li>
        </ul>
        <p className="mt-4">
          Our goal is to eliminate inefficiencies in hiring and bring speed, clarity, and fairness to the recruitment ecosystem.
        </p>
      </section>

      {/* Company Policies */}
      <section id="policies" className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Company Policies</h2>
        <p>
          At YourCompany, we believe that trust is built through transparency and integrity. Our company policies are designed to uphold ethical standards and protect the interests of all stakeholders:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li><strong>Equal Opportunity:</strong> We are an equal-opportunity employer and do not tolerate discrimination on the basis of gender, caste, religion, age, disability, or orientation.</li>
          <li><strong>Data Privacy:</strong> We adhere to GDPR and global data protection laws. Your data is secure with us and is only used to improve your experience on our platform.</li>
          <li><strong>Zero Tolerance for Exploitation:</strong> Any employer found misusing the platform or violating labor laws is immediately removed and reported.</li>
          <li><strong>Transparency & Accountability:</strong> We maintain clear communication and provide detailed policies on billing, refunds, and user conduct.</li>
        </ul>
        <p className="mt-4">
          Our policies are reviewed regularly to ensure they align with the evolving legal and ethical landscape.
        </p>
      </section>

      {/* Careers */}
      <section id="careers" className="mb-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Careers</h2>
        <p>
          We’re not just building a product—we’re building a culture. At YourCompany, every team member plays a vital role in shaping the future of work. We value creativity, speed, accountability, and the courage to challenge the status quo.
        </p>
        <p className="mt-4">
          Whether you're a full-stack developer passionate about scalable systems, a product designer who obsesses over UX, or a marketer with a sharp growth mindset, there's a place for you here.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li><strong>Flexible Work Environment:</strong> Work from home or in our Bangalore HQ—we trust you to deliver.</li>
          <li><strong>Competitive Salary & ESOPs:</strong> We reward talent and commitment.</li>
          <li><strong>Continuous Learning:</strong> Access to courses, certifications, and mentorship.</li>
          <li><strong>Inclusive Culture:</strong> We celebrate individuality and diversity.</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View Open Positions
        </button>
        <p className="mt-4 text-gray-500">(There are No Openings right now, Thanks for showing interests)</p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="mb-8">
  <h2 className="text-4xl font-bold mb-6 text-blue-700">Contact Us</h2>
  <p>
    We'd love to hear from you. Whether you’re a job seeker looking for guidance, a recruiter exploring hiring options, or just someone curious about what we do—reach out!
  </p>
  <div className="mt-4 space-y-2">
    <p><strong>Email:</strong> abhikmahajan01@gmail.com</p>
    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abhik-mahajan/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/abhik-mahajan</a></p>
    <p><strong>Twitter:</strong> <a href="https://x.com/abhikmahajan01" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@abhikmahajan01</a></p>
    <p><strong>GitHub:</strong> <a href="https://github.com/abhikmahajan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/abhikmahajan</a></p>
  </div>
</section>
    </div>
    </div>
  );
}

export default Company;