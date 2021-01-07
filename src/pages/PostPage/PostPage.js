import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, deletePost, editPost } from '../../redux/reducers/postReducer';
import { removePost } from '../../WebAPI'

const Root = styled.div`
  padding: 70px;
`;

const PostContainer = styled.div`
  width: 70%;
  height: 80px;
  align-items: flex-end;
  justify-content: space-between;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`
const PostTitle = styled.div`
  font-size: 24px;
  padding: 10px 0;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
`;

const PostDate = styled.div`
  display: block;
  color: rgba(0, 0, 0, 0.3);
`;

const PostContent = styled.div`
  margin-top: 20px;
  line-height: 1.5;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  font-size: 14px;
  color: #333;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 20px;
  text-shadow: none;
  border-style: none;
  border: 1px solid #333;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  background-color: #DC4525;
  color: #fff;
  border: none;
`

function Post({ post, onDelete, onEdit }) {
  if (!post) return null;
  return (
    <PostContainer>
      <TitleArea>
        <PostTitle>{post.title}</PostTitle>
        <Buttons>
          <Button onClick={onEdit}>編輯</Button>
          <DeleteButton onClick={onDelete}>刪除</DeleteButton>
        </Buttons>
      </TitleArea>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
      <PostContent>{post.body}</PostContent>
      
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default function PostPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.posts.isLoadingPost);
  const post = useSelector(store => store.posts.post)
  const editPostResponse = useSelector(store => store.posts.editPostResponse);

  const handleDelete = () => {
    dispatch(deletePost(id)).then(() => {
      history.push('/')
    })
  }

  const handleEdit = () => {
    history.push(`/edit-post/${post.id}`)
  }

  useEffect(() => {
    dispatch(getPost(id))
  }, [id, dispatch, editPostResponse]); // dispatch 為甚麼要加入 dependency


  return (
    <Root>
      <Post post={post} onDelete={handleDelete} onEdit={handleEdit}/>
    </Root>
  );
}
