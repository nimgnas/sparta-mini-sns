import React, { useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addPost } from "../redux/modules/posts";


const WritingForm = () => {

  const dispatch = useDispatch();

  const [post, setPost] = useState({
    name: "",
    content: ""
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setPost({...post, [name] : value});
  };

  const onPostAdd = (event) => {
    event.preventDefault();
    const newPost = {
        name: post.name,
        content: post.content,
    }
    
    dispatch(__addPost(newPost));
    setPost({
        name: "",
        content: ""
    });
  };

    return(
      <PostContainer>
          <InputForm onSubmit={onPostAdd}>
            <InputLabel>닉네임</InputLabel>
            <InputText type="text" name="name" value={post.name} onChange={onInputChange}/>
            <InputLabel>내용</InputLabel>
            <InputText type="text" name="content" value={post.content} onChange={onInputChange} />
            <InputAddButton>등록</InputAddButton>
          </InputForm>
      </PostContainer>
    );
};

export default WritingForm;

const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.form`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.label`
  font-size: 20px;
  margin: 0px 10px;
`;

const InputText = styled.input`
  font-size: 20px;
  margin: 0px 10px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  
`;

const InputAddButton = styled.button`
  font-size: 15px;
  width: 60px;
  height: 35px;
  background-color: skyblue;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin-left: 10px;
`;