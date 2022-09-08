import React, {useEffect} from "react";
import {useActions} from "../../_hooks/useActions";
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {getPhotos} from "../../store/actionCreators/photos";
import {IPhoto} from "../../types/Photo";
import {useWindowSize} from "../../_hooks/useWindowSize";
import styled from "styled-components";


interface ImageType {
    id: number;
}

export const Image: React.FC<ImageType> = ({ id }) => {
    const {photos} = useTypedSelector(state => state.photos);
    const dispatch = useActions();
    const windowSize = useWindowSize();

    useEffect(() => {
        dispatch(getPhotos(id));
    }, []);

    return (
        <>
            {photos.map((photo: IPhoto) => {
                if (photo.id === id && windowSize.width > 424) {
                    return <StyledImage src={photo.thumbnailUrl} key={photo.id} />;
                }
                return null;
            })}
        </>
    );
};

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  float: left;
  margin-right: 30px;
  @media ${(props) => props.theme.phone} {
    display: none;
  }
`;
