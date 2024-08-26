
import React, { useState ,useEffect} from 'react'
const Downloadbtn = (  ) => {
    const styledwd={
     
        backgroundColor: "#4caf50",
        border: "none",
        color: "white",
        padding: "15px , 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px ,2px",
        cursor: "pointer",
        borderRadius: "4px",
      
}
const pdfUrl = '/Broucher.pdf'; // Replace with the actual path to your local file

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    // const handleDownload = () => {
    //     // Create an anchor element
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = filename;
    
    //     // Append the anchor to the body
    //     document.body.appendChild(link);
    
    //     // Programmatically click the anchor
    //     link.click();
    
    //     // Remove the anchor from the body
    //     document.body.removeChild(link);
    //   };
  return (
    <>
    
          <button type="button" onClick={handleDownload} disabled={!pdfUrl} download="downloaded-file.pdf"
                            className="btn py-2 position-relative top-0 end-0 mt-2 me-2 " style={{ backgroundColor:'white',color:'#0b6ab2',borderRadius:"5px"}}> DownLoad Broucher</button>
   
    </>
  )
}

export default Downloadbtn