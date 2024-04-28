import React, { useState, useEffect } from 'react';
import profilePic from './aniket.jpg';
import GitHubCalendar from 'react-github-calendar';

const Home = () => {
  const defaultAboutText = "I am a passionate web developer with expertise in HTML, CSS, and JavaScript. I love creating responsive and user-friendly web applications.";
  const defaultAboutText1 = "I am a passionate web developer with expertise in HTML, CSS, and JavaScript. I love creating responsive and user-friendly web applications.";

  const [aboutText1, setAboutText1] = useState(defaultAboutText);
  const [editedAboutText1, setEditedAboutText1] = useState("");
  const [isEditingAbout1, setIsEditingAbout1] = useState(false);

  const [aboutText2, setAboutText2] = useState(defaultAboutText1);
  const [editedAboutText2, setEditedAboutText2] = useState("");
  const [isEditingAbout2, setIsEditingAbout2] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState('');

  // Define projects array with your project data
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectGitHubLink, setNewProjectGitHubLink] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      // Slide project cards
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleAboutEdit1 = () => {
    setIsEditingAbout1(true);
    setEditedAboutText1(aboutText1);
  };

  const handleAboutEdit2 = () => {
    setIsEditingAbout2(true);
    setEditedAboutText2(aboutText2);
  };

  const handleAboutSave1 = () => {
    setIsEditingAbout1(false);
    setAboutText1(editedAboutText1);
  };

  const handleAboutSave2 = () => {
    setIsEditingAbout2(false);
    setAboutText2(editedAboutText2);
  };

  const handleAboutChange1 = (e) => {
    setEditedAboutText1(e.target.value);
  };

  const handleAboutChange2 = (e) => {
    setEditedAboutText2(e.target.value);
  };

  const handleAddLanguage = () => {
    if (newLanguage.trim() === '') {
      return; // Do not add language if it is empty
    }
    setLanguages([...languages, newLanguage]);
    // Clear language input field
    setNewLanguage('');
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleAddProject = () => {
    if (newProjectName.trim() === '' || newProjectDescription.trim() === '') {
      return; // Do not add project if name or description is empty
    }
    setProjects([...projects, { name: newProjectName, description: newProjectDescription, githubLink: newProjectGitHubLink }]);
    // Clear project form fields
    setNewProjectName('');
    setNewProjectDescription('');
    setNewProjectGitHubLink('');
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <body className="bg-gradient-to-b from-blue-800 to-white min-h-screen">
      <div className="container mx-auto p-8">
        {/* Profile Picture Section */}
        <section className="mb-5 relative">
          <div className="container px-6 py-4 bg-gradient-to-b from-blue-300 to-blue-400 border-[5px] border-black rounded-2xl transition duration-300 ease-in-out transform hover:scale-90">
            <div className="flex items-center font-extrabold">
              <img src={profilePic} alt="Profile" className="w-[8%] h-[8%] rounded-full mr-4 border-[5px] border-blue-500 hover:animate-spin" />
              <div>
                <h2 className="text-3xl font-semibold pb-5">Aniket Pethe</h2>
                <div className='w-screen'>
                  <p className="text-black text-lg"> 
                    {isEditingAbout1 ? (
                      <textarea 
                        value={editedAboutText1}
                        onChange={handleAboutChange1}
                        className="w-6/12 h-auto p-0 border rounded-md focus:outline-none focus:border-blue-500 overflow-visible"
                      />
                    ) : (
                      aboutText1
                    )}
                    {isEditingAbout1 ? (
                      <button onClick={handleAboutSave1} className="absolute top-0 right-0 bg-white rounded-xl p-2 m-2 hover:bg-gray-200">Save</button>
                    ) : (
                      <button onClick={handleAboutEdit1} className="absolute top-0 right-0 bg-white rounded-xl p-2 m-2 hover:bg-gray-200">Edit</button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-12">
          <div className="container px-6 py-4 w-full h-auto bg-gradient-to-b from-blue-300 to-blue-400 border-[5px] border-black rounded-2xl transition duration-300 ease-in-out transform hover:scale-90">
            <h2 className="text-3xl font-semibold font:so  mb-4">Skills</h2>
            <div className="flex flex-col space-y-2">
              {/* Language Inputs */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Add Language"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  className="w-full mb-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button onClick={handleAddLanguage} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
              </div>
              {/* Language Checkboxes */}
              <div className="flex flex-wrap">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center bg-gray-200 rounded-md p-2 mr-2 mb-2">
                    <span className="mr-2">{language}</span>
                    <button onClick={() => handleDeleteLanguage(index)} className="text-red-600 hover:text-red-800">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* About Me Text */}
            {isEditingAbout2 ? (
              <textarea 
                value={editedAboutText2}
                onChange={handleAboutChange2}
                className="w-full h-auto p-0 border rounded-md focus:outline-none focus:border-blue-500 overflow-visible"
              />
            ) : (
              <p className="text-gray-700">{aboutText2}</p>
            )}
            {isEditingAbout2 ? (
              <button onClick={handleAboutSave2} className="absolute top-0 right-0 bg-white rounded-xl p-2 m-2 hover:bg-gray-200">Save</button>
            ) : (
              <button onClick={handleAboutEdit2} className="absolute top-0 right-0 bg-white rounded-xl p-2 m-2 hover:bg-gray-200">Edit</button>
            )}
          </div>
        </section>
          
        {/* GitHub Calendar Section */}
        <section>
          <div className="container p-[2%] bg-green-300 w-full h-auto border-[5px] border-black rounded-2xl hover:bg-slate-500 transition duration-300 ease-in-out relative">
            <h3 className="text-black text-3xl mb-4 font-bold text-lg">Days of Code</h3>
            <GitHubCalendar
              username='Anikett009'
              blockSize={20}
              blockMargin={5}
              fontSize={15}
              theme={{
                light: ["#e6fffa", "#b2f5ea", "#81e6d9", "#4fd1c5", "#38b2ac"]
              }}
              style={{
                color: "black"
              }}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="container p-8">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {/* Add Project Button */}
              <div className="flex-none w-64 bg-gray-200 border-[5px] border-black rounded-2xl hover:bg-slate-500 transition duration-300 ease-in-out relative">
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Add Project</h3>
                  <p className="text-gray-700">Click to add a new project</p>
                  <input
                    type="text"
                    placeholder="Project Name"
                    className="w-full mb-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                  />
                  <textarea
                    placeholder="Project Description"
                    className="w-full mb-2 p-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
                    value={newProjectDescription}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                  ></textarea>
                  <input
                    type="text"
                    placeholder="GitHub Link (Optional)"
                    className="w-full mb-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    value={newProjectGitHubLink}
                    onChange={(e) => setNewProjectGitHubLink(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <button onClick={handleAddProject} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
                  </div>
                </div>
              </div>
              {/* Project Cards */}
              {projects.map((project, index) => (
                project.name.trim() !== '' && project.description.trim() !== '' && (
                  <div
                    key={index}
                    className="flex-none w-64 bg-gradient-to-b from-blue-300 to-blue-400 border-[5px] border-black rounded-2xl hover:bg-slate-500 transition duration-300 ease-in-out relative overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold overflow-ellipsis">{project.name}</h3>
                        <button onClick={() => handleDeleteProject(index)} className="text-gray-600 hover:text-red-600 transition duration-300 ease-in-out bg-white p-2 rounded-md">Delete</button>
                      </div>
                      <p className="text-gray-700 overflow-ellipsis">{project.description}</p>
                      {!project.githubLink && (
                        <div className="bg-red-500 text-white p-2 rounded-md mt-2">GitHub link not provided</div>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                      )}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};

export default Home;
