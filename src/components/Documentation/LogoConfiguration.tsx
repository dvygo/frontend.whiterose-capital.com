export const LogoConfiguration = () => {
  return (
    <>
      <h3 className=' text-xl font-semibold mt-8 text-white'>Logo</h3>
      <div className='p-6 rounded-md border mt-4 border-dark_border/60'>
        <p className='text-base font-medium text-muted/60 flex lg:flex-row flex-col'>
          1. Change Logo over here :{' '}
          <span className='font-semibold text-base overflow-x-auto'>
            {' '}
            src/components/Layout/Header/Logo/index.tsx
          </span>{' '}
        </p>
        <div className='py-4 px-3 rounded-md bg-dark_grey mt-8'>
          <div className='text-sm text-gray-400'>
            <p>Light: /logo.whiterose-capital.com/light-full.svg</p>
            <p>Dark: /logo.whiterose-capital.com/dark-full.svg</p>
            <p>Edit: src/components/Layout/Header/Logo/index.tsx</p>
          </div>
        </div>
      </div>
    </>
  )
}
