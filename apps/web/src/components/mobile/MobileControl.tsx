function MobileControl() {
  return (
    <div className='fixed bottom-2 right-2 flex flex-col gap-2 md:hidden'>
      <button
        id='forward'
        className='select-none rounded-xl bg-white bg-opacity-50 px-4 py-2'
      >
        前進
      </button>
      <button
        id='backward'
        className='select-none rounded-xl bg-white bg-opacity-50 px-4 py-2'
      >
        後退
      </button>
    </div>
  );
}

export default MobileControl;
