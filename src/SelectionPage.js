import React from "react";

const SelectionPage = ({setSelectedImage}) => {


    const imgArray = ['./assets/IMG_3133.png', './assets/IMG_3134.png'];

    return (
        <>
            <div>Choose an Image</div>
            <div className="img_container">
                {
                    imgArray.map(image => (
                        <div onClick={() => setSelectedImage(image)}>
                            <img src={require(`${image}`)} alt={image}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default SelectionPage