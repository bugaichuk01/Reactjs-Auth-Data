import {useActions} from "../../_hooks/useActions";
import {useEffect} from "react";
import {getUsers} from "../../store/actionCreators/users";
import {getPosts} from "../../store/actionCreators/posts";
import styled from "styled-components";
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {IUser} from "../../types/User";
import {Image} from "../../components/Image/Image";
import {Body} from "../../components/Body/Body";


export const Home = () => {
    const dispatch = useActions();
    const {users} = useTypedSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getPosts());
    }, []);

    return (
        <Container>
            {users.map((user: IUser) => (
                <Wrapper>
                    <InfoWrapper>
                        <Image id={user.id}/>
                        <InfoBody>
                            <Info>Auth: {user.name}</Info>
                            <Info>Auth: {user.company.name}</Info>
                        </InfoBody>
                    </InfoWrapper>
                    <Body id={user.id}/>
                </Wrapper>
            ))}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 45%;
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 5px solid #27569c;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media ${(props) => props.theme.phone} {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  @media ${(props) => props.theme.desktop} {
    display: flex;
    flex-direction: row;
  }`;

const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
`

const Info = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 30px;
`;
