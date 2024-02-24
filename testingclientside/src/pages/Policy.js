import React from "react";
import Layout from "./../components/Layouts/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="contactus">
      <div className="row contactus mt-4 ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
         <img className="imageabout"src="https://media.licdn.com/dms/image/D4D03AQETfwgq_jnPZA/profile-displayphoto-shrink_800_800/0/1687778401620?e=1693440000&v=beta&t=cpU4MU1oaMNmbkbWyvgll8l6DsLw7Hfajyl1Mo1iNyI"alt="anupam"/>
         <h3>Hi there! 👋 I'm a pre-final year student at MNNIT and a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). With a strong foundation in Data Structures and Algorithms, I bring a comprehensive skill set to the table.
In addition to my studies, I actively contribute as a Web developer in various Hackathon.</h3>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Policy;