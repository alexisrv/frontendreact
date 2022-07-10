import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div className="m-3">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-6 mb-4">
            
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src={item.image}></img>
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>{item.name}</h3>
                <div>
                  <a><strong>Raza: </strong>{item.species}</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;