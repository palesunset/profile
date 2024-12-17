import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className={"col-span-full lg:col-span-12 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
          PROFESSIONAL SUMMARY
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base" style={{ textAlign: "justify" }}>
          Dynamic and results-driven professional with over a decade of experience in telecom engineering, project management, and process optimization.
          Currently excelling as a Technical Support Engineer at Fiber Infrastructure and Network Services Inc., where I leverage advanced analytics and site survey expertise to drive network performance improvements.
          Certified in Safety and Lean Six Sigma, with a proven track record of delivering projects on time and within budget while enhancing operational efficiency. Adept at stakeholder engagement, team leadership, and cross-functional collaboration, I am passionate about applying innovative solutions to complex technical challenges.
          Ready to contribute my diverse skill set and leadership abilities to achieve excellence in your team.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full lg:col-span-12 row-span-2 flex-col items-start ">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            WORK EXPERIENCE
          </h2>
          
          <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.125rem", fontWeight: "normal", marginBottom: "2px",  marginTop: "20px" }}>
          Technical Support Engineer | Fiber Infrastructure and Network Services Inc.
          </h2>
          <p className="text-sm md:text-base text-left w-full text-accent" style={{ marginTop: "0", marginBottom: "10", fontSize: "0.8rem" }}>
          October 2022 – Present | Taguig City, Philippines
          </p>
          <ul className="font-light text-xs sm:text-sm md:text-base list-disc pl-5" style={{ textAlign: 'left', marginTop: '15px' }}>
          <li>Conduct site survey, audit and onsite activities (Card Insertion, Patching).</li>
          <li>Processing of TSSR.</li>
          <li>Creation and Issuance of Engineering Workplan.</li>
          <li>Create Service Order and Method of Procedures and Carry up to NOC Implementation.</li>
          <li>Accomplish Logical Requirements for acceptance process.</li>
          <li>Conduct Engineering and transport assessment.</li>
          <li>Maintain and Safekeep Technical Documentation.</li>
          <li>Create Dashboards (Network Inventory, Caches Inventory, Network Performance, etc.) using Looker Studio and Google Sheets.</li>
          <li>Automate processes (LSP, Network outage scenario) using Python.</li>
          <li>Creation and Issuance of Methods of Procedure (MOP) and EWP (Engineering Work Plan).</li>
          </ul>

          <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.125rem", fontWeight: "normal", marginBottom: "2px",  marginTop: "20px" }}>
          Project Manager (Consultant) | Mozark Philippines Inc.
          </h2>
          <p className="text-sm md:text-base text-left w-full text-accent" style={{ marginTop: "0", marginBottom: "10", fontSize: "0.8rem" }}>
          May 2022 – September 2022 | Mandaluyong City, Philippines
          </p>
          <ul className="font-light text-xs sm:text-sm md:text-base list-disc pl-5" style={{ textAlign: 'left', marginTop: '15px' }}>
          <li>Orchestrated strategic development and management of project elements by implementing Agile methodologies, leading to a 15% improvement in project delivery timelines.</li>
          <li>Fostered a collaborative and high-performing project team by introducing regular Scrum meetings and clear communication protocols, resulting in a 10% increase in productivity and on-time milestones.</li>
          <li>Demonstrated strong decision-making by navigating supply chain disruptions and resource constraints, enabling the project to meet all key milestones on time, improving client satisfaction by 30%.</li>
          <li>Facilitated stakeholder engagement through dynamic communication plans, utilizing tools for timely and transparent updates, improving stakeholder satisfaction by 25%.</li>
          <li>Managed project resources and budgets by optimizing procurement processes and negotiating vendor contracts, effectively reducing costs by 10% while maintaining project quality and adherence to constraints.</li>
          </ul>

          <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.125rem", fontWeight: "normal", marginBottom: "2px",  marginTop: "20px" }}>
          Service Engineer | Advent Green Energy Philippines Inc.
          </h2>
          <p className="text-sm md:text-base text-left w-full text-accent" style={{ marginTop: "0", marginBottom: "10", fontSize: "0.8rem" }}>
          October 2021 – April 2022 | Paranaque City, Philippines
          </p>
          <ul className="font-light text-xs sm:text-sm md:text-base list-disc pl-5" style={{ textAlign: 'left', marginTop: '15px' }}>
          <li>Executed thorough inspections, preventive maintenance, and timely repairs on 50+ fuel cell systems at cell sites using advanced diagnostic tools, ensuring 99% system uptime and peak performance.</li>
          <li>Employed advanced diagnostic tools for rapid troubleshooting, reducing system downtime by 25% and enhancing operational efficiency, leading to a 20% increase in overall system reliability.</li>
          <li>Reacted swiftly to service calls and emergencies by applying real-time diagnostic techniques, achieving a 95% first-call resolution rate, and guaranteeing continuous operation of fuel cell systems.</li>
          </ul>

          <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.125rem", fontWeight: "normal", marginBottom: "2px",  marginTop: "20px" }}>
          Telecom Engineer | Fujitsu Telecom System Philippines Inc.
          </h2>
          <p className="text-sm md:text-base text-left w-full text-accent" style={{ marginTop: "0", marginBottom: "10", fontSize: "0.8rem" }}>
          October 2020 – September 2021 | Makati City, Philippines
          </p>
          <p className="text-sm md:text-base text-left w-full text-accent" style={{ marginTop: "0", marginBottom: "10", fontSize: "0.8rem" }}>
          September 2017 – January 2019 | Makati City, Philippines
          </p>
          <ul className="font-light text-xs sm:text-sm md:text-base list-disc pl-5" style={{ textAlign: 'left', marginTop: '15px' }}>
          <li>Conducted 30+ site surveys to assess Wi-Fi infrastructure requirements, developing optimized network design plans that improved connectivity by 20%.</li>
          <li>Led and managed cross-functional teams of up to 15 technicians, and contractors, ensuring project completion on time and within budget, with a 98% success rate.</li>
          <li>Generated weekly project status reports, highlighting key metrics, achievements, and potential risks, which facilitated informed decision-making and reduced project delays by 15%.</li>
          <li>Handled the documentation for 10+ complex projects, including detailed plans, schedules, progress reports, and change requests, which improved knowledge dissemination efficiency by 25% and enhanced transparency, leading to a 15% reduction in project delays.</li>
          </ul>

          <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.125rem", fontWeight: "normal", marginBottom: "2px",  marginTop: "20px" }}>
          Operations Supervisor | Wuhan FiberHome International Technologies Phils., Inc
          </h2>
          <p className="text-sm md:text-base text-left w-full text-accent" style={{ marginTop: "0", marginBottom: "10", fontSize: "0.8rem" }}>
          February 2019 – September 2020 | Mandaluyong City, Philippines
          </p>
         <ul className="font-light text-xs sm:text-sm md:text-base list-disc pl-5" style={{ textAlign: 'left', marginTop: '15px' }}>
          <li>Supervised and train a team of 20+ technicians in subscriber line installation, optimizing resource allocation to increase installation efficiency by 30% and productivity by 25%.</li>
          <li>Assigned 1000+ work orders monthly, conducted comprehensive performance evaluations, and implemented a recognition program that improved team morale by 20% and performance by 15%.</li>
          <li>Coordinated with stakeholders to ensure seamless installations, reducing service-related issues by 15% and boosting customer satisfaction by 25%, maintaining positive client relationships.</li>
          <li>Implemented process changes that streamlined dispatch operations, enhancing ticket monitoring and service order responsiveness, leading to a 20% increase in operational efficiency.</li>
          </ul>
        </ItemLayout>

        <ItemLayout className={"col-span-full lg:col-span-12 row-span-2 flex-col items-start"}>
        <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.2rem", fontWeight: "normal", marginBottom: "20px" }}>
          CERTIFICATIONS
        </h2>
        <h2 className="text-lg md:text-xl text-left w-full capitalize text-white" style={{ fontSize: "1.1rem", fontWeight: "normal", marginTop: "25px", marginBottom: "5px" }}>
          Construction Occupational Safety and Health (COSH) <br />
          Certified Six Sigma Yellow Belt (CSSYB) <br />
          Project Initiation: Starting a Successful Project <br />
          Foundations of Project Management <br />
          5G New Radio <br />
          5G New Radio Workshop <br />
          5G End-to-End Architecture <br />
        </h2>
  
        {/* Add margin-top to create space between certifications and training */}
        <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.2rem", fontWeight: "normal", marginBottom: "20px", marginTop: "30px" }}>
          TRAININGS
        </h2>
  
        <h2 className="text-lg md:text-xl text-left w-full capitalize text-white" style={{ fontSize: "1.1rem", fontWeight: "normal", marginTop: "25px", marginBottom: "5px" }}>
          Fire Detection and Alarm System Design and Installation <br />
          Cisco Certified Network Associate (CCNA) Training Bootcamp <br />
          Data Analytics <br />
        </h2>
      </ItemLayout>

        <ItemLayout className={"col-span-full lg:col-span-12 row-span-2 flex-col items-start"}>
        <h2 className="text-lg md:text-xl text-left w-full capitalize text-accent" style={{ fontSize: "1.2rem", fontWeight: "normal", marginBottom: "20px", marginTop: "30px" }}>
            Skills
          </h2>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

    
      </div>
    </section>
  );
};

export default AboutDetails;
