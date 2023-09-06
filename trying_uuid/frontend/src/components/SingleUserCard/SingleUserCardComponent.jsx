const SingleUserCardComponent = ({ name, email, phone, address }) => {
  return (
    <article>
      <h2>{name}</h2>
      <h3>
        {email} | {phone}
      </h3>
      <h4>{address}</h4>
    </article>
  );
};

export default SingleUserCardComponent;
