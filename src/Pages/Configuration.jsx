import React, { useState, useEffect } from "react";
import CLabel from "../library/components/Label";
import Content from "../library/components/Content";
import Header from "../library/components/AdminHeader";
import FileUpload from "../library/components/FileUpload";
import Icon from "../library/components/Icon";
import Button from "../library/components/Buttons";
import Theme from "../library/styleHelpers/customTheme";
import Link from "../library/components/Link";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fileUploadActions } from "../app/reducers/fileUploadReducer";

const Configuration = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const fileUploadResult = useSelector((state) => state);
  const result = fileUploadResult.fileUploadReducer.fileInfo;
  const fileMaxSize = 4000000;
  const navigate = useNavigate();
  const user =
    window.localStorage.getItem("user") !== null
      ? JSON.parse(window.localStorage.getItem("user"))
      : null;
  useEffect(() => {
    if (!user) navigate("/admin");
    if (result.statusCode === 200) {
      alert("File Uploaded Successfully");
    }
  }, [navigate, user, result]);

  const onFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size > fileMaxSize) {
        alert(event.target.files[0].name + " Size more than 4MB");
        return;
      } else if (
        event.target.files[0].type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        alert("Invalid File Format");
        return;
      }
    }
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("ConfigurationFile", selectedFile, selectedFile.name);
    try {
      dispatch(fileUploadActions.fileUpload(formData));
    } catch (error) {
      alert(error);
    }
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <CLabel>
          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </CLabel>
      );
    } else {
      return (
        <div>
          <br />
          <CLabel>
            <h4>Choose file before Pressing the Upload button</h4>
          </CLabel>
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
            {/* <Link
              to={
                JSON.parse(window.localStorage.getItem("user"))
                  .sampleConfigurationFileUrl
              }
              target="_blank" rel="noopener noreferrer" download> */}
              <a  href={JSON.parse(window.localStorage.getItem("user"))
                  .sampleConfigurationFileUrl} target="_blank" rel="noopener noreferrer" download>
              <Icon sx={{ color: `${Theme.Colors.primary}` }}>
                file_download
              </Icon>
              </a>
            {/* </Link> */}
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
