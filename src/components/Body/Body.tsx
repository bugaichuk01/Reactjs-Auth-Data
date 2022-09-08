import React from 'react';
import styled from 'styled-components';
import {useWindowSize} from "../../_hooks/useWindowSize";
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {IPost} from "../../types/Post";

interface IBody {
    id: number;
}

export const Body: React.FC<IBody> = ({id}) => {
    const windowSize = useWindowSize();
    const {posts} = useTypedSelector(state => state.posts)

    return (
        <>
            <TitleWrapper>
                <Title>
                    Title:
                    {posts.map((post: IPost) => {
                        return (post.userId === id)
                            ? <span key={post.title}>{post.title}</span>
                            : null;
                    })}
                </Title>
            </TitleWrapper>
            {windowSize.width > 424 ? (
                <TextWrapper>
                    <Text>
                        {posts.map((post: IPost) => {
                            return (post.userId === id)
                                ? post.body
                                : null
                        })}
                    </Text>
                </TextWrapper>
            ) : null}
        </>
    );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media ${(props) => props.theme.phone} {
    display: flex;
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const Text = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;