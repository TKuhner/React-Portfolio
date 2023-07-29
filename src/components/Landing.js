const Landing = () => {
    return (
        <section>
            {/* IMAGE */}
                <div>
                    <img src="src/assets/profile-image.png" alt="profile pic" />
                </div>

            {/* TEXT */}
                <div>
                    <p>Trevor<span>Kuhner</span></p>

                    <p>I am a recent computer science graduate with a passion for coding and problem-solving. Eager to embark on a career in software development, I am currently honing my skills through a rigorous coding bootcamp to become a full-stack developer. Throughout my computer science studies, I gained a solid foundation in programming languages such as C++, Java, Python, and JavaScript, as well as hands-on experience with databases, algorithms, and software development methodologies.</p>

                </div>
            {/* BUTTON */}
                <div>
                    <SocialMediaIcons />
                </div>


        </section>
    )
}

export default Landing;