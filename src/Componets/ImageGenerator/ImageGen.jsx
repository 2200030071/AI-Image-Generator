import React, { useRef } from 'react';
import './ImageGen.css';
import default_img from '../Asserts/default_image.svg';

export const ImageGen = () => {

    const [image_url,setImageUrl] = React.useState("/");
    let inputref = useRef(null);

    const imageGenerator = async () => {
        if (inputref.current.value===""){
            return 0;
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    Authorization:
                    "Bearer YOUR API KEY" ,
                    "User-Agent" : "Chrome",
                },
                body:JSON.stringify({
                    prompt : `${inputref.current.value}`,
                    n:1,
                    size:"512x512",
                }),

            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImageUrl(data_array[0]);
        
    } 

  return (
    <div className="ai-image-gen">
      <div className="header">
        Ai Image <span>generator</span>
      </div>
      <div className="image-loading">
        <div className="image">
          <img src={image_url==="./"?{default_img}:{image_url}} alt="AI-generated" />
        </div>
      </div>
      <div className="search-box">
        <input type="text" ref={inputref} className='search-input'placeholder='Describe What You want to see' />
        <div className="generate-btn" onClick={() =>{imageGenerator()}} >Generate</div>
      </div>
    </div>
  );
};

export default ImageGen;
