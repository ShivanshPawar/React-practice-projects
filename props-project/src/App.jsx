import Card from "./components/card"

const App = () => {

  // Sample job data
  const jobData = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://i.pinimg.com/736x/d9/bd/cf/d9bdcfaa699763ad3ff7482d540078f2.jpg",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$123/hr",
      location: "Mumbai, India",
      isSaved: false
    },
    {
      id: 2,
      company: "Google",
      logo: "https://i.pinimg.com/1200x/b3/f9/63/b3f963f8d5c6744cbfd99e8b1e25d67e.jpg",
      posted: "2 days ago",
      role: "Frontend Developer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$95/hr",
      location: "Bangalore, India",
      isSaved: true

    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://i.pinimg.com/736x/fa/76/9b/fa769ba2fd25c9bdd269a736e0942218.jpg",
      posted: "1 day ago",
      role: "Cloud Solutions Architect",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$140/hr",
      location: "Hyderabad, India",
      isSaved: true
    },
    {
      id: 4,
      company: "Adobe",
      logo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
      posted: "3 days ago",
      role: "Product Designer",
      type: "Remote",
      level: "Mid Level",
      salary: "$110/hr",
      location: "Remote",
      isSaved: false
    },
    {
      id: 5,
      company: "Netflix",
      logo: "https://i.pinimg.com/1200x/f1/b1/fd/f1b1fdd107e191cfbcbd7f4607276a67.jpg",
      posted: "7 days ago",
      role: "Backend Engineer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$130/hr",
      location: "Delhi, India",
      isSaved: false
    },
    {
      id: 6,
      company: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      posted: "4 days ago",
      role: "Mobile App Developer",
      type: "Contract",
      level: "Mid Level",
      salary: "$80/hr",
      location: "Pune, India",
      isSaved: false
    },
    {
      id: 7,
      company: "Tesla",
      logo: "https://i.pinimg.com/1200x/7e/cc/5b/7ecc5b785eab60f98b277b17632f752a.jpg",
      posted: "6 days ago",
      role: "Software Automation Engineer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$150/hr",
      location: "Austin, USA",
      isSaved: true
    },
    {
      id: 8,
      company: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
      posted: "1 week ago",
      role: "Data Analyst",
      type: "Part-Time",
      level: "Junior Level",
      salary: "$70/hr",
      location: "Gurugram, India",
      isSaved: false
    },
    {
      id: 9,
      company: "Byjus",
      logo: "https://i.pinimg.com/736x/ee/4f/82/ee4f8235abca76a1da9b6045ba4226e4.jpg",
      posted: "3 days ago",
      role: "React Developer",
      type: "Remote",
      level: "Mid Level",
      salary: "$85/hr",
      location: "Remote",
      isSaved: false
    },
    {
      id: 10,
      company: "Swiggy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
      posted: "2 days ago",
      role: "DevOps Engineer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Chennai, India",
      isSaved: true
    },
    {
      id: 11,
      company: "Figma",
      logo: "https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg",
      posted: "1 day ago",
      role: "Visual Product Designer",
      type: "Remote",
      level: "Mid Level",
      salary: "$105/hr",
      location: "Remote",
      isSaved: true
    },
    {
      id: 12,
      company: "Notion",
      logo: "https://i.pinimg.com/1200x/cc/63/c8/cc63c8c463091bf48bcbe232b339e317.jpg",
      posted: "4 days ago",
      role: "Full Stack Engineer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$125/hr",
      location: "San Francisco, USA",
      isSaved: false
    }
  ];

  return (
    <div className="parent">
      {jobData.map(function (elem) {
        return <Card key={elem.id} company={elem.company} logo={elem.logo} posted={elem.posted} role={elem.role} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location} isSaved={elem.isSaved} />
      })}
    </div>
  )
}

export default App