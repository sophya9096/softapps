import React from "react";

function Home() {
    return (
        <div id="home">
            <iframe
                title="unique"
                style={{ height: "calc( 100vh )" }}
                width="100%"
                // height="900"
                src="https://www.youtube.com/embed/Zt7ajdvXtmI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Home;
