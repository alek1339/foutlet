import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;

  return (
    <div key={id} className="directory-container">
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="directory-body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;