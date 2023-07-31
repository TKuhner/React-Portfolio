import { motion } from "framer-motion";

const Project = ({ title }) => {

    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    return (
      <motion.div  >
        <div>
          <p >{title}</p>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
            porttitor accumsan tincidunt.
          </p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </motion.div>
    );
  };


  const Projects = () => {
    return (
      <section id="projects">
        {/* HEADINGS */}
        <motion.div
            id="projectsHeading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div id="projectsTitle">
            <p>
              <span>PRO</span>JECTS
            </p>
            <div>

            </div>
          </div>
          <p >
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at. At magna ornare dictum lectus. Purus massa morbi
            purus nec eget eleifend ut elit.
          </p>
        </motion.div>
  
        {/* PROJECTS */}
        <div id="projectsDiv">
          <motion.div

            // variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ROW 1 */}
            <div id="block1">
              BEAUTIFUL USER INTERFACES
            </div>
            <Project classname="project" title="Project 1" />
            <Project classname="project" title="Project 2" />
  
            {/* ROW 2 */}
            <Project classname="project" title="Project 3" />
            <Project classname="project" title="Project 4" />
            <Project classname="project" title="Project 5" />
  
            {/* ROW 3 */}
            <Project classname="project" title="Project 6" />
            <Project classname="project" title="Project 7" />
            <div id="block2">
              SMOOTH USER EXPERIENCE
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Projects;