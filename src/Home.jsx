import "./styles/Home.css"

export default function Home(){
  return <div className="container">

    <nav>
      <a href="/Home/" className="logo">Darren Gitagama</a> 

      <div className="nav-links">
        <a href="/Resume/">Resume</a> 
        <a href="/Projects/">Projects</a> 
        <a href="/Contact/">Contact Me</a>

        <div className="switch-modes">
          <button>click</button>
        </div> 
      </div>
    </nav>

    <main>
      <div className="about-section">
        <div id="greeting">
          Hi, I am Darren!
        </div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      
      </div>
      <div className="image">image </div>
    </main>


    <footer>footer</footer>
  </div>
}