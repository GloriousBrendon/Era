import era from "../Img/era.png"

function Hero() {
  
    return (
        <section className="hero-image grid content-center justify-center">
        <div className="align-middle">
            <img src={era} width="600" height="600"></img>
            <h1 className="text-5xl font-semibold mt-2 pl-3">
            Esports
            </h1>
            </div>
        </section>
    );
  };
  export default Hero;