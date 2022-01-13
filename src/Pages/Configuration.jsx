import React, { useState } from "react";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";
import Header from "../library/components/AdminHeader";
import FileUpload from "../library/components/FileUpload";
import Icon from "../library/components/Icon";
import Button from "../library/components/Buttons";
import { postApi } from "../services/ApiService";
import ApiInfo from "../services/ApiInfoService";

const Configuration = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("ConfigurationFile", selectedFile, selectedFile.name);

    console.log(selectedFile);
    const result = await postApi(ApiInfo.uploadFile, formData);
    alert("File Uploaded Successfully");
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
       
         <CLabel><p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>
          </CLabel> 
        
      );
    }
    else {
      return (
        <div>
          <br />
          <CLabel><h4>Choose file before Pressing the Upload button</h4></CLabel>
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <Content className="MainContainer">
        <Content className="Container ConfigurationContent">
          <CLabel>
            <h2>Upload Configuration File</h2>
          </CLabel>
          <Content className="FileUploadContainer">
            <FileUpload onChange={onFileChange}></FileUpload>
            <Icon>file_download_outlined</Icon>
          </Content>
          <Button onClick={onFileUpload} className="Large">
            Upload
          </Button>
          {fileData()}
        </Content>
      </Content>
    </>
  );
};

export default Configuration;
