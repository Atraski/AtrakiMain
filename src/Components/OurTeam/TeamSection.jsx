
import MemberCard from './TeamMemberCard';
import './team.css';

import abhy from "../../images/LinkedIn Abhyuday.png";
import anishka from "../../images/LinkedIn Anishka.png";
import akhilesh from "../../images/LinkedIn Akhilesh.png";
import aman from "../../images/LinkedIn Aman.jpg";
import anand from "../../images/LinkedIn Anand.png";
import aniket from "../../images/LinkedIn Aniket.png";
import darakshan from "../../images/LinkedIn Darakhshan.png";
import gaunika from "../../images/LinkedIn Gaunika.png";
import harman from "../../images/LinkedIn Harman.png";
import isha from "../../images/LinkedIn Isha.png";
// import kirti from "../../images/LinkedIn Kirti.png";
import mehul from "../../images/LinkedIn Mehul.png";
import priyanka from "../../images/LinkedIn Priyanka.png";
import sahil from "../../images/LinkedIn Sahil.png";
import shagun from "../../images/LinkedIn Shagun.png";
import shivangi from "../../images/LinkedIn Shivangi1.png";
import shreya from "../../images/LinkedIn Shreya.png";
import soumasis from "../../images/LinkedIn Soumasish.png";
import vineet from "../../images/LinkedIn Vineet.png";




// import priyanka from "../../images/Priyanka.jpg";


// const teamMembers = [
//   {
//     name: "Anish Dhar",
//     role: "CEO - Founder",
//     image: anish,  
//     linkedin: "https://www.linkedin.com/in/anish-dhar?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx8gYUaYhTcyMIoijF%2FI1DA%3D%3D",
//     twitter: "https://twitter.com/alice"
//   },
//   {
//     name: "Bob Smith",
//     role: "Backend Engineer",
//     image: abhy,
   
//     github: "https://github.com/bob",
//     linkedin: "https://linkedin.com/in/bob",
//     twitter: "https://twitter.com/bob"
//   },
//   {
//     name: "Carol Davis",
//     role: "UX Designer",
//     image: priti,
   
//     linkedin: "https://linkedin.com/in/carol",
//     twitter: "https://twitter.com/carol"
//   },
//   {
//     name: "David Wilson",
//     role: "Product Manager",
//     image: priyanka,
    
//     linkedin: "https://linkedin.com/in/david",
//     twitter: "https://twitter.com/david"
//   },
//   {
//     name: "Anish Dhar",
//     role: "CEO - Founder",
//     image: anish,
      
//     github: "https://github.com/alice",
//     linkedin: "https://linkedin.com/in/alice",
//     twitter: "https://twitter.com/alice"
//   },
//   {
//     name: "Bob Smith",
//     role: "Backend Engineer",
//     image: abhy,
   
//     github: "https://github.com/bob",
//     linkedin: "https://linkedin.com/in/bob",
//     twitter: "https://twitter.com/bob"
//   },
  
//   {
//     name: "David Wilson",
//     role: "Product Manager",
//     image: priyanka,
    
//     linkedin: "https://linkedin.com/in/david",
//     twitter: "https://twitter.com/david"
//   },
// ];

const teamMembers = [
  // Founder
 
  {
    name: "Anishka Pal",
    image:anishka,
    role: "Sr. HR Executive",
    linkedIn: "https://www.linkedin.com/in/anishka-pal-4891b5233/",
  },

  // Operations
  {
    name: "Akhilesh Gupta",
    image: akhilesh,
    role: "Sr. Operations Executive",
    linkedIn: "https://www.linkedin.com/in/akhilesh-kumar-gupta-42579916b/",
  },
  {
    name: "Aman",
    image: aman,
    role: "Graphics Designer",
    linkedIn:
      "",
  },
  {
    name: "Anand Kumar",
    image: anand,
    role: "Sr Motion Graphics Designer",
    linkedIn:
      "http://linkedin.com/in/anand-31119b261",
  },
  {
    name: "Shagun Sharma",
    image: shagun,
    role: "Motion Graphics Designer",
    linkedIn:
      "http://linkedin.com/in/shagun-sharma-baa3452ba",
  },

 
  // Business Development
  {
    name: "Vineet Kumar",
    image: vineet,
    role: "BD Executive",
    linkedIn: "https://www.linkedin.com/in/vineetkumar2002/",
  },
  {
    name: "Aniket Barua",
    image: aniket,
    role: "Marketing Executive",
    linkedIn: "https://www.linkedin.com/in/vineetkumar2002/",
  },
 
  // Web

  // Marketing
  {
    name: "Abhyuday Majhi",
    image: abhy,
    role: "Sr.Marketing Executive",
    linkedIn: "https://www.linkedin.com/in/abhyuday-majhi-52737b193/",
  },

  // Marcom
  
  {
    name: "Gaunika Saberwal",
    image: gaunika,
    role: "Editor",
    linkedIn: "https://www.linkedin.com/in/gaunika-saberwal-71270b227/",
  },
  {
    name: "Mehul Malik",
    image: mehul,
    role: "Marcom Executive",
    linkedIn: "https://www.linkedin.com/in/mehul-malik1/",
  },
  {
    name: "Shivangi Jhamb",
    image: shivangi,
    role: "Marcom Executive",
    linkedIn: "https://www.linkedin.com/in/shivangi-jhamb-083799213/",
  },
 

  // Production
 
  // Designer
  
  {
    name: "Soumasish Datta",
    image: soumasis,
    role: "Graphic Designer",
    linkedIn: "https://www.linkedin.com/in/soumasish-datta-391a70189/",
  },
 

  // PR
  {
    name: "Priyanka Basu",
    image: priyanka,
    role: "Sr. PR Executive",
    linkedIn:
      "",
  },
  {
    name: "Darakhshan Perween",
    image: darakshan,
    role: "social Media Management",
    linkedIn:
      "",
  },
 
  {
    name: "Harman Singh",
    image: harman,
    role: "business Development",
    linkedIn:
      "http://linkedin.com/in/harman-singh-b99571234",
  },
  {
    name: "Isha Srivastav",
    image: isha,
    role: "business Development",
    linkedIn:
      "http://linkedin.com/in/ishasrivastava30",
  },
  {
    name: "Shreya nag",
    image: shreya,
    role: "business Development Executive",
    linkedIn:
      "http://linkedin.com/in/shreya-nag-66a45021b",
  },
 
  {
    name: "Sahil Kochhar",
    image: sahil,
    role: "Web Developer",
    linkedIn:
      "https://www.linkedin.com/in/sahil-kochhar-bb2156193/",
  },
  
];

const TeamSection = () => {
  return (
    <div className="team-container mt-[90px]">
      <h2 className="section-title text-white text-3xl mb-[30px]">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            bio={member.bio}
            linkedin={member.linkedin}
           
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
