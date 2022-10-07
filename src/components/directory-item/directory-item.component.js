import { useNavigate } from "react-router-dom";

import { DirectoryItemContainer, BackroundImage, Body } from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => {
  const { id, imageUrl, title, route } = category;

  const navigate = useNavigate('');

  const onNavigateHandler = () => {
    navigate(route)
  }

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackroundImage imageUrl={imageUrl}>
      </BackroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;