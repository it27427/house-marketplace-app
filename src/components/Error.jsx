import error from '@/assets/images/error/error.svg';

const Error = () => {
  const errorTitle = 'Page Not Found!';

  return (
    <div className='errorcomp'>
      <div className='flex-column-center'>
        <figure className='errorthumb'>
          <img src={error} alt='error-404' />
        </figure>

        <h2 className='errortitle'>{errorTitle}</h2>
        <a href='/' className='btn-back'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-arrow-left'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8'
            />
          </svg>
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default Error;
