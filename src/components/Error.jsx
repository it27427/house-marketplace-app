const Error = () => {
  return (
    <div className='flex-column-center'>
      <figure className='errorthumb'>
        <img src='' alt='error-404' />
      </figure>
      <h2>Page Not Found</h2>
      <a href='/' className='btn-back'>
        Back To Home
      </a>
    </div>
  );
};

export default Error;
